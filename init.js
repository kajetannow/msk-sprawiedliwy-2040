import Translator from './Translator.js';

var translator = new Translator();
translator.load();

const langBtns = document.querySelectorAll("button.lang-btn");

langBtns.forEach((langBtn)=>{
    let newLang = langBtn.dataset.lang;
    langBtn.addEventListener("click",()=>{
        translator.load(newLang);
    })
})

