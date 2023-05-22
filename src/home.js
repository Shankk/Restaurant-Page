import chef from './image/chef.jpg'

function createHome() {
    const main = document.querySelector('.main')
    const home = document.createElement('div')
    home.classList.add('home-container')

    const paraOne = document.createElement('p')
    const paraTwo = document.createElement('p')
    const icon = document.createElement('img')
    const paraThree = document.createElement('p')
    paraOne.textContent = "Best pizza in your town"
    paraTwo.textContent = "Made with love since 1937"
    icon.classList.add('home-img')
    icon.src = chef
    paraThree.textContent = "Order online or visit us!"

    home.appendChild(paraOne);
    home.appendChild(paraTwo);
    home.appendChild(icon);
    home.appendChild(paraThree);

    main.appendChild(home);
}

export default createHome;