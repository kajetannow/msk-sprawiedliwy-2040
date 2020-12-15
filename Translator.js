class Translator {
    constructor() {
        this._lang = this.getLanguage();
        this._elements = document.querySelectorAll("[data-i18n]");
    }

    getLanguage() {
        var lang = navigator.languages ? navigator.languages[0] : navigator.language;
        lang = lang.substr(0, 2);
        return this.config.availableLangs.includes(lang) ? lang : this.config.defaultLang
    }

    load(lang = null) {
        if (lang) {
          this._lang = lang;
        }
          fetch(`./data/${this._lang}.json`)
                .then((res) => res.json())
                .then((translation) => {
                    this.translate(translation);
                })
                .catch((err) => {
            console.error(err);
            });
        
      }

    translate(translation) {
        this._elements.forEach((element) => {
            var keys = element.dataset.i18n.split(".");
            var text = keys.reduce((obj, i) => obj[i], translation);

            if(Array.isArray(text)){
            //let tag = element.dataset.i18nForTag ? element.dataset.i18nForTag : 'div'
            element.innerHTML = ""
                text.map((el)=>{
                  /*
                    let div = document.createElement(tag);
                    div.innerHTML = el;
                    element.appendChild(div);
                    */
                   element.innerHTML+=el;
                })
                
            }else if (text) {
            element.innerHTML = text;
            }
          });
          this.toggleLangTag();
      }

    toggleLangTag() {
        if (document.documentElement.lang !== this._lang) {
          document.documentElement.lang = this._lang;
        }
      }

    config = {
        availableLangs: ['pl', 'en'],
        defaultLang: 'pl'
    }

  }

  export default Translator;