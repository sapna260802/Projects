

function increaseScore(team) {
    let scoreElement = document.getElementById(`${team}-score`);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = score + 1;
}

function decreaseScore(team) {
    let scoreElement = document.getElementById(`${team}-score`);
    let score = parseInt(scoreElement.textContent);
    if (score > 0) {
        scoreElement.textContent = score - 1;
    }
}

function submitScores() {
    let team1Score = parseInt(document.getElementById('team1-score').textContent);
    let team2Score = parseInt(document.getElementById('team2-score').textContent);

    document.getElementById('final-team1-score').textContent = team1Score;
    document.getElementById('final-team2-score').textContent = team2Score;

    let winnerText = '';
    if (team1Score > team2Score) {
        winnerText = 'Team 1 Wins!';
    } else if (team1Score < team2Score) {
        winnerText = 'Team 2 Wins!';
    } else {
        winnerText = 'It\'s a Tie!';
    }

    document.getElementById('winner').textContent = winnerText;
    document.getElementById('final-scores').classList.remove('hidden');
}