function assignSelectors(target, selectorString) {
    let selectorArray = selectorString.split(" ");
    selectorArray.forEach(element => {
        if (element[0] == "#") {
        target.setAttribute("id", element.substring(1));
        } else if (element[0] == ".") {
            target.classList.add(element.substring(1));
        }
    });
}

function dd(selector) {
    let self = {
        target: document.querySelector(selector),
        writer: (textContent, elementType, selectors) =>{
            if (elementType === undefined) {
                elementType = "p";
            }
            let newElement = document.createElement(elementType);
            newElement.textContent = textContent;
            if (selectors !== undefined) {    
            assignSelectors(newElement, selectors);
            }
            self.target.append(newElement);
        }
    }
    if (selector == undefined) {self.target = document.querySelector("body");};
    return self;
}