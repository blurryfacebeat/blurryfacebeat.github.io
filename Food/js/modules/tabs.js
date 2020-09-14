function tabs() {
    const content = document.querySelectorAll('.tabcontent');
    const tabsWrapper = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');

    hideContent();
    showContent();

    tabsWrapper.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });

    function hideContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showContent(index = 0) {
        content[index].style.display = 'block';
        tabs[index].classList.add('tabheader__item_active');
    }
}

export default tabs;
