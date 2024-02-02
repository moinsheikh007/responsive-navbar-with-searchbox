const searchBtn = document.getElementById('searchBtn');
const closeBtn = document.getElementById('closeBtn');
const searchBox = document.querySelector('.searchBox');

searchBtn.addEventListener('click', function() {
    searchBox.classList.add('active');
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', function() {
    searchBox.classList.remove('active')
    closeBtn.style.display = 'none'
})

const menuBar = document.getElementById('menuBar');
const navlink = document.querySelector('.navlink');

menuBar.addEventListener('click', function() {
    navlink.classList.toggle('open');
})