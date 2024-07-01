import {DomElement, CompoundElement, DivElement, FormElement, InputElement, InlineElement, SelectElement, OptionElement, OnlyTagElement, ImgElement} from "./clases.js";

window.onload = function() {

    let body = document.getElementById("body");

    let br = new OnlyTagElement("br");
    br.createElement();

    let header = new DivElement(undefined,{id:"header",class:"header"});
    header.createElement();
    header.printElement({parentId:"body",position:"beforeend"});

    let charGall = new InlineElement("a",{href:"gallery.html",class:"charGall"},"CHARACTER GALLERY");
    charGall.createElement();
    charGall.printElement({parentId:"header",position:"beforeend"});

    let content = new DivElement(undefined,{id:"content",class:"content space-between"});
    content.createElement();
    content.printElement({parentId:"body",position:"beforeend"});

    let cont1 = new DivElement(undefined,{id:"cont1",class:"cont1"});
    cont1.createElement();
    cont1.printElement({parentId:"content",position:"beforeend"});

    let h1 = new InlineElement("h1",{class:"title"},"Create Character");
    h1.createElement();
    h1.printElement({parentId:"cont1",position:"beforeend"});

    let div = new DivElement(undefined,{id:"divCharacter",class:"blueDiv"});
    div.createElement();
    div.printElement({parentId:"cont1",position:"beforeend"});

    let form = new FormElement(undefined,{id:"formCharacter"});
    form.createElement();
    form.printElement({parentId:"divCharacter",position:"beforeend"});

    let label = new InlineElement("label",{class:"violetLabel",for:"image"},"Image:");
    label.createElement();
    label.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let input = new InputElement(undefined,{id:"image",class:"input",type:"file",name:"image"});
    input.createElement();
    input.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label2 = new InlineElement("label",{class:"violetLabel",for:"character"},"Character:");
    label2.createElement();
    label2.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let input2 = new InputElement(undefined,{id:"character",class:"input",type:"text",name:"character",placeholder:"Enter character name"});
    input2.createElement();
    input2.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label3 = new InlineElement("label",{class:"violetLabel",for:"description"},"Description:");
    label3.createElement();
    label3.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let textarea3 = new InlineElement("textarea",{id:"description",class:"textarea",name:"description",placeholder:"Enter character description"},"")
    textarea3.createElement();
    textarea3.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label4 = new InlineElement("label",{class:"violetLabel",for:"origin"},"Origin:");
    label4.createElement();
    label4.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let input4 = new InputElement(undefined,{id:"origin",class:"input",type:"text",name:"origin",placeholder:"Enter origin"});
    input4.createElement();
    input4.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label5 = new InlineElement("label",{class:"violetLabel",for:"kind"},"Kind:");
    label5.createElement();
    label5.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let select5 = new SelectElement(undefined,{id:"selectKind",class:"select",name:"kind"});
    select5.createElement();
    select5.printElement({parentId:"formCharacter",position:"beforeend"});

    let option50 = new OptionElement(undefined,{value:""},"-Select an option-");
    option50.createOptions();
    option50.printElement({parentId:"selectKind",position:"beforeend"});

    let option51 = new OptionElement(undefined,{value:"God"},"God");
    option51.createOptions();
    option51.printElement({parentId:"selectKind",position:"beforeend"});

    let option52 = new OptionElement(undefined,{value:"Demigod"},"Demigod");
    option52.createOptions();
    option52.printElement({parentId:"selectKind",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label6 = new InlineElement("label",{class:"violetLabel",for:"home"},"Home:");
    label6.createElement();
    label6.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let input6 = new InputElement(undefined,{id:"home",class:"input",type:"text",name:"home",placeholder:"Enter home"});
    input6.createElement();
    input6.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let label7 = new InlineElement("label",{class:"violetLabel",for:"state"},"State:");
    label7.createElement();
    label7.printElement({parentId:"formCharacter",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let select7 = new SelectElement(undefined,{id:"selectState",class:"select",name:"state"});
    select7.createElement();
    select7.printElement({parentId:"formCharacter",position:"beforeend"});

    let option70 = new OptionElement(undefined,{value:""},"-Select an option-");
    option70.createOptions();
    option70.printElement({parentId:"selectState",position:"beforeend"});

    let option71 = new OptionElement(undefined,{value:"Alive"},"Alive");
    option71.createOptions();
    option71.printElement({parentId:"selectState",position:"beforeend"});

    let option72 = new OptionElement(undefined,{value:"Dead"},"Dead");
    option72.createOptions();
    option72.printElement({parentId:"selectState",position:"beforeend"});

    br.printElement({parentId:"formCharacter",position:"beforeend"});

    let save = new InlineElement("button",{id:"saveBtn",class:"button mr-20",type:"button"},"Save");
    save.createElement();
    save.printElement({parentId:"formCharacter",position:"beforeend"});

    let reset = new InlineElement("button",{id:"resetBtn",class:"button",type:"reset"},"Reset");
    reset.createElement();
    reset.printElement({parentId:"formCharacter",position:"beforeend"});

    form.addListener({id:"formCharacter",actionFn:"change",function:updateCard()});
    save.addListener({id:"saveBtn",actionFn:"click",function:createLocalStorage()});
    reset.addListener({id:"resetBtn", actionFn:"click", function:resetDiv()});

}

let created = false;
function updateCard() {
    document.getElementById("formCharacter").addEventListener("change",function() {
        if (created == true) {
            created = false;
            document.getElementById("cont2").remove();
        }
        //GET VALUES
        let characterValue = document.getElementById("character").value;
        let descriptionValue = document.getElementById("description").value;
        let originValue = document.getElementById("origin").value;
        let kindValue = document.getElementById("selectKind").value;
        let homeValue = document.getElementById("home").value;
        let stateValue = document.getElementById("selectState").value;

        //CREATE CARD
        created = true;
        let cont2 = new DivElement(undefined,{id:"cont2",class:"cont2"});
        cont2.createElement();
        cont2.printElement({parentId:"content",position:"beforeend"});
        
        let h12 = new InlineElement("h1",{class:"title"},"Character Card");
        h12.createElement();
        h12.printElement({parentId:"cont2",position:"beforeend"});

        let div = new DivElement(undefined,{id:"divCharacter2",class:"redDiv"});
        div.createElement();
        div.printElement({parentId:"cont2",position:"beforeend"});

        let img = new ImgElement(undefined,{src:"",alt:"",title:"img title",class:"img",id:"imgCard"});
        img.createElement();
        img.printElement({parentId:"divCharacter2",position:"beforeend"});

        let divTitle = new DivElement(undefined,{id:"divTitle",class:"divTitle"});
        divTitle.createElement();
        divTitle.printElement({parentId:"divCharacter2",position:"beforeend"});

        let h2Title = new InlineElement("p",{class:"h2Title"},characterValue);
        h2Title.createElement();
        h2Title.printElement({parentId:"divTitle",position:"beforeend"});

        let divDescription = new DivElement(undefined,{id:"divDescription",class:"divDescription"});
        divDescription.createElement();
        divDescription.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pDescription = new InlineElement("p",{class:"pDescription"},descriptionValue);
        pDescription.createElement();
        pDescription.printElement({parentId:"divDescription",position:"beforeend"});

        let divRow1 = new DivElement(undefined,{id:"divRow1",class:"flex space-between divRow"});
        divRow1.createElement();
        divRow1.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pCharacter = new InlineElement("p",{class:"pRow1"},"Character");
        pCharacter.createElement();
        pCharacter.printElement({parentId:"divRow1",position:"beforeend"});

        let pCharacterText = new InlineElement("p",{class:"pRow2"},characterValue);
        pCharacterText.createElement();
        pCharacterText.printElement({parentId:"divRow1",position:"beforeend"});

        let divRow2 = new DivElement(undefined,{id:"divRow2",class:"flex space-between divRow"});
        divRow2.createElement();
        divRow2.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pOrigin = new InlineElement("p",{class:"pRow1"},"Origin");
        pOrigin.createElement();
        pOrigin.printElement({parentId:"divRow2",position:"beforeend"});

        let pOriginText = new InlineElement("p",{class:"pRow2"},originValue);
        pOriginText.createElement();
        pOriginText.printElement({parentId:"divRow2",position:"beforeend"});

        let divRow3 = new DivElement(undefined,{id:"divRow3",class:"flex space-between divRow"});
        divRow3.createElement();
        divRow3.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pKind = new InlineElement("p",{class:"pRow1"},"Kind");
        pKind.createElement();
        pKind.printElement({parentId:"divRow3",position:"beforeend"});

        let pKindText = new InlineElement("p",{class:"pRow2"},kindValue);
        pKindText.createElement();
        pKindText.printElement({parentId:"divRow3",position:"beforeend"});

        let divRow4 = new DivElement(undefined,{id:"divRow4",class:"flex space-between divRow"});
        divRow4.createElement();
        divRow4.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pHome = new InlineElement("p",{class:"pRow1"},"Home");
        pHome.createElement();
        pHome.printElement({parentId:"divRow4",position:"beforeend"});

        let pHomeText = new InlineElement("p",{class:"pRow2"},homeValue);
        pHomeText.createElement();
        pHomeText.printElement({parentId:"divRow4",position:"beforeend"});

        let divRow5 = new DivElement(undefined,{id:"divRow5",class:"flex space-between divRow"});
        divRow5.createElement();
        divRow5.printElement({parentId:"divCharacter2",position:"beforeend"});

        let pState = new InlineElement("p",{class:"pRow1"},"State");
        pState.createElement();
        pState.printElement({parentId:"divRow5",position:"beforeend"});

        let pStateText = new InlineElement("p",{class:"pRow2"},stateValue);
        pStateText.createElement();
        pStateText.printElement({parentId:"divRow5",position:"beforeend"});

        //VISUALIZAR IMAGEN
        let preview = document.getElementById("imgCard");
        let file = document.querySelector('input[type=file]').files[0];
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            // convierte la imagen a una cadena en base64
            preview.src = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
        
    });
}

function createLocalStorage() {
    document.getElementById("saveBtn").addEventListener("click",function() {
        if (document.getElementById("divCharacter2") == null) {
            alert("ERROR: First you have to create the Character Card.");
        }
        else {
            let characterValue = document.getElementById("character").value;
            let card = document.getElementById("divCharacter2");
            //console.log(card);
            let cardObj = {[characterValue]:card.outerHTML};
            let cardJson = JSON.stringify(cardObj);
            localStorage.setItem("God of War",cardJson);
            alert("Character Card saved succesfully!\nNow you can load the Card in Character Gallery.");
        }
    });
}

function resetDiv() {
    document.getElementById("resetBtn").addEventListener("click",function() {
        if (document.getElementById("cont2") == null) {
            alert("ERROR: First you have to create the Character Card.");
        }
        else {
            let cont2 = document.getElementById("cont2");
            cont2.remove();
            created = false;
        }
    });
}