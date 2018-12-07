const template = document.createElement('template');
template.innerHTML = `
<style>
div,button {
    text-align: center;
    background-color: pink;
}

</style>
<button aria-label="decrement" id="textButton">Click Me</button>
<br></br>
<div id="divdata"></div>
`;

export class SimpleButton extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));

        this.textButton = this.root.getElementById('textButton');
        this.textDiv = this.root.getElementById('divdata');

        this.textButton.addEventListener('click', (e) => this.handleClick(e))
    }

    handleClick(eve) {
        console.log("-------handle click", this.textDiv)
        this.textDiv.innerHTML = this.textToDisplay;
    }

    static get observedAttributes() {
        return ['textToDisplay'];
    }


    get textToDisplay() {
        return this.getAttribute('textToDisplay')
    }

    set textToDisplay(val) {
        this.setAttribute('textToDisplay', val);

        // this.textDiv.innerHTML = val;
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("--------", attrName, oldVal, newVal)
        if(this.textToDisplay){
            // const ele = this.root.getElementById('divdata');
            // ele.innerHTML = this.textToDisplay;
            this.textToDisplay = newVal;
        }
    }
}

customElements.define('simple-button', SimpleButton);