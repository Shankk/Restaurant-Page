import _ from 'lodash';
import './styles.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const hometab = document.getElementById("home-tab");
const menutab = document.getElementById("menu-tab");
const contacttab = document.getElementById("contact-tab");

function starterContent() {
  createHome();
}

function clearContent() {
  const element = document.querySelector('.main');
  element.textContent = "";
}

hometab.addEventListener("click", () => {
  clearContent();
  createHome();
});

menutab.addEventListener("click", () => {
  clearContent();
  createMenu();
});

contacttab.addEventListener("click", () => {
  clearContent();
  createContact();
});

starterContent();
 