import tabs from './modules/tabs';
import timer from './modules/timer';
import calculator from './modules/calculator';
import cards from './modules/cards';
import forms from './modules/forms';
import modalWindow from './modules/modal';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
    tabs();
    timer();
    calculator();
    cards();
    forms();
    modalWindow();
    slider();
});
