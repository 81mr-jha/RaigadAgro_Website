function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');
    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        // Disable vertical scrolling on body
        body.style.overflowY = 'hidden';
        // Prevent scrolling on iOS devices
        document.addEventListener('touchmove', preventDefault, { passive: false });
    } 
}


    function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const body = document.querySelector('body');
            sidebar.classList.remove('open');
    body.style.overflowY = 'auto';
        // Remove the event listener to enable scrolling on iOS devices
        document.removeEventListener('touchmove', preventDefault);
        }

// Function to prevent default touchmove event
function preventDefault(event) {
    event.preventDefault();
}