var lang = window.navigator.language;
var siteContent;
lang = lang.substring(0,2)
console.log(lang);


var sections = document.querySelectorAll('section');
sections = [...sections];
console.log(sections)

function createNode(el){
    return document.createElement(el);
}

async function fetchTranslation(lang){
let dir = '';
if(window.location.hostname == "kajetannow.github.io")
    dir = "msk-sprawiedliwy-2040/";
    
fetch(`${dir}data/${lang}.json`, {mode: 'no-cors'})
    .then(response=>response.json())
    .then(res=>data=setTranslation(res))
    .catch(err=>console.error(err))
}



function setTranslation(data){
    siteContent = data;
    var tElements = document.querySelectorAll('*[data-t-name]');
    tElements = [...tElements];

    tElements.map((item)=>{
    let elContent
    let key = item.dataset.tName;
    let keyComp = key.split(".");
    if(keyComp.length == 1)
        elContent = siteContent[key];
    else(
        elContent = siteContent[keyComp[0]][keyComp[1]]
    )
    item.innerText = elContent;
    console.log(elContent)
})
}

fetchTranslation(lang);


