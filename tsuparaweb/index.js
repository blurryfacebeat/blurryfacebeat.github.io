function takeElement(el) {
    const element = document.querySelector(el);
    return element;
}

$('.media-resources__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    appendDots: takeElement('.slick-dots__wrapper_media-resources'),
    prevArrow: takeElement('.slick-prev_media-resources'),
    nextArrow: takeElement('.slick-next_media-resources'),
    dots: true,
    responsive: [
        {
            breakpoint: 1241,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1021,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.tsu-resources__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: false,
    appendDots: takeElement('.slick-dots__wrapper_tsu-resources'),
    prevArrow: takeElement('.slick-prev_tsu-resources'),
    nextArrow: takeElement('.slick-next_tsu-resources'),
    dots: true,
    responsive: [
        {
            breakpoint: 1241,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1021,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.architecture__slider').slick({
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 2,
    centerMode: true,
    appendDots: takeElement('.slick-dots__wrapper_architecture'),
    prevArrow: takeElement('.slick-prev_architecture'),
    nextArrow: takeElement('.slick-next_architecture'),
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

// $('.news__slider__items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     variableWidth: false,
//     vertical: true,
//     verticalSwiping: true,
//     appendDots: takeElement('.slick-dots__wrapper_news'),
//     prevArrow: takeElement('.slick-prev_news'),
//     nextArrow: takeElement('.slick-next_news'),
//     dots: true
// });

$('.news__banner__items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    appendDots: takeElement('.slick-dots__wrapper_banner'),
    prevArrow: takeElement('.slick-prev_banner'),
    nextArrow: takeElement('.slick-next_banner'),
    dots: true
});

// $('.news__items__wrapper').slick({
//     infinite: true,
//     slidesToScroll: 1,
//     variableWidth: false,
//     dots: false,
//     arrows: false,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {

//             }
//         }
//     ]
// });