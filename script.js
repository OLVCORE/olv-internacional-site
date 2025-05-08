
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
    body.classList.toggle('light');
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
