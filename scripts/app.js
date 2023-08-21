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

//masonry
const elem = document.querySelector('.grid');
        const msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        gutter: 30,
        fitWidth: true,
        columnWidth: 460
        });

//gallery button
const gbtn = document.querySelector('.more__button');
const gdisplay = document.querySelectorAll('.grid-item');
let current = 9
gbtn.addEventListener('click', function() {
    for(let i = current; i<current+3; i++){
        if(gdisplay[i])
        {gdisplay[i].style.display = 'block';
    }
    }
    current+= 3;

    if(current>=gdisplay.length)
    {
        event.target.style.display='none';
    }

    const msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        gutter: 30,
        fitWidth: true,
        columnWidth: 460
        });

})

//gallery popup
document.querySelectorAll('.grid-item img').forEach(image => {
    image.onclick = () =>{
        document.querySelector('.gallery__container .popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

document.querySelector('.gallery__container .popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}

//scroll animations
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        }
        else {
            sec.classList.remove("show-animate");
        }
    })
}