import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

const LOCALSTORAGE_KEY = "feedback-form-state";

const formState = {
	email: '',
	message: '',
};


input.addEventListener('input', throttle(inputListener, 500));
function inputListener(event) {

	formState.email = event.target.value;
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
};
textarea.addEventListener('input',throttle(textareaListener, 500));
function textareaListener(event) {
	formState.message = event.target.value;
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState))
};
console.log(JSON.parse (localStorage.getItem (LOCALSTORAGE_KEY)));


