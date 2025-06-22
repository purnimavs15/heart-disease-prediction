from flask import Blueprint, render_template, request, jsonify
from .model import predict_heart_disease

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/check_heart_disease', methods=['GET', 'POST'])
def check_heart_disease():
    if request.method == 'POST':
        # Get data from the form
        data = request.form
        features = [
            float(data['age']),
            int(data['sex']),
            int(data['cp']),
            float(data['trestbps']),
            float(data['chol']),
            int(data['fbs']),
            int(data['restecg']),
            float(data['thalach']),
            int(data['exang']),
            float(data['oldpeak']),
            int(data['slope']),
            int(data['ca']),
            int(data['thal'])
        ]
        prediction = predict_heart_disease(features)
        return jsonify({'prediction': prediction})
    return render_template('check_heart_disease.html')

@main.route('/survey')
def survey():
    print("Survey page accessed")  # Debugging line
    return render_template('survey.html')


@main.route('/model')
def model():
    return render_template('model.html')
