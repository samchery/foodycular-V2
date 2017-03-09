 var onglet_titre = document.querySelectorAll('.navigation_intern ul li');

 var onglet_element = document.querySelectorAll('.tech');
 var active = 0;

 for (let i = 0; i < onglet_titre.length; i++) {

     onglet_titre[i].addEventListener('click', function () {
         onglet_titre[active].classList.remove('active');
         onglet_element[active].classList.remove('active');

         active = i;

         onglet_element[active].classList.add('active');
         onglet_titre[active].classList.add('active');

     });
 }