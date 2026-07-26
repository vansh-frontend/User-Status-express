const statusElement = document.getElementById("status");

function updateUserStatus() {
  if (navigator.onLine) {
    statusElement.textContent = "User Status: Online";
    statusElement.style.backgroundColor = "green";
  } else {
    statusElement.textContent = "User Status: Offline";
    statusElement.style.backgroundColor = "red";
  }
}

window.addEventListener("online", updateUserStatus);
window.addEventListener("offline", updateUserStatus);

updateUserStatus();