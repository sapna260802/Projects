function rollDice() {
    // Roll for Player 1
    const dice1 = document.getElementById('dice1');
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    dice1.textContent = player1Roll;
    
    // Roll for Player 2
    const dice2 = document.getElementById('dice2');
    const player2Roll = Math.floor(Math.random() * 6) + 1;
    dice2.textContent = player2Roll;
    
    // Determine the winner
    const result = document.getElementById('result');
    if (player1Roll > player2Roll) {
        result.textContent = 'Player 1 Wins!';
        result.style.color = '#007bff';
    } else if (player2Roll > player1Roll) {
        result.textContent = 'Player 2 Wins!';
        result.style.color = '#28a745';
    } else {
        result.textContent = 'It\'s a Draw!';
        result.style.color = '#dc3545';
    }
}
    
    
