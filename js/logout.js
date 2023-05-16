const logOut = document.querySelector("#log-out");

logOut.addEventListener("click", resetAll);

function resetAll() {
  localStorage.clear();
  location.reload();
}
