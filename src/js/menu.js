
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header-button--burger');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.page-main');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.menu-button--burger');

    function closeMenu() {
        sidebar.classList.remove('open');
        mainContent.classList.remove('open');
        overlay.classList.remove('open');
    }

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('open');
        overlay.classList.toggle('open');
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            closeMenu();
        }
    });

    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('open');
        mainContent.classList.remove('open');
        overlay.classList.remove('open');
    });
    
});