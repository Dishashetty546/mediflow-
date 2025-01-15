from flask import Flask, request, jsonify
from prediction.HeartDisease import predict_heart_disease
from prediction.Diabetespredict import predict_diabetes
from prediction.ParkinsonsPredict import predict_parkinsons

app = Flask(__name__)

# Endpoint for Heart Disease prediction
@app.route('/predict/heart', methods=['POST'])
def predict_heart():
    data = request.get_json()  # Get input data as JSON
    prediction = predict_heart_disease(data)
    return jsonify({'prediction': prediction})

# Endpoint for Diabetes prediction
@app.route('/predict/diabetes', methods=['POST'])
def predict_diabetes_route():
    data = request.get_json()
    prediction = predict_diabetes(data)
    return jsonify({'prediction': prediction})

# Endpoint for Parkinson's prediction
@app.route('/predict/parkinsons', methods=['POST'])
def predict_parkinsons_route():
    data = request.get_json()
    prediction = predict_parkinsons(data)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
