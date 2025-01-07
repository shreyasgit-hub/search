let numbers = [];

function addNumber() {
    const input = document.getElementById('numberInput').value;
    if (!numbers.includes(input)) {
        numbers.push(input);
        document.getElementById('output').innerText = `Number ${input} added.`;
    } else {
        document.getElementById('output').innerText = `Number ${input} already exists.`;
    }
}

function searchNumber() {
    const input = document.getElementById('numberInput').value;
    if (numbers.includes(input)) {
        document.getElementById('output').innerText = `Number ${input} found.`;
    } else {
        document.getElementById('output').innerText = `Number ${input} not found.`;
    }
}
