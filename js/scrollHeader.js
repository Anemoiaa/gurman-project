document.addEventListener('DOMContentLoaded', () => {

    const headerDecor = document.querySelector('.decor__container');
    window.onscroll = function() {
        decorHide()
    };
    decorHide()

    function decorHide() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            headerDecor.style.zIndex = '1';
        } else {
            headerDecor.style.zIndex = '99999';
        }
    }
});
