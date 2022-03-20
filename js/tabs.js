const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabLeftImages = document.querySelectorAll('.design-block__img');
const tabsTitle = document.querySelectorAll('.design__title');

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabDescriptions, dataValue);
        changeContent(tabImages, dataValue);
        changeContent(tabLeftImages, dataValue);
        changeContent(tabsTitle, dataValue);
        document.title = document.querySelector(' h2[data-tabs-field="' + dataValue + '"]').textContent;

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        })
    })
})