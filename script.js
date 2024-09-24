//your JS code here. If required.
// Select the container
const container = document.querySelector('.container');

// Define an array of colors to choose from on hover
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33F6', '#33FFF6', '#FF7733', '#7733FF'];

// Create 800 square divs and append them to the container
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Add hover effect
    square.addEventListener('mouseenter', () => changeColor(square));
    square.addEventListener('mouseleave', () => resetColor(square));

    // Append the square to the container
    container.appendChild(square);
}

// Function to change the color on hover
function changeColor(square) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.setProperty('--hover-color', randomColor);
}

// Function to reset the color after 1 second
function resetColor(square) {
    setTimeout(() => {
        square.style.backgroundColor = '#111'; // Reset to initial dark color
    }, 1000); // Delay of 1 second
}
