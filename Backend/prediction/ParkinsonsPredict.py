import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
import joblib  # For saving and loading the trained model

# Load the dataset
parkinsons_data = pd.read_csv('C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/parkinsons.csv')

# Ensure 'status' column is numeric
parkinsons_data['status'] = pd.to_numeric(parkinsons_data['status'], errors='coerce')

# Drop rows with missing values
parkinsons_data = parkinsons_data.dropna()

# Split the data into features (X) and target (Y)
X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
Y = parkinsons_data['status']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# Initialize and train the model
model = svm.SVC(kernel='linear')
model.fit(X_train, Y_train)

# Save the trained model
joblib.dump(model, 'parkinsons_model.pkl')

# Accuracy on training data
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(Y_train, X_train_prediction)
print('Accuracy score of training data : ', training_data_accuracy)

# Accuracy on test data
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(Y_test, X_test_prediction)
print('Accuracy score of test data : ', test_data_accuracy)

# Function to make predictions
def predict_parkinsons(input_data):
    # Load the trained model
    model = joblib.load('parkinsons_model.pkl')

    # Convert input data to numpy array and reshape
    input_data_as_numpy_array = np.asarray(input_data)

    # Reshape the input data to match the model's expected input shape
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    # Make prediction
    prediction = model.predict(input_data_reshaped)

    return prediction[0]
