document.getElementById('tiffinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var data = Object.fromEntries(formData);
    
    fetch('https://script.google.com/macros/s/AKfycbz9IFK6EWle1ipG6R9-7jSRRo7uVGZjan3UQ9viSAmP-LxUzTzJlXfiZGmXKSBeEW8UmA/exec', {
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
