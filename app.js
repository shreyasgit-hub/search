let numbers = JSON.parse(localStorage.getItem('numbers')) || [];

function saveNumbers() {
    localStorage.setItem('numbers', JSON.stringify(numbers));
}

function addNumber() {
    const input = document.getElementById('numberInput').value.trim();
    if (input === "") {
        document.getElementById('output').innerText = "Please enter a number.";
        return;
    }
    if (!numbers.includes(input)) {
        numbers.push(input);
        saveNumbers(); // Save updated array to localStorage
        document.getElementById('output').innerText = `Number ${input} added.`;
    } else {
        document.getElementById('output').innerText = `Number ${input} already exists.`;
    }
}

function searchNumber() {
    const input = document.getElementById('numberInput').value.trim();
    if (input === "") {
        document.getElementById('output').innerText = "Please enter a number.";
        return;
    }
    if (numbers.includes(input)) {
        document.getElementById('output').innerText = `Number ${input} found.`;
    } else {
        document.getElementById('output').innerText = `Number ${input} not found.`;
    }
}

function deleteNumber() {
    const input = document.getElementById('numberInput').value.trim();
    if (input === "") {
        document.getElementById('output').innerText = "Please enter a number.";
        return;
    }
    const index = numbers.indexOf(input);
    if (index !== -1) {
        numbers.splice(index, 1); // Remove the number from the array
        saveNumbers(); // Save updated array to localStorage
        document.getElementById('output').innerText = `Number ${input} deleted.`;
    } else {
        document.getElementById('output').innerText = `Number ${input} not found in the list.`;
    }
}
