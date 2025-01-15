import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

# Load data
heart_data = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/heart.csv")

# Check data
print(heart_data.head())
print(heart_data.describe())

# Prepare data
X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']

# Split the dataset
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Scale the data (important for convergence)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize the Logistic Regression model
model = LogisticRegression(max_iter=1000)  # Increase max_iter if necessary
model.fit(X_train_scaled, Y_train)

# Accuracy on training data
X_train_prediction = model.predict(X_train_scaled)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Accuracy on Training data : ', training_data_accuracy)

# Accuracy on test data
X_test_prediction = model.predict(X_test_scaled)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Accuracy on Test data : ', test_data_accuracy)

# Input data for prediction
input_data = (62, 0, 0, 140, 268, 0, 0, 160, 0, 3.6, 0, 2, 2)

# Convert input data to numpy array and reshape it
input_data_as_numpy_array = np.asarray(input_data).reshape(1, -1)

# Convert the input data into a DataFrame with the same column names as X
input_data_df = pd.DataFrame(input_data_as_numpy_array, columns=X.columns)

# Scale the input data using the same scaler fitted on the training data
input_data_scaled = scaler.transform(input_data_df)

# Make prediction
prediction = model.predict(input_data_scaled)

# Print the prediction result
if (prediction[0] == 0):
    print('The Person does not have a Heart Disease')
else:
    print('The Person has Heart Disease')
