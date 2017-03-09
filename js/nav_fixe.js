var navigation = document.querySelector('nav');

document.addEventListener('scroll', function (event) {
    if (document.body.scrollTop > 600) {

        navigation.classList.add("fixe");
    } else {
        navigation.classList.remove("fixe");
    }
});