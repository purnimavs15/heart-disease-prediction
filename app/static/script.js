document.getElementById('heartDiseaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect input values
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const cp = document.getElementById('cp').value;
    const trestbps = document.getElementById('trestbps').value;
    const chol = document.getElementById('chol').value;
    const fbs = document.getElementById('fbs').value;
    const restecg = document.getElementById('restecg').value;
    const thalach = document.getElementById('thalach').value;
    const exang = document.getElementById('exang').value;
    const oldpeak = document.getElementById('oldpeak').value;
    const slope = document.getElementById('slope').value;
    const ca = document.getElementById('ca').value;
    const thal = document.getElementById('thal').value;

    // Send data to the server using fetch
    fetch('/check_heart_disease', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            age,
            sex,
            cp,
            trestbps,
            chol,
            fbs,
            restecg,
            thalach,
            exang,
            oldpeak,
            slope,
            ca,
            thal
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display the result
        document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
