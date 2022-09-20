import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// const input = form.querySelector('input');
// const textarea = form.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formState = {};

updateInput();
// updateInput();
// updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//   evt.preventDefault();
//   localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(form.elements.message.value) );
//   updateOutput();
//   form.reset();
// }

// function updateOutput() {
// 	form.elements.message.value = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// 	  form.elements.email.value = localStorage.getItem(LOCALSTORAGE_KEY) || "";
// }
// _____________________
form.addEventListener('input', throttle(inputListener, 500));
form.addEventListener('submit', submitListener);

function inputListener(event) {
	console.log(event.target.name);
	console.log(event.target.value)
	formState[event.target.name] = event.target.value;
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
};

// console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

function submitListener(event) {
event.preventDefault();
	const messageParse = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
	console.log(messageParse);
	
	// updateInput();
	form.reset();
	localStorage.removeItem(LOCALSTORAGE_KEY);
};

function updateInput() {
	// let messageParse = 
		formState = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
		form.email.value = formState.email || '';
		form.message.value = formState.message || '';
}
// _________________________

// input.addEventListener('input', throttle(inputListener, 500));
// function inputListener(event) {

// 	formState.email = event.target.value;
// 	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState));
// };
// textarea.addEventListener('input',throttle(textareaListener, 500));
// function textareaListener(event) {
// 	formState.message = event.target.value;
// 	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formState))
// };
// console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

// function updateOutput() {
// 	input.value = (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))).email || "";
// 	textarea.value = (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))).message || "";
// }


