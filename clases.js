class DomElement {
    constructor(tag="p", attributes) {
        this.tag = tag;
        this.attributes = attributes;
    }
    createElement() {
        this.element = document.createElement(this.tag);
        if (this.attributes != null) {
            for (let element in this.attributes) {
                this.element.setAttribute(element,this.attributes[element]);
            }
        }
        return this.element;
    }
    printElement(pos) {
        let a = document.getElementById(pos["parentId"]);
        a.insertAdjacentHTML(pos["position"], this.element.outerHTML);
    }
    deleteElement() {
        this.element.remove();
    }
    addListener(lis) {
        this.element.addEventListener(lis["actionFn"],lis["function"]);
    }
}

class CompoundElement extends DomElement {
    addChildren(children) {
        this.element.appendChild(this.children);
    }
}

class DivElement extends CompoundElement {
    constructor(tag="div", attributes) {
        super(tag, attributes);
    }
}

class FormElement extends CompoundElement {
    constructor(tag="form", attributes) {
        super(tag, attributes);
    }
}

class InputElement extends DomElement {
    constructor(tag="input", attributes) {
        super(tag, attributes);
    }
}

class InlineElement extends DomElement {
    constructor(tag, attributes, text) {
        super(tag, attributes);
        this.text = text;
    }
    createElement() {
        this.element = document.createElement(this.tag);
        if (this.attributes != null) {
            for (let element in this.attributes) {
                this.element.setAttribute(element,this.attributes[element]);
            }
        }
        this.element.innerText = this.text;
        return this.element;
    }
}

class SelectElement extends  DomElement {
    constructor(tag="select", attributes) {
        super(tag, attributes);
    }
}

class OptionElement extends DomElement {
    constructor(tag="option", attributes, text) {
        super(tag, attributes);
        this.text = text;
    }
    createElement() {
        console.error("CreateElement() not supported for OptionElement. Use createOptions() instead.");
    }
    createOptions() {
        this.element = document.createElement(this.tag);
        if (this.attributes != null) {
            for (let element in this.attributes) {
                this.element.setAttribute(element,this.attributes[element]);
            }
        }
        this.element.innerText = this.text;
        return this.element;
    }
}

class OnlyTagElement extends DomElement {
    constructor(tag, attributes) {
        super(tag, attributes);
    }
}

class ImgElement extends OnlyTagElement {
    constructor(tag="img", attributes) {
        super(tag, attributes);
    }
}

export{DomElement, CompoundElement, DivElement, FormElement, InputElement, InlineElement, SelectElement, OptionElement, OnlyTagElement, ImgElement};