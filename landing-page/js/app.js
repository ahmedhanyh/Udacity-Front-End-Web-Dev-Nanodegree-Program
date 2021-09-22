/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const allSections = document.querySelectorAll('section');
const allSectionsHeaders = document.querySelectorAll('h2');
const uList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavBar = () => {

    const fragment = document.createDocumentFragment();

    for (let section = 0; section < allSections.length; section++) {
        const listItem = document.createElement('a');
        listItem.innerHTML = `<li class="menu__link">${allSectionsHeaders[section].textContent}</li>`;
        listItem.setAttribute('href', `#${allSections[section].getAttribute('id')}`);
        fragment.appendChild(listItem);
    }

    uList.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID
const scrollToSection = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('menu__link') === true) {
        const eScroll = document.querySelector(event.target.parentElement.getAttribute('href'));
        eScroll.scrollIntoView({behavior: 'smooth'});
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();
// Scroll to section on link click
uList.addEventListener('click',  scrollToSection);
// Set sections as active



