document.getElementById('burger').addEventListener('click', function(){
    let navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
    navbar.style.width = '23%';
    let maindoc = document.getElementById('main-doc');
    maindoc.style.width = '60%';
    maindoc.style.marginLeft = '25%';

})