const get = id => document.getElementById(id);

const user = get('user');
const userBlock = get('user__block');

const realTime = get('realtime-head');
const realTimeItem = get('realtime-item');

const nav = get('nav');
const openNav = get('open-nav');
const closeNav = get('close-nav');

// User Toggle
user.addEventListener('click', function () {
    userBlock.classList.toggle('user__block--open');
});

// Menu Item Toggle
realTime.addEventListener('click', function () {
    realTimeItem.classList.toggle('item--open');
});

// Navigation Toggle
openNav.addEventListener('click', function () {
    nav.classList.add('sidebar__nav--open');
});
closeNav.addEventListener('click', function () {
    nav.classList.remove('sidebar__nav--open');
});
