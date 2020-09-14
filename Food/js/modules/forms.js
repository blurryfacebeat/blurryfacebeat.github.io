import { modal } from './modal';
import { postData } from '../services/services';

function forms() {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Успешно! Скоро с вами свяжется наш оператор.',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();

            // Вставляем спинер вместо загрузки
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            // Устаревший метод
            // const req = new XMLHttpRequest();
            // req.open('POST', 'server.php');

            // Формируем данные для отправки на сервер
            // req.setRequestHeader('Content-type', 'application/json');

            // req.send(json);

            // req.addEventListener('load', () => {
            //     if (req.status === 200) {
                    // showThanksModal(message.success);
                    // form.reset();
                    // statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });

            //Так просто formData перевести в JSON нельзя, поэтому перебираем ее в новый объект
            // Заменили новым методом перезаписи объекта
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });
            // Превращаем объект formData в матрицу, а зачем обратно в объект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // Оставил для старого метода
            // const json = JSON.stringify(object);

            // Новый метод, через fetch()
            // Заменили на функцию postData
            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
            });
        });
    }

    // Создаем новое диалогое окно, вместо старого с нужным сообщением
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.style.display = 'none';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        modal.append(thanksModal);

        // Возвращаем старое окно, чтобы пользователь мог снова отправить данные
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.style.display = 'block';
            modal.style.display = 'none';
        document.body.style.overflow = '';
        }, 5000);
    }

    // Работаем с json-server, он нам нужен для того, чтобы использовать POST запросы
    fetch('http://localhost:3000/menu')
        .then(data => data.json());
}

export default forms;
