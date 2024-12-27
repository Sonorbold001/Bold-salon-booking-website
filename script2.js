// Function to show hair or nail services based on tab selection
function showService(serviceType) {
    // Hide both service forms
    document.getElementById('hairServices').style.display = 'none';
    document.getElementById('nailServices').style.display = 'none';

    // Display the selected service form
    if (serviceType === 'hair') {
        document.getElementById('hairServices').style.display = 'block';
    } else {
        document.getElementById('nailServices').style.display = 'block';
    }
}

// Function to handle the form submission
function submitBooking() {
    // Get form data
    const serviceType = document.getElementById('hairServices').style.display === 'block' ? 'hair' : 'nail';
    const service = serviceType === 'hair' ? document.getElementById('hairService').value : document.getElementById('nailService').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Logging the booking details (for testing)
    console.log('Booking Details:', {
        serviceType,
        service,
        appointmentDate,
        appointmentTime,
        fullName,
        email
    });

    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Hide the booking form
    document.querySelector('.container').style.display = 'none';
}
