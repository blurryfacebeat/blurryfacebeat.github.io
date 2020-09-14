window.addEventListener('DOMContentLoaded', function() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer

    const deadline = '2020-08-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor(t / 1000 % 60);
        let minutes = Math.floor(t / 1000 / 60 % 60);
        let hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        const timer = document.getElementById(id);
        const hours = timer.querySelector('.hours');
        const minutes = timer.querySelector('.minutes');
        const seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline)

    // Modal
    const more = document.querySelector('.more');
    const overlay = document.querySelector('.overlay');
    const close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].addEventListener('click', function(event) {
            target = event.target;
            if (target && target.classList.contains('description-btn')) {
                overlay.style.display = 'block';
                more.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            }
        }); 
    }

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form
    const message = {
        loading: 'Отправка...',
        success: 'Номер успешно отправлен!',
        failure: 'Ошибка!'
    };

    const form = document.querySelector('.main-form');
    const input = form.querySelectorAll('input');
    const messageStatus = document.createElement('div');

    messageStatus.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(messageStatus);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        const formData = new FormData(form);

        const obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        const json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                messageStatus.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                messageStatus.innerHTML = message.success;
            } else {
                messageStatus.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    // Slider
    // Слайд, который показывается в текущий момент
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slider-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsWrap = document.querySelector('.slider-dots');
    const dots = document.querySelectorAll('.dot');
    
    showSlides(slideIndex);
    let autoSlide = setInterval(() => plusSlides(1), 3000);
    function showSlides(index) {
        if (index > slides.length) {
            slideIndex = 1;
        }
        if (index < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(index) {
        showSlides(slideIndex += index);
    }
    
    function currentSlide(index) {
        showSlides(slideIndex = index);
    }

    prev.addEventListener('click', function() {
        clearInterval(autoSlide);
        plusSlides(-1);
        autoSlide = setInterval(() => plusSlides(1), 3000);
    });

    next.addEventListener('click', function() {
        clearInterval(autoSlide);
        plusSlides(1);
        autoSlide = setInterval(() => plusSlides(1), 3000);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                clearInterval(autoSlide);
                currentSlide(i);
                autoSlide = setInterval(() => plusSlides(1), 3000);
            }
        }
    });

    // Calculator
    const persons = document.querySelectorAll('.counter-block-input')[0];
    const restDays = document.querySelectorAll('.counter-block-input')[1];
    const place = document.getElementById('select');
    const totalValue = document.getElementById('total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.textContent = total;

    persons.addEventListener('input', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function() {
        if (persons.value == '' || restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total * place.options[place.selectedIndex].value;
        }
    });
});