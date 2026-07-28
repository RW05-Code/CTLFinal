const userNameKey = "userName";
const userLastNameKey = "userLastName";
const covnameElement = document.getElementById("covname");

function displayUserName() {
    const firstName = localStorage.getItem(userNameKey);
    const lastName = localStorage.getItem(userLastNameKey);
    
    if (covnameElement) {
        if (firstName && lastName) {
            covnameElement.textContent = `${firstName} ${lastName}`;
        } else if (firstName) {
            covnameElement.textContent = firstName;
        } else {
            covnameElement.textContent = "";
        }
    }
}

document.addEventListener("DOMContentLoaded", displayUserName);
