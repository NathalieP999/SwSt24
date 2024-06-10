const modalFeedback = document.querySelector('.modal-feedback');
const btnFeedback = document.querySelector('.feedback-btn');
const btnFeedbackClose = document.querySelector('.feedback-form_close');
const messageFeedback = document.querySelector('.message-feedback');
const feedbackForm = document.querySelector('.feedback-form');
console.log(modalFeedback, btnFeedback);
const closemessageFeedback = function () {
  messageFeedback.classList.remove('message-feedback__active');
};

btnFeedback.addEventListener('click', () => {
  modalFeedback.classList.add('modal-feedback__active');
  modalFeedback.scrollIntoView({ block: 'start', behavior: 'smooth' });
  bodyScrollLock.disableBodyScroll(modalFeedback);
});
btnFeedbackClose.addEventListener('click', () => {
  modalFeedback.classList.remove('modal-feedback__active');
  bodyScrollLock.enableBodyScroll(modalFeedback);
});

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modalFeedback.classList.remove('modal-feedback__active');
  messageFeedback.classList.add('message-feedback__active');
  messageFeedback.scrollIntoView({ block: 'start', behavior: 'smooth' });
  bodyScrollLock.enableBodyScroll(modalFeedback);
  setTimeout(closemessageFeedback, 3000);
});
