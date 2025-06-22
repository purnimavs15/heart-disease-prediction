import joblib

# Load your trained model (make sure to save your model as a .pkl file)
model = joblib.load('app/model/heart_disease_model.pkl')

def predict_heart_disease(features):
    prediction = model.predict([features])
    return "Heart Disease" if prediction[0] == 1 else "No Heart Disease"
