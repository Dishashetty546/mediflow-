import os
import pandas as pd
import numpy as np
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier
import pickle

# Load dataset
dataset_path = "C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/"
df = pd.read_csv(os.path.join(dataset_path, "Training.csv"))

# Data Preprocessing
X = df.drop("prognosis", axis=1)
y = df['prognosis']

# Encode labels
label = LabelEncoder()
y = label.fit_transform(y)

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=20)

# Train & Save SVC Model
svc = SVC(kernel='linear')
svc.fit(X_train, y_train)
pickle.dump(svc, open("svc.pkl", 'wb'))

# Load Model
svc_loaded = pickle.load(open("svc.pkl", 'rb'))

# Read Additional Data
sym_des = pd.read_csv(os.path.join(dataset_path, "symtoms_df.csv"))
precautions = pd.read_csv(os.path.join(dataset_path, "precautions_df.csv"))
workout = pd.read_csv(os.path.join(dataset_path, "workout_df.csv"))
description = pd.read_csv(os.path.join(dataset_path, "description.csv"))
medications = pd.read_csv(os.path.join(dataset_path, "medications.csv"))
diets = pd.read_csv(os.path.join(dataset_path, "diets.csv"))

def helper(dis):
    """Returns additional details about a disease."""
    desc = description[description['Disease'] == dis]['Description']
    desc = " ".join(desc.values) if not desc.empty else "No description available."

    pre = precautions[precautions['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
    pre = pre.values.tolist() if not pre.empty else ["No precautions available."]

    med = medications[medications['Disease'] == dis]['Medication']
    med = med.values.tolist() if not med.empty else ["No medication available."]

    die = diets[diets['Disease'] == dis]['Diet']
    die = die.values.tolist() if not die.empty else ["No diet recommendations available."]

    wrkout = workout[workout['disease'] == dis]['workout']
    wrkout = wrkout.values.tolist() if not wrkout.empty else ["No workout suggestions available."]

    return desc, pre, med, die, wrkout

# Define Symptom-Disease Dictionary Dynamically
symptom_names = X.columns.tolist()
symptoms_dict = {symptom: idx for idx, symptom in enumerate(symptom_names)}

diseases_list = dict(enumerate(label.classes_))  # Use label encoding to map indices to diseases

def get_prediction_value(patient_symptoms):
    """Predicts disease based on user symptoms"""
    input_vector = np.zeros(len(symptoms_dict))  # Ensure correct feature size

    for symptom in patient_symptoms:
        if symptom in symptoms_dict:
            input_vector[symptoms_dict[symptom]] = 1
        else:
            print(f"⚠️ Warning: '{symptom}' not found in symptoms dictionary.")

    input_vector = input_vector.reshape(1, -1)  # Reshape to match model input
    prediction_index = svc_loaded.predict(input_vector)[0]  # Predict disease
    
    return diseases_list.get(prediction_index, "Unknown Disease")  # Return disease name

# Get User Input
symptoms = input("Enter your symptoms (comma-separated): ")
user_symptoms = [sym.strip("[]' ") for sym in symptoms.split(',')]

# Predict disease
predicted_disease = get_prediction_value(user_symptoms)
print(f"\n🩺 **Predicted Disease:** {predicted_disease}\n")

# Fetch Additional Details
desc, pre, med, die, wrkout = helper(predicted_disease)

print(f"📌 **Description:** {desc}\n")
print(f"🛑 **Precautions:** {', '.join([p[0] for p in pre]) if isinstance(pre[0], list) else pre}\n")
print(f"💊 **Medications:** {', '.join(med)}\n")
print(f"🥗 **Diet Recommendations:** {', '.join(die)}\n")
print(f"🏋️ **Workout Suggestions:** {', '.join(wrkout)}\n")
