import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score

diabetes_dataset = pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/diabetes.csv")
print(diabetes_dataset)
# Separating the data and labels
X = diabetes_dataset.drop(columns='Outcome', axis=1)
Y = diabetes_dataset['Outcome']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Train the model
classifier = svm.SVC(kernel='linear')
classifier.fit(X_train, Y_train)

# Accuracy on the training data
X_train_prediction = classifier.predict(X_train)
training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
print('Accuracy score of the training data: ', training_data_accuracy)

# Accuracy on the test data
X_test_prediction = classifier.predict(X_test)
test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
print('Accuracy score of the test data: ', test_data_accuracy)

# Input data
input_data = (5, 166, 72, 19, 175, 25.8, 0.587, 51)

# Convert input data to DataFrame with the same column names
input_data_df = pd.DataFrame([input_data], columns=X.columns)

# Predict using the classifier
prediction = classifier.predict(input_data_df)

# Output prediction
if prediction[0] == 0:
    print('The person is not diabetic')
else:
    print('The person is diabetic')
