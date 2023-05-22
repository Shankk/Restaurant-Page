function createCard(imgsrc,headerTxt,paraTxt) {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.classList.add('menu-img')
    img.src = imgsrc
    const header = document.createElement('h3')
    header.textContent = headerTxt
    const para = document.createElement('p')
    para.textContent = paraTxt
    
    card.appendChild(img)
    card.appendChild(header)
    card.appendChild(para)

    return card
}

function createMenu() {
    const main = document.querySelector('.main')
    const menu = document.createElement('div')
    menu.classList.add('menu-container')
    
    const cardOneSrc = "/src/image/cheese.jpeg"
    const cardOneHeader = "Cheese Pizza"
    const cardOnePara = "Tomato Sauce, Cheese"
    menu.appendChild(createCard(cardOneSrc,cardOneHeader, cardOnePara));
    const cardTwoSrc = "/src/image/pep.jpeg"
    const cardTwoHeader = "Pepperoni Pizza"
    const cardTwoPara = "Tomato Sauce, Cheese, Pepperoni"
    menu.appendChild(createCard(cardTwoSrc,cardTwoHeader, cardTwoPara));
    const cardThreeSrc = "/src/image/pine.jpg"
    const cardThreeHeader = "Hawaiian Pizza"
    const cardThreePara = "Tomato Sauce, Cheese, Pepperoni, Pineapple slices, Ham"
    menu.appendChild(createCard(cardThreeSrc,cardThreeHeader, cardThreePara));
    const cardFourSrc = "/src/image/meat.jpeg"
    const cardFourHeader = "Meat Lover Pizza"
    const cardFourPara = "Tomato Sauce, Cheese, Pepperoni, Sausage, Beef"
    menu.appendChild(createCard(cardFourSrc,cardFourHeader, cardFourPara));
    const cardFiveSrc = "/src/image/deluxe.jpeg"
    const cardFiveHeader = "Deluxe Pizza"
    const cardFivePara = "Tomato Sauce, Cheese, Pepperoni, Green Peppers, Mushrooms"
    menu.appendChild(createCard(cardFiveSrc,cardFiveHeader, cardFivePara));
    const cardSixSrc = "/src/image/vegan.jpeg"
    const cardSixHeader = "Vegan Pizza"
    const cardSixPara = "Tomato Sauce, Broccoli, Mushrooms, Green Peppers, Garlic"
    menu.appendChild(createCard(cardSixSrc,cardSixHeader, cardSixPara));
    


    main.appendChild(menu);
}

export default createMenu;