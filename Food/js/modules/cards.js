import { getResources } from '../services/services';

function cards() {
    const menu = document.querySelector('.menu__field').querySelector('.container');
    class MenuCard {
        constructor(src, altimg, title, description, cost, parentSelector, ...classes) {
            this.src = src;
            this.altimg = altimg;
            this.title = title;
            this.description = description;
            this.cost = cost;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 70;
            this.changeToRUB();
        }

        changeToRUB() {
            this.cost = this.cost * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                // Добавляем каждый класс из rest-оператора
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cost}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // Карточки через Axios
    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

    // Отрисовываем карточки, получая данные из бд
    getResources('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    // Второй способ отрисовки карточек, не используя классы
    // getResources('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({img, altimg, title, descr, price}) => {
            const element = document.createElement('div');
            element.classList.add('menu__item');
            price *= 70;
            element.innerHTML = `
                <img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> руб/день</div>
                </div>
            `;

            document.querySelector('.menu .container').append(element);
        });
    }
}

export default cards;
