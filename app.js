document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function displayData(data) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}
