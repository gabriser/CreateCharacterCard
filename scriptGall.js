import {DomElement, CompoundElement, DivElement, FormElement, InputElement, InlineElement, SelectElement, OptionElement, OnlyTagElement, ImgElement} from "./clases.js";

window.onload = function() {

    let body = document.getElementById("body");

    let br = new OnlyTagElement("br");
    br.createElement();

    let header = new DivElement(undefined,{id:"header",class:"header"});
    header.createElement();
    header.printElement({parentId:"body",position:"beforeend"});

    let creaChar = new InlineElement("a",{href:"index.html",class:"creaChar"},"CREATE CHARACTER");
    creaChar.createElement();
    creaChar.printElement({parentId:"header",position:"beforeend"});

    let h1 = new InlineElement("h1",{class:"title"},"Character List");
    h1.createElement();
    h1.printElement({parentId:"body",position:"beforeend"});

    let btn1 = new InlineElement("button",{id:"load",class:"button mr-20"},"Load Cards");
    btn1.createElement();
    btn1.printElement({parentId:"body",position:"beforeend"});

    let btn2 = new InlineElement("button",{id:"delete",class:"button"},"Delete Cards");
    btn2.createElement();
    btn2.printElement({parentId:"body",position:"beforeend"});

    btn1.addListener({id:"load",actionFn:"click",function:loadCards()});
    btn2.addListener({id:"delete",actionFn:"click",function:deleteCards()});

}

function loadCards() {
    document.getElementById("load").addEventListener("click",function() {
        if (document.getElementById("content") == null) {
            if (localStorage.getItem("God of War") == null) {
                alert("ERROR: Character Card hasn't been created.");
            }
            else {
                let content = new DivElement(undefined,{id:"content",class:"contentCard flex mt-20"});
                content.createElement();
                content.printElement({parentId:"body",position:"beforeend"});

                let getCard = localStorage.getItem("God of War");
                getCard = JSON.parse(getCard);
                getCard = Object.values(getCard)[0];
                //console.log(getCard);

                let getContent = document.getElementById("content");
                getContent.insertAdjacentHTML("beforeend",getCard);
            }
        }
    });
}

function deleteCards() {
    document.getElementById("delete").addEventListener("click",function() {
        if (localStorage.getItem("God of War") == null) {
            alert("ERROR: Character Card hasn't been created.");
        }
        else {
            if (document.getElementById("content") != null) {
                let getContent = document.getElementById("content");
                getContent.remove();
                localStorage.removeItem("God of War");
                alert("Character Card deleted succesfully!\nNow you can create another in Create Character.");
            }
            else {
                localStorage.removeItem("God of War");
                alert("Character Card deleted succesfully!\nNow you can create another in Create Character.");
            }
        }
    });
}