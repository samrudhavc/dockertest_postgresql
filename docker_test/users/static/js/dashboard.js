const apiUrl = `${window.location.origin}/api/fish/`;  // Use the current domain dynamically

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Add data to the DOM dynamically
    })
    .catch(error => console.error('Error fetching fish:', error));