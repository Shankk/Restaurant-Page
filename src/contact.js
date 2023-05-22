function createContact() {
    const main = document.querySelector('.main')
    const contact = document.createElement('div')
    contact.classList.add('contact-container')

    const address = document.createElement('div')
    const phone = document.createElement('div')
    const location = document.createElement('img')
    address.textContent = "1 Dundas St E, Toronto, ON M5B 2R8"
    phone.textContent = "(123) 456-7890"
    location.src = "/src/image/location.png"

    contact.appendChild(address);
    contact.appendChild(phone);
    contact.appendChild(location);

    main.appendChild(contact);
}

export default createContact;