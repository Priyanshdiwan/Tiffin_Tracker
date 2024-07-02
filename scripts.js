document.getElementById('tiffinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var data = Object.fromEntries(formData);
    
    fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if(result.success) {
            alert('Data submitted successfully!');
            this.reset();
        } else {
            alert('Error submitting data. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});