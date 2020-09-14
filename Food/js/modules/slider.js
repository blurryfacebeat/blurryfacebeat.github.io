function slider() {
    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const totalSlides = document.getElementById('total');
    const currentSlide = document.getElementById('current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const sliderField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;


    let slideIndex = 1;
    // Размер на который сдвигаем слайд
    let offset = 0;

    if (slides.length < 10) {
        totalSlides.textContent = '0' + slides.length;
        currentSlide.textContent = '0' + slideIndex;
    } else {
        totalSlides.textContent = slides.length;
        currentSlide.textContent = slideIndex;
    }

    // Вариант сложного слайдера
    // Помещаем все слайды, которые есть на страницу в поле слайдера так, чтобы они поместились
    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = 'all .2s linear';

    // Все слайды за контейнером слайдера скрыты
    slidesWrapper.style.overflow = 'hidden';

    // Делаем все слайды одинаковой ширины
    slides.forEach(slide => {
        slide.style.width = width;
    });

    // Добавляем индикаторы на слайдер
    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    prev.addEventListener('click', () => {
        // Если пролистали первый слайд назад, ставим последний
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            currentSlide.textContent = '0' + slideIndex;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => {
            dot.style.opacity = .5;
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    next.addEventListener('click', () => {
        // Если пролистали последний слайд, ставим первый
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            currentSlide.textContent = '0' + slideIndex;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => {
            dot.style.opacity = .5;
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', event => {
            const slideTo = event.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            sliderField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                currentSlide.textContent = '0' + slideIndex;
            } else {
                currentSlide.textContent = slideIndex;
            }

            dots.forEach(dot => {
                dot.style.opacity = .5;
            });
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

    // Вариант простого слайдера
    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     totalSlides.textContent = '0' + slides.length;
    // } else {
    //     totalSlides.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(slide => {
    //         slide.style.display = 'none';
    //     });
        
    //     if (slideIndex < 10) {
    //         currentSlide.textContent = '0' + slideIndex;
    //     } else {
    //         currentSlide.textContent = slideIndex;
    //     }

    //     slides[slideIndex - 1].style.display = 'block';
    // }

    // function changeSlide(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     changeSlide(-1);
    // });

    // next.addEventListener('click', () => {
    //     changeSlide(1);
    // });
}

export default slider;
