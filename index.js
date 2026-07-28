const storageKey = "userName";
const helloElement = document.getElementById("hello");
const submitButton = document.getElementById("sub");
const firstNameInput = document.getElementById("first");

function updateGreeting(name) {
    if (helloElement) {
        helloElement.textContent = name ? `Hello ${name}` : "Hello";
    }
}

function loadGreeting() {
    const savedName = localStorage.getItem(storageKey);
    if (savedName) {
        updateGreeting(savedName);
    }
}

if (submitButton && firstNameInput) {
    submitButton.addEventListener("click", function () {
        const firstName = firstNameInput.value.trim();

        if (firstName) {
            localStorage.setItem(storageKey, firstName);
            updateGreeting(firstName);
        } else {
            localStorage.removeItem(storageKey);
            updateGreeting("");
        }
    });
}

document.addEventListener("DOMContentLoaded", loadGreeting);