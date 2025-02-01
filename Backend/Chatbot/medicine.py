import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
# from sklearn.model_selection import make_classification
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier,GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score,confusion_matrix

#creating a dictionary to store all these models
models={
    "SVC":SVC(kernel='linear'),
    
    "RandomForest":RandomForestClassifier(n_estimators=100,random_state=42),
    "GradientBoosting":GradientBoostingClassifier(n_estimators=100,random_state=42),
    "KNeighbors":KNeighborsClassifier(n_neighbors=5),
    "MultinomialNB":MultinomialNB()
}
for model_name,model in models.items():
    print(model_name,":",model)

df= pd.read_csv("C:/Users/LENOVO/OneDrive/Desktop/mediflow--/Backend/dataset/Training.csv")
df.head() #elements
print(df.shape)
print(len(df['prognosis'].unique())) #no of diseases


X=df.drop("prognosis",axis=1)
y=df['prognosis']

X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.3,random_state=20)
print(X_train.shape,X_test.shape,y_train.shape,y_test.shape)
print(y)

label= LabelEncoder()
LabelEncoder.fit(y)
y= label.transform(y)