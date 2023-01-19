document.addEventListener("DOMContentLoaded", () => {
    const productInfo = document.querySelector('.product-info');
    const productInfoModalClose = document.querySelector('.product-info__close-btn');
    productInfoModalClose.addEventListener('click', () => {
        productInfo.style.display = 'none';
    });
})
