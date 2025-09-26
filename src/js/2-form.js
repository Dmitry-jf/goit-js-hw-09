const STORAGE_KEY = "feedback-msg"; // будещее название ключа для localStorage

const form = document.querySelector(".feedback-form")

const textarea = form.querySelector("textarea") // находим textarea

textarea.addEventListener("input", hendlerInput);


function hendlerInput(event) {
    const message = event.target.value; // получаем данние что ввел пользователь в инпут

    localStorage.setItem(STORAGE_KEY, message) // добавляем в localStorage ключ(STORAGE_KEY) и значение(message)

}
 

function populateTextArea() {
    const message = localStorage.getItem(STORAGE_KEY)  // получаем значение из localStorge по ключу  STORAGE_KEY

    if (message) {
        textarea.value = message;    // окно ввода (textarea.value) принимает значение STORAGE_KEY
    }
}

populateTextArea() // вызываем функцию что бы отобразить инпут



// делаем так что после нажатия Submit окно очищалось


form.addEventListener("submit", handleSubmit) // создаем действие на submit:

function handleSubmit(event) {
    event.preventDefault();  //  1. Сбрасіваем к дефолту чтоби страница не перезагружалась
    
    if (textarea.value.trim() === "" || form.email.value.trim() === "") {
        alert("Fill please all fields")
    }
    console.log("Відправлення форми");
    event.target.reset();    // убираем все данние введенніе пользователем

    localStorage.removeItem(STORAGE_KEY); // ощищаем localStorage;

}