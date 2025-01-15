import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
import joblib  # For saving and loading the trained model

# Load dataset
heart_data = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/heart.csv")

# Prepare data
X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']

# Split the dataset
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Scale the data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the Logistic Regression model
model = LogisticRegression(max_iter=1000)  # Increase max_iter if necessary
model.fit(X_train_scaled, Y_train)

# Save the trained model
joblib.dump(model, 'heart_disease_model.pkl')
joblib.dump(scaler, 'scaler.pkl')

# Accuracy on training data
X_train_prediction = model.predict(X_train_scaled)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Accuracy on Training data : ', training_data_accuracy)

# Accuracy on test data
X_test_prediction = model.predict(X_test_scaled)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Accuracy on Test data : ', test_data_accuracy)

# Function to predict heart disease based on input data
def predict_heart_disease(input_data):
    # Load the trained model and scaler
    model = joblib.load('heart_disease_model.pkl')
    scaler = joblib.load('scaler.pkl')

    # Convert input data to numpy array and reshape
    input_data_as_numpy_array = np.asarray(input_data).reshape(1, -1)

    # Convert to DataFrame with the same column names as X
    input_data_df = pd.DataFrame(input_data_as_numpy_array, columns=X.columns)

    # Scale the input data
    input_data_scaled = scaler.transform(input_data_df)

    # Make prediction
    prediction = model.predict(input_data_scaled)

    return prediction[0]
