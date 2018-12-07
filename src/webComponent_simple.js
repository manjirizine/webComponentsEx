const template = document.createElement('template');
template.innerHTML = `<div id="textValue"></div>`;

export class SimpleWebComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['content'];
    }
    
    get content() {
      return this.getAttribute('content');
    }
    
    set content(val) {
      this.setAttribute('content', val);
    }

    connectedCallback() {
        //this.innerHTML= `<b></b>`;
    }

    disconnectedCallback() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("---attrName", attrName, oldVal, newVal);
        console.log("----", this.content)
        if(this.content) {
            const divEl = this.root.querySelector('div');
           // const divEl = this.root.getElementById("textValue");
            divEl.innerHTML = this.content;
        }

    }
}

// document.createElements.define('button-web-component', ButtonWebComponent);
customElements.define('simple-web-component', SimpleWebComponent);