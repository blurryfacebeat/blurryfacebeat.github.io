"use strict";

// Система рейтинга (некорректная работа)
var rating = document.querySelector('.rating__wrapper');
var ratingItems = document.querySelectorAll('.rating__item');
var resumeRating = document.querySelector('.rating__wrapper--resume');
var testRating = document.querySelector('.rating__wrapper--test');
var interviewRating = document.querySelector('.rating__wrapper--interview');
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
  el.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('rating__item')) {
      removeClass(ratingItems, 'rating__item-current--active');
      target.classList.add('rating__item--active', 'rating__item-current--active');
    }
  });
}

function addActive(el) {
  el.addEventListener('mouseover', function (event) {
    var target = event.target;

    if (target.classList.contains('rating__item')) {
      removeClass(ratingItems, 'rating__item--active');
      target.classList.add('rating__item--active');
      mouseOverActiveClass(ratingItems);
    }
  });
}

function removeActive(el) {
  el.addEventListener('mouseout', function () {
    addClass(ratingItems, 'rating__item--active');
    mouseOutActiveClass(ratingItems);
  });
} // Первым циклом проходим по всем звездам,
// Вторым по аргументам после arr.


function removeClass(arr) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
    for (var j = 1; j < arguments.length; j++) {
      ratingItems[i].classList.remove(arguments[j]);
    }
  }
} // Первым циклом проходим по всем звездам,
// Вторым по аргументам после arr.


function addClass(arr) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
    for (var j = 1; j < arguments.length; j++) {
      ratingItems[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
    if (arr[i].classList.contains('rating__item--active')) {
      break;
    } else {
      arr[i].classList.add('rating__item--active');
    }
  }
}

function mouseOutActiveClass(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].classList.contains('rating__item-current--active')) {
      break;
    } else {
      arr[i].classList.remove('rating__item--active');
    }
  }
} // Модальное окно с формой


var addApplicants = document.getElementById('addapplicants');
var modal = document.getElementById('modal');
var modal_overlay = document.getElementById('modal__overlay');
var modal_close = document.getElementById('modal__close--btn');
var page_header = document.getElementById('page-header');
var page_nav = document.getElementById('page-nav');
var modal_cancel = document.getElementById('modal__action__cancel'); // Открытие формы

addApplicants.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.remove('hide');
  modal_overlay.classList.remove('hide');
}); // Закрытие формы

modal_close.addEventListener('click', function () {
  modal.classList.add('hide');
  modal_overlay.classList.add('hide');
});
page_header.addEventListener('click', function () {
  modal.classList.add('hide');
  modal_overlay.classList.add('hide');
});
page_nav.addEventListener('click', function () {
  modal.classList.add('hide');
  modal_overlay.classList.add('hide');
});
modal_cancel.addEventListener('click', function () {
  modal.classList.add('hide');
  modal_overlay.classList.add('hide');
}); // Создание новой записи в таблице

var add_submit = document.getElementById('modal__action__submit');
var input_name = document.getElementById('name');
var select_vacancy = document.getElementById('vacancy');
var upload_photo = document.getElementById('upload__photo');
var phone_number = document.getElementById('tel');
var email = document.getElementById('email');
var upload_resume = document.getElementById('upload__resume');
var upload_title = document.getElementById('upload__test');
var table_header = document.getElementById('table__header');
add_submit.addEventListener('click', function (event) {
  event.preventDefault();
  var html = "\n        <tbody>\n        <tr>\n            <td class=\"table__info\">\n                <div class=\"table__wrapper\">\n                    <img class=\"applicants__photo\" src=\"img/Xa8jtAe097U.jpg\" alt=\"\u0424\u043E\u0442\u043E \u0421\u043E\u0438\u0441\u043A\u0430\u0442\u0435\u043B\u044F\">\n                    <div class=\"table__info__wrapper\">\n                        <p class=\"applicants__name\">".concat(input_name.value, "</p>\n                        <p class=\"applicants__vacancy\">\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044F: <span>").concat(select_vacancy.value, "</span></p>\n                    </div>\n                </div>\n            </td>\n            <td class=\"table__phone\">\n                <div class=\"table__wrapper\">\n                    <div class=\"table__icon--phone\"></div>\n                    <div class=\"table__phone__wrapper\">\n                        <p class=\"table__number--phone\">").concat(phone_number.value, "</p>\n                        <span class=\"table__more--phone\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 <span>1 \u043D\u043E\u043C\u0435\u0440</span></span>\n                    </div>\n                </div>\n            </td>\n            <td class=\"table__mail\">\n                <div class=\"table__wrapper\">\n                    <div class=\"table__icon--mail\"></div>\n                    <div class=\"table__mail__wrapper\">\n                        <p class=\"table__address--mail\">").concat(email.value, "</p>\n                        <span class=\"table__more--mail\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 <span>1 e-mail</span></span>\n                    </div>\n                </div>\n            </td>\n            <td class=\"rating\">\n                <div class=\"rating__wrapper\">\n                    <div class=\"rating__item\" data-rate=\"1\"></div>\n                    <div class=\"rating__item\" data-rate=\"2\"></div>\n                    <div class=\"rating__item\" data-rate=\"3\"></div>\n                    <div class=\"rating__item\" data-rate=\"4\"></div>\n                    <div class=\"rating__item\" data-rate=\"5\"></div>\n                </div>\n            </td>\n            <td class=\"table__actions\">\n                <div class=\"table__actions__wrapper\">\n                    <div class=\"table__actions__item table__actions__item--resume\"></div>\n                    <div class=\"table__actions__item table__actions__item--archive\"></div>\n                    <div class=\"table__actions__item table__actions__item--favorites\"></div>\n                </div>\n            </td>\n        </tr>\n        </tbody>\n        ");
  table_header.insertAdjacentHTML('afterend', html);
});