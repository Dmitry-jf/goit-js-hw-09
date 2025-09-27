const form = document.querySelector(".feedback-form")
const STORAGE_KEY = "feedback-form-state"       // ключ где будет хранится значение

const formData = { email: "", message: "" }  // держит текущее значение  email, message



// Восстанавливаем данные из localStorage


const localValue = localStorage.getItem(STORAGE_KEY)

if (localValue) {
    const parsedData  = JSON.parse(localValue)
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;

}

// сохраняем данные при вводе
form.addEventListener("input", event => {
    const { name, value } = event.target;  //const name = event.target.name; || const value = event.target.value;

    formData[name] = value.trim(); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); // 15
})

// Обработка сабмита

form.addEventListener("submit", event => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields")

        return;
    }
    console.log(formData);

    // очистка
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
})
