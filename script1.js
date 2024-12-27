// Modify submitBooking to use fetch to send data to backend
function submitBooking() {
    // Get the form data
    const serviceType = document.getElementById('hairServices').style.display === 'block' ? 'hair' : 'nail';
    const service = serviceType === 'hair' ? document.getElementById('hairService').value : document.getElementById('nailService').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Send a POST request to the backend
    fetch('http://localhost:3000/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            serviceType,
            service,
            appointmentDate,
            appointmentTime,
            fullName,
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display the confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    })
    .catch(error => console.error('Error:', error));
}
