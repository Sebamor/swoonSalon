function burgerMenu() {
    let burger = document.getElementById('nav-links');
    if (burger.style.display === 'none') {
        burger.style.display = 'flex';
    }
    else {
        burger.style.display = 'none';
    }
}