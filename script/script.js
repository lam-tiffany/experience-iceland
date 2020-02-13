//Nav Bar
// Show / Hide Menu
// Select the HTML elements that we need to interact with
const body = document.body;
const btn = document.getElementById('btn-menu');

// Create our event handlers

// Click Event
// - Toggle a "show" class on / off on the body
btn.addEventListener('click',_=> {
    body.classList.toggle('show')
});

// Mousedown Event
// - Remove the focus ring for mouse users, but keep it for keyboard users
btn.addEventListener('mousedown', (e) => {
    e.preventDefault();
});



