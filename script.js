document.addEventListener('DOMContentLoaded', function () {
    const firstButton = document.getElementById('first');
    const lastButton = document.getElementById('last');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const currentSpan = document.getElementById('current');
    const decrementOne = document.getElementById('decrementOne');
    const incrementOne = document.getElementById('incrementOne');
    const decrementTen = document.getElementById('decrementTen');
    const incrementTen = document.getElementById('incrementTen');

    let currentPage = 1;

    function updatePagination() {
        currentSpan.textContent = currentPage;
        prevButton.textContent = currentPage > 1 ? currentPage - 1 : 1;
        nextButton.textContent = currentPage < 100 ? currentPage + 1 : 100;
        firstButton.disabled = currentPage === 1;
        prevButton.disabled = currentPage === 1;
        lastButton.disabled = currentPage === 100;
        nextButton.disabled = currentPage === 100;
    }

    function changePage(amount) {
        currentPage = Math.min(100, Math.max(1, currentPage + amount));
        updatePagination();
    }

    firstButton.onclick = () => changePage(1 - currentPage);
    lastButton.onclick = () => changePage(100 - currentPage);
    prevButton.onclick = () => changePage(-1);
    nextButton.onclick = () => changePage(1);
    decrementOne.onclick = () => changePage(-1);
    incrementOne.onclick = () => changePage(1);
    decrementTen.onclick = () => changePage(-10);
    incrementTen.onclick = () => changePage(10);

    updatePagination(); 
});
