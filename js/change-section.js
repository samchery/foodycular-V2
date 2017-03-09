var tableau = document.querySelectorAll('nav ul li');
var section = document.querySelectorAll('section');


tableau[0].addEventListener('click', function () {
    for (var i = 0; i < tableau.length; i++) {
        tableau[i].className = '';
        section[i].style.display = 'none';
    }
    tableau[0].classList.add('highlight_a');
    section[0].style.display = 'block';

});

tableau[1].addEventListener('click', function () {
    for (var i = 0; i < tableau.length; i++) {
        tableau[i].className = '';
        section[i].style.display = 'none';
    }
    tableau[1].classList.add('highlight_a2');
    section[1].style.display = 'block';

});

tableau[2].addEventListener('click', function () {
    for (var i = 0; i < tableau.length; i++) {
        tableau[i].className = '';
        section[i].style.display = 'none';
    }
    tableau[2].classList.add('highlight_a3');
    section[2].style.display = 'block';
});