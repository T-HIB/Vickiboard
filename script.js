// Variable to keep track of the currently playing audio
let currentAudio = null;

// Preload all audio files
const preloadedAudio = {};

// Select all buttons with the class 'sound-button'
const buttons = document.querySelectorAll('.sound-button');

// Preload the audio files based on button data attributes
buttons.forEach(button => {
    const soundFile = button.getAttribute('data-sound');
    const audio = new Audio(soundFile);
    preloadedAudio[soundFile] = audio; // Store the preloaded audio in an object
});

// Add an event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Stop and reset the current audio if it exists
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Get the sound file from the button's data attribute
        const soundFile = button.getAttribute('data-sound');

        // Play the preloaded audio
        currentAudio = preloadedAudio[soundFile];
        currentAudio.currentTime = 0; // Reset to the start of the audio
        currentAudio.volume = 0.5;   // Set volume (0.0 to 1.0)
        currentAudio.play();
    });
});
