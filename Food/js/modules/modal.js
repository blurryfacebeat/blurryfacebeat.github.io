const modal = document.querySelector('.modal');

function modalWindow() {
    const modalTrigger = document.querySelectorAll('[data-modal]');

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // Если пользователь сам открыл окно, то через время оно уже не появится
            clearInterval(modalInterval);
        });
    });

    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code == 'Escape' && modal.style.display == 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Модальное окно появляется через определенное время
    const modalInterval = setTimeout(() => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 5000);

    // Покажем модалку после скролла только 1 раз
    function showModalByScroll() {
        // Прокрученная часть + видимая часть сайта >= полному сайту
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    // Если пользователь долистал страницу до конца, то появляется модалка
    window.addEventListener('scroll', showModalByScroll);

    // Выполнить событие 1 раз, писать после функции в eventListener
    // {once: true}
}

export default modalWindow;
export { modal };
