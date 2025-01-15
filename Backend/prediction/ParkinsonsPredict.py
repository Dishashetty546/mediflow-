import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score

# loading the data from csv file to a Pandas DataFrame
parkinsons_data = pd.read_csv('C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/parkinsons.csv')

# Ensure 'status' column is numeric
parkinsons_data['status'] = pd.to_numeric(parkinsons_data['status'], errors='coerce')

# Drop rows with missing values
parkinsons_data = parkinsons_data.dropna()

# Grouping based on the target variable and applying aggregation on numeric columns
parkinsons_data.select_dtypes(include=[np.number]).groupby('status').mean()

# Splitting data into X and Y
X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
Y = parkinsons_data['status']

# Train-test split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# Model initialization and training
model = svm.SVC(kernel='linear')
model.fit(X_train, Y_train)

# Accuracy on training data
X_train_prediction = model.predict(X_train)
training_data_accuracy = accuracy_score(Y_train, X_train_prediction)
print('Accuracy score of training data : ', training_data_accuracy)

# Accuracy on test data
X_test_prediction = model.predict(X_test)
test_data_accuracy = accuracy_score(Y_test, X_test_prediction)
print('Accuracy score of test data : ', test_data_accuracy)

# Making a prediction for new input data
input_data = (197.07600, 206.89600, 192.05500, 0.00289, 0.00001, 0.00166, 0.00168, 0.00498, 0.01098, 0.09700, 0.00563, 0.00680, 0.00802, 0.01689, 0.00339, 26.77500, 0.422229, 0.741367, -7.348300, 0.177551, 1.743867, 0.085569)

# Convert input data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# Reshaping input data
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

# Predicting based on the input data
prediction = model.predict(input_data_reshaped)
# Convert input data to a DataFrame with column names
input_data_df = pd.DataFrame(input_data_reshaped, columns=X.columns)

# Make prediction with proper feature names
prediction = model.predict(input_data_df)

# Output result
if prediction[0] == 0:
    print("The Person does not have Parkinson's Disease")
else:
    print("The Person has Parkinson's Disease")
