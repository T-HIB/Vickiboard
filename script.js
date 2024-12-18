// Variable to keep track of the currently playing audio
let currentAudio = null;

// Select all buttons with the class 'sound-button'
const buttons = document.querySelectorAll('.sound-button');

// Add an event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Debugging: Log the current audio state
        console.log("Stopping current audio if exists:", currentAudio);

        // Stop and reset the current audio if it exists
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get the sound file from the button's data attribute
        const soundFile = button.getAttribute('data-sound');

        // Debugging: Log the sound file being played
        console.log("Playing new sound file:", soundFile);

        // Create a new Audio object and play the sound
        currentAudio = new Audio(soundFile);
        currentAudio.volume = 0.5; // Set volume (0.0 to 1.0)
        currentAudio.play();
    });
});
