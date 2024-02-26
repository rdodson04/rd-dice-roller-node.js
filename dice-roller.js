function rollDice() {
    fetch('/roll-dice')
        .then(response => response.text())
        .then(data => {
            document.getElementById('diceResult').value = data;
        })
        .catch(error => console.error('Error:', error));
}