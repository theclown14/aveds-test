var form = document.querySelector('.modal__form')
let login = document.querySelector('.modal__form__input-login')
let password = document.querySelector('.modal__form__input-password')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var user = {
        login: login.value,
        password: password.value
    }
    var requestURL = '/src/assets/data.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        const {
            users
        } = request.response
        const findedUser = users.find(v => v.login === user.login)
        if (findedUser && findedUser.password === user.password) {
            localStorage.setItem('user', JSON.stringify({
                name: findedUser.name,
                login: findedUser.login,
                password: findedUser.password
            }));
            setTimeout(function () {
                window.location.href = 'account.html'
            }, 500);
        } else {
            window.alert('Пользователь не найден')
        }
    }
})
