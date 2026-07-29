const storageKey = "userName";
const lastStorageKey = "userLastName";
const helloElement = document.getElementById("hello");
const submitButton = document.getElementById("sub");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");

function updateGreeting(name) {
    if (helloElement) {
        helloElement.textContent = name ? `Welcome ${name}` : "Welcome";
    }
}

function saveName() {
    const firstName = firstNameInput ? firstNameInput.value.trim() : "";
    const lastName = lastNameInput ? lastNameInput.value.trim() : "";

    if (firstName) {
        localStorage.setItem(storageKey, firstName);
        localStorage.setItem(lastStorageKey, lastName);
        updateGreeting(firstName);
    } else {
        localStorage.removeItem(storageKey);
        localStorage.removeItem(lastStorageKey);
        updateGreeting("");
    }
}

if (submitButton) {
    submitButton.addEventListener("click", saveName);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem(storageKey);
    if (savedName) {
        updateGreeting(savedName);
    }
});
