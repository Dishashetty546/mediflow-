import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score

# Load dataset
diabetes_dataset = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/diabetes.csv")

# Prepare Data
X = diabetes_dataset.drop(columns='Outcome', axis=1)
Y = diabetes_dataset['Outcome']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Train Model
classifier = svm.SVC(kernel='linear')
classifier.fit(X_train, Y_train)

# Save Model
joblib.dump(classifier, 'diabetes_model.pkl')

# Function to predict Diabetes
def predict_diabetes(input_data):
    model = joblib.load('diabetes_model.pkl')  # Load trained model

    # Convert dictionary input into list format
    try:
        input_data_list = [input_data[feature] for feature in X.columns]
    except KeyError as e:
        return f"Missing feature: {str(e)}"

    # Convert to DataFrame with correct columns
    input_data_df = pd.DataFrame([input_data_list], columns=X.columns)

    # Make prediction
    prediction = model.predict(input_data_df)

    return int(prediction[0])  # Ensure JSON serializable output
