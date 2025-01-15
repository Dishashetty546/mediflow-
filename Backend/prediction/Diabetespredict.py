import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
import joblib  # For saving and loading the trained model

# Load dataset
diabetes_dataset = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/diabetes.csv")

# Separating the data and labels
X = diabetes_dataset.drop(columns='Outcome', axis=1)
Y = diabetes_dataset['Outcome']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Train the model
classifier = svm.SVC(kernel='linear')
classifier.fit(X_train, Y_train)

# Save the trained model
joblib.dump(classifier, 'diabetes_model.pkl')

# Accuracy on the training data
X_train_prediction = classifier.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Accuracy score of the training data: ', training_data_accuracy)

# Accuracy on the test data
X_test_prediction = classifier.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Accuracy score of the test data: ', test_data_accuracy)

# Function to predict diabetes based on input data
def predict_diabetes(input_data):
    # Convert input data to DataFrame with the same column names
    input_data_df = pd.DataFrame([input_data], columns=X.columns)

    # Load the trained model (if not already loaded)
    model = joblib.load('diabetes_model.pkl')

    # Predict using the classifier
    prediction = model.predict(input_data_df)

    # Return prediction
    return prediction[0]
