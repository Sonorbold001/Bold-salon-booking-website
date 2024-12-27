// script.js

// Function to handle the form submission
function submitBooking() {
    // Get form data
    const serviceType = document.getElementById('hairServices').style.display === 'block' ? 'hair' : 'nail';
    const service = serviceType === 'hair' ? document.getElementById('hairService').value : document.getElementById('nailService').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Prepare data to send to the server
    const bookingData = {
        serviceType,
        service,
        appointmentDate,
        appointmentTime,
        fullName,
        email
    };

    // Send a POST request to the backend
    fetch('http://localhost:3000/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            // Display confirmation message to the user
            document.getElementById('confirmationMessage').style.display = 'block';
            document.querySelector('.container').style.display = 'none';
            console.log(data.message);  // Show success message in the console
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
