const template = document.createElement('template');
template.innerHTML = `
<style>
    div{
        border: 2px solid;
        line-height: 200%;
        text-align: center;
       // padding-top: 20px;
    }

</style>
<div id="imgDiv">
    <img src="" id="imgtag"></img>
</div>
<br>
<br>
<div id="testAreaDiv"></div>`;

export class RouteComponent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.root.appendChild(template.content.cloneNode(true));

        this.textArea = this.root.getElementById('testAreaDiv');
        this.imageArea = this.root.getElementById('imgtag');

    }

    static get observedAttributes() {
        return ['displayText', 'pageImg'];
    }

    get displayText(){
        return this.getAttribute('displayText');
    }

    set displayText(val) {
       this.setAttribute('displayText', val);

    //    this.textArea.innerText = val;
    }

    get pageImg () {
        return this.getAttribute('pageImg');

    }

    set pageImg(img) {
        this.setAttribute('pageImg', img);
    }

    connectedCallback() {
        this.textArea.innerHTML = this.displayText;
        this.imageArea.src = this.pageImg;
    }

    // attributeChangedCallback(attrName, oldVal, newVal) {
    //     console.log("---attrName", attrName, oldVal, newVal);
    //     console.log("----", this.displayText);
    //     if(this.displayText) {
    //         const divEl = this.root.getElementById('testAreaDiv');
    //        // const divEl = this.root.getElementById("textValue");
    //         divEl.innerHTML = newVal;
    //         // this.displayText = newVal;
    //     }
    // }
}

customElements.define('route-component', RouteComponent);