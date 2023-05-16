const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  paintGreetings(typedUsername);
  toDoForm2.classList.remove(HIDDEN_CLASSNAME);
  toDoList2.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoForm2 = document.querySelector("#todo-form");
const toDoList2 = document.querySelector("#todo-list");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  toDoForm2.classList.remove(HIDDEN_CLASSNAME);
  toDoList2.classList.remove(HIDDEN_CLASSNAME);
}
