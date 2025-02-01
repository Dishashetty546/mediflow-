import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score

# Load dataset
parkinsons_data = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/parkinsons.csv")

# Ensure 'status' column is numeric
parkinsons_data['status'] = pd.to_numeric(parkinsons_data['status'], errors='coerce')

# Drop rows with missing values
parkinsons_data = parkinsons_data.dropna()

# Prepare Data
X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
Y = parkinsons_data['status']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# Train Model
model = svm.SVC(kernel='linear')
model.fit(X_train, Y_train)

# Save Model
joblib.dump(model, 'parkinsons_model.pkl')

# Function to predict Parkinson's Disease
def predict_parkinsons(input_data):
    model = joblib.load('parkinsons_model.pkl')  # Load trained model

    # Convert dictionary input into list format
    try:
        input_data_list = [input_data[feature] for feature in X.columns]
    except KeyError as e:
        return f"Missing feature: {str(e)}"

    # Convert to numpy array and reshape
    input_data_as_numpy_array = np.asarray(input_data_list).reshape(1, -1)

    # Make prediction
    prediction = model.predict(input_data_as_numpy_array)
    
    return int(prediction[0])  # Ensure JSON serializable output
