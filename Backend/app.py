from flask import Flask, request, jsonify
from prediction.HeartDisease import predict_heart_disease
from prediction.Diabetespredict import predict_diabetes
from prediction.ParkinsonsPredict import predict_parkinsons
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Endpoint for Heart Disease Prediction
@app.route('/predict/heart', methods=['POST'])
def predict_heart():
    try:
        data = request.get_json()
        print("Received input for Heart Disease:", data)  # Debugging
        prediction = predict_heart_disease(data)
        return jsonify({'prediction': bool(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint for Diabetes Prediction
@app.route('/predict/diabetes', methods=['POST'])
def predict_diabetes_route():
    try:
        data = request.get_json()
        print("Received input for Diabetes:", data)  # Debugging
        prediction = predict_diabetes(data)
        return jsonify({'prediction': bool(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint for Parkinson's Prediction
@app.route('/predict/parkinsons', methods=['POST'])
def predict_parkinsons_route():
    try:
        data = request.get_json()
        print("Received input for Parkinson's:", data)  # Debugging
        prediction = predict_parkinsons(data)
        return jsonify({'prediction': bool(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
