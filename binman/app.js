// Система рейтинга (некорректная работа)
const rating = document.querySelector('.rating__wrapper');
const ratingItems = document.querySelectorAll('.rating__item');
const resumeRating = document.querySelector('.rating__wrapper--resume');
const testRating = document.querySelector('.rating__wrapper--test');
const interviewRating = document.querySelector('.rating__wrapper--interview');

addCurrent(rating);
addActive(rating);
removeActive(rating);
addCurrent(resumeRating);
addActive(resumeRating);
removeActive(resumeRating);
addCurrent(testRating);
addActive(testRating);
removeActive(testRating);
addCurrent(interviewRating);
addActive(interviewRating);
removeActive(interviewRating);

function addCurrent(el) {
    el.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('rating__item')) {
            removeClass(ratingItems, 'rating__item-current--active');
            target.classList.add('rating__item--active', 'rating__item-current--active');
        }
    });
}

function addActive(el) {
    el.addEventListener('mouseover', function(event) {
        const target = event.target;
        if (target.classList.contains('rating__item')) {
            removeClass(ratingItems, 'rating__item--active');
            target.classList.add('rating__item--active');
            mouseOverActiveClass(ratingItems);
        }
    });
}

function removeActive(el) {
    el.addEventListener('mouseout', function() {
        addClass(ratingItems, 'rating__item--active');
        mouseOutActiveClass(ratingItems);
    });
}

// Первым циклом проходим по всем звездам,
// Вторым по аргументам после arr.
function removeClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItems[i].classList.remove(arguments[j]);
        }
    }
}

// Первым циклом проходим по всем звездам,
// Вторым по аргументам после arr.
function addClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItems[i].classList.add(arguments[j]);
        }
    }
}

function mouseOverActiveClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].classList.contains('rating__item--active')) {
            break;
        } else {
            arr[i].classList.add('rating__item--active');
        }
    }
}

function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].classList.contains('rating__item-current--active')) {
            break;
        } else {
            arr[i].classList.remove('rating__item--active');
        }
    }
}

// Модальное окно с формой
const addApplicants = document.getElementById('addapplicants');
const modal = document.getElementById('modal');
const modal_overlay = document.getElementById('modal__overlay');
const modal_close = document.getElementById('modal__close--btn');
const page_header = document.getElementById('page-header');
const page_nav = document.getElementById('page-nav');
const modal_cancel = document.getElementById('modal__action__cancel');

// Открытие формы
addApplicants.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('hide');
    modal_overlay.classList.remove('hide');
});

// Закрытие формы
modal_close.addEventListener('click', function() {
    modal.classList.add('hide');
    modal_overlay.classList.add('hide');
});

page_header.addEventListener('click', function() {
    modal.classList.add('hide');
    modal_overlay.classList.add('hide');
});

page_nav.addEventListener('click', function() {
    modal.classList.add('hide');
    modal_overlay.classList.add('hide');
});

modal_cancel.addEventListener('click', function() {
    modal.classList.add('hide');
    modal_overlay.classList.add('hide');
});

// Создание новой записи в таблице
const add_submit = document.getElementById('modal__action__submit');
const input_name = document.getElementById('name');
const select_vacancy = document.getElementById('vacancy');
const upload_photo = document.getElementById('upload__photo');
const phone_number = document.getElementById('tel');
const email = document.getElementById('email');
const upload_resume = document.getElementById('upload__resume');
const upload_title = document.getElementById('upload__test');
const table_header = document.getElementById('table__header');

add_submit.addEventListener('click', function(event) {
    event.preventDefault();
    const html = `
        <tbody>
        <tr>
            <td class="table__info">
                <div class="table__wrapper">
                    <img class="applicants__photo" src="img/Xa8jtAe097U.jpg" alt="Фото Соискателя">
                    <div class="table__info__wrapper">
                        <p class="applicants__name">${input_name.value}</p>
                        <p class="applicants__vacancy">Вакансия: <span>${select_vacancy.value}</span></p>
                    </div>
                </div>
            </td>
            <td class="table__phone">
                <div class="table__wrapper">
                    <div class="table__icon--phone"></div>
                    <div class="table__phone__wrapper">
                        <p class="table__number--phone">${phone_number.value}</p>
                        <span class="table__more--phone">Показать еще <span>1 номер</span></span>
                    </div>
                </div>
            </td>
            <td class="table__mail">
                <div class="table__wrapper">
                    <div class="table__icon--mail"></div>
                    <div class="table__mail__wrapper">
                        <p class="table__address--mail">${email.value}</p>
                        <span class="table__more--mail">Показать еще <span>1 e-mail</span></span>
                    </div>
                </div>
            </td>
            <td class="rating">
                <div class="rating__wrapper">
                    <div class="rating__item" data-rate="1"></div>
                    <div class="rating__item" data-rate="2"></div>
                    <div class="rating__item" data-rate="3"></div>
                    <div class="rating__item" data-rate="4"></div>
                    <div class="rating__item" data-rate="5"></div>
                </div>
            </td>
            <td class="table__actions">
                <div class="table__actions__wrapper">
                    <div class="table__actions__item table__actions__item--resume"></div>
                    <div class="table__actions__item table__actions__item--archive"></div>
                    <div class="table__actions__item table__actions__item--favorites"></div>
                </div>
            </td>
        </tr>
        </tbody>
        `
    table_header.insertAdjacentHTML('afterend', html);
});