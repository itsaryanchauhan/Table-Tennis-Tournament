document.addEventListener('DOMContentLoaded', () => {
    const tournamentTypeSelect = document.getElementById('tournament-type');
    const playerRegistration = document.getElementById('player-registration');
    const doublesRegistration = document.getElementById('doubles-registration');
    const startTournamentButton = document.getElementById('start-tournament');

    tournamentTypeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;

        if (selectedValue === 'singles') {
            // Show input for single player registration
            playerRegistration.style.display = 'block';
            doublesRegistration.style.display = 'none';
            startTournamentButton.style.display = 'block';
        } else if (selectedValue === 'doubles') {
            // Show input for partner registration
            playerRegistration.style.display = 'block';
            doublesRegistration.style.display = 'block';
            startTournamentButton.style.display = 'block';
        }
    });
});
