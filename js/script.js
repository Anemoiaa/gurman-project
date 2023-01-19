document.addEventListener("DOMContentLoaded", () => {
    const productInfo = document.querySelector('.product-info');
    const productInfoModalClose = document.querySelector('.product-info__close-btn');
    productInfoModalClose.addEventListener('click', () => {
        productInfo.style.display = 'none';
    });

    const productInfoOpenBtns = document.querySelectorAll('.desc-btn__link');
    productInfoOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            productInfo.style.display = 'block';
        });
    });
});
