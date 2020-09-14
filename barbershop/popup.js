//Кнопка для открытия окна авторизации и само окно
var login_link = document.querySelector(".login-link");
var login_popup = document.querySelector(".modal-login");
//Перекрытие всего интерфейса при открытии окна авторизации или Карты
var overlay = document.querySelector(".modal-overlay");
//Закрытие окна через крестик
var close = document.querySelector(".modal-close");
//Кнопка для открытия окна Карты и само окно
var map_link = document.querySelector(".find-us");
var map_popup = document.querySelector(".modal-map");
//Поле Логин в окне авторизации
var login_input = login_popup.querySelector("[name=login]");
//Полне пароль в окне авторизации
var pass_input = login_popup.querySelector("[name=password]");
//Форма отправки в окне авторизации
var login_form = login_popup.querySelector("form");
//Получение содержимого поля Логин в окне авторизации
var login_storage = localStorage.getItem("login_input");
//Открываем окно авторизации при нажатии на кнопку, перевод фокуса на логин, если поле
//пустое, иначе перевод на поле пароля, записывание данных в поле логин из хранилища
login_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    login_popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    if (login_storage)
        {
            login_input.value = login_storage;
            pass_input.focus();
        }
    else
        {
            login_input.focus();
        }
     
});
//Закрываем окна при нажатии на крестик
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    login_popup.classList.remove("modal-show");
    map_popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    login_popup.classList.remove("modal-error");
});
//Закрытие окна при нажатии вне него
overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    login_popup.classList.remove("modal-show");
    map_popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    login_popup.classList.remove("modal-error");
});
//Проверка на заполненность полей логина и пароля и запись в переменную значения логина
login_form.addEventListener("submit", function (evt) {
    if (!login_input.value || !pass_input.value)
        {
            evt.preventDefault();
            login_popup.classList.remove("modal-error");
            login_popup.offsetWidth = login_popup.offsetWidth;
            login_popup.classList.add("modal-error");
//            alert("Нужно ввести логин и пароль.");
        }
    else
        {
            if (login_storage)
                {
                    localStorage.setItem("login_input", login_input.value);
                }
        }
});
//Закрытие окон при нажатии на ESC
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27)
        {
            if (login_popup.classList.contains("modal-show") || map_popup.classList.contains("modal-show") || login_popup.classList.contains("modal-show"))
                {
                    evt.preventDefault();
                    login_popup.classList.remove("modal-show");
                    map_popup.classList.remove("modal-show");
                    overlay.classList.remove("modal-show");
                    login_popup.classList.remove("modal-error");
                }
        }
});
//Открытие окна карты
map_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map_popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});
