let modalContainer = document.querySelector('.modal-container');
let modalToggle = document.querySelector('.modal-toggle');
let pageBody = document.querySelector('.page-body');

modalContainer.classList.remove('modal-container--nojs');

const toggleModal = () => modalContainer.classList.toggle('modal-container--closed');

modalToggle.addEventListener('click', toggleModal);

document.addEventListener('click', function (e) {
  if (e.target === modalContainer) {
    toggleModal();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});
