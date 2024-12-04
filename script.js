// Select all buttons with the class 'sound-button'
const buttons = document.querySelectorAll('.sound-button');

// Add an event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the sound file from the button's data attribute
        const soundFile = button.getAttribute('data-sound');

        // Create a new Audio object and play the sound
        const audio = new Audio(soundFile);
        audio.play();
    });
});
