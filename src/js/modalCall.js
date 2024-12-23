document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.querySelector('.main-button--call');
  const headerBtn = document.querySelector('.header-button--phone');
  const feedBack = document.querySelector('.modalCall');
  const mainContent = document.querySelector('.page-main');
  const overlay = document.querySelector('.overlay');
  const closeButton = document.querySelector('.modalCall__button');
  const sidebar = document.querySelector('.sidebar');

  function closeMenu() {
    feedBack.classList.remove('open');
      mainContent.classList.remove('open');
      overlay.classList.remove('open');
  }
  
  openButton.addEventListener('click', function() {
    feedBack.classList.toggle('open');
    mainContent.classList.toggle('open');
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    overlay.classList.toggle('open');
  });

  headerBtn.addEventListener('click', function() {
    feedBack.classList.toggle('open');
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
      feedBack.classList.remove('open');
      mainContent.classList.remove('open');
      overlay.classList.remove('open');
  });
  
});

