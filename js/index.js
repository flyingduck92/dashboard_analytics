const get = id => document.getElementById(id);

let user = get('user');
let userBlock = get('user__block');

user.addEventListener('click', function () {
    userBlock.classList.toggle('user__block--open');
});

