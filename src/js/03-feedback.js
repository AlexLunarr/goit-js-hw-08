import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// const input = form.querySelector('input');
// const textarea = form.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formState = {};

updateInput();

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
	
	updateInput();
	form.reset();
	localStorage.clear();
};

function updateInput() {
	const messageParse = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (messageParse !== null) {
	formState.email = messageParse.email;
	formState.message = messageParse.message;
		form.email.value = formState.email;
		form.message.value = formState.message;
}
}



