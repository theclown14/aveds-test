var title = document.querySelector('.main__title-append');
var login = document.querySelector('.login');
var password = document.querySelector('.password');
var data = localStorage.getItem('user')

function show() {
    var myH1 = document.createElement('h1');
    var myp = document.createElement('p');
    var myp1 = document.createElement('p');
    myH1.classList.add('main__title')
    myH1.textContent = 'Привет, ' + JSON.parse(data).name;
    myp.textContent = 'Ваш логин - ' + JSON.parse(data).login;
    myp1.textContent = 'Ваш пароль - ' + JSON.parse(data).password;
    title.appendChild(myH1);
    login.appendChild(myp);
    password.appendChild(myp1);
}
show();

//LogOut
var logOutButton = document.querySelectorAll('.button-logout');
for (let i = 0; i < logOutButton.length; i++) {
    logOutButton[i].addEventListener('click', () => {
        localStorage.clear()
        window.location.href = 'index.html'
    })
}
var headerLink = document.querySelector('.header__link');
headerLink.addEventListener('click', () => {
    localStorage.clear()
})
