const toggleDetails = () => {
    const details = document.getElementById('description');
    const button = document.getElementById('toggle-btn');

    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show More'
    }
}