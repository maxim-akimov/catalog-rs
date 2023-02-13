const catalogContainer = document.querySelector('.catalog');

function getActiveElement() {
    return catalogContainer.querySelector('.catalog__category_active');
}

function getContainer(element) {
    return catalogContainer.querySelector(`.${element.id}-container`)
}

function openContainer(container) {
    container.classList.add('catalog__lists-container_opened');
}

function closeContainer() {
    const openedContainer = catalogContainer.querySelector('.catalog__lists-container_opened');
    if (openedContainer) {
        openedContainer.classList.remove('catalog__lists-container_opened');
    }
}

function addActiveClass(element) {
    element.classList.add('catalog__category_active');
}

function removeActiveClass() {
    const element = getActiveElement();
    if (element) {
        element.classList.remove('catalog__category_active');
    }
}

function setStartState(evt) {
    const element = getActiveElement();
    const container = getContainer(element);
    openContainer(container);
}

function scroll(container) {
    container.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

function showCategoryDetails(evt) {
    const element = evt.target.closest('.catalog__category');

    if (element) {
        const container = getContainer(element);

        closeContainer();
        removeActiveClass();
        addActiveClass(element)
        openContainer(container);
        scroll(container);
    }
}


catalogContainer.addEventListener('click', showCategoryDetails );
window.addEventListener('load', setStartState);