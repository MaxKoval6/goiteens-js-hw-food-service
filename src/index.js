const message = localStorage.setItem('message', 'hello!');
console.log(localStorage.getItem('message'));

const form = document.querySelector('js-feedback-form');

const textareaRef = document.querySelector('.js-feedback-form textare');

formRef.addEventListener('submit', handleFormsumbit);
textareaRef.addEventListener('input', handleTextareaInput);

function handleFormsumbit(event) {}
function handleTextareaInput(event) {
  const value = event.currentTarget.value;
}
function getValueFromLocalSrorage() {
  const value = lcalStorage.getItem('comment');
  if (value) {
    textareaRef.textContent = value;
  }
}

const galleryRef = document.querySelector('.js-gallery');
const markup = galleryItemTpl(countries);
galleryRef.inserAdjecentHTML('beforeend', markup);
