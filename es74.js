function labelG(text) {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
};

function inputG(type, id, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

function divG(type, id, labelText) {
    const label = labelG(labelText);
    const input = inputG(type, id, labelText);
    const div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);
    return div;
}

function initForm() {
    const form = document.querySelector("form");
    const age = divG("number", "age", "Age");
    form.prepend(age);
    const lastName = divG("text", "lastName", "Last Name");
    form.prepend(lastName);
    const firstName = divG("text", "firstName", "First Name");
    form.prepend(firstName);
    form.addEventListener("submit", submitPersonForm)
}

function submitPersonForm(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("age");
    const person = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
    };
    console.log(person);
}

window.addEventListener("DOMContentLoaded", initForm)