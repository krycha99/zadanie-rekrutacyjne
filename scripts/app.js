// Search bar
const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search-bar', 'search-btn')

 // Mobile menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})