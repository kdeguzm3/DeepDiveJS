// Function to read a string of multiple selector declarations, separated by whitespace,
// to be assigned to 'target'

function assignSelectors(target, selectorString) {
    let selectorArray = selectorString.split(" ");
    selectorArray.forEach(element => {
        if (element[0] == "#") {
        target.setAttribute("id", element.substring(1));
        } else if (element[0] == ".") {
            target.classList.add(element.substring(1));
        }
        else {
            console.log(`${element} is not a valid selector assignment. This declaration was skipped`);
        }
    });
}

// Main library function

function dd(selector) {

    //created object to be returned for cascading methods
    let self = {
        target: document.querySelector(selector),
        newElement: "",

        //Creates a new <div>, and immediately sets that new div as the target for dd()
        diver: (selectors) => {
            self.newElement = document.createElement("div");
            if (selectors !== undefined) {    
                assignSelectors(self.newElement, selectors);
                }
                self.target.append(self.newElement);
                self.target = self.newElement;
                return self;          
        },

        //method for adding a text element to target
        writer: (textContent, elementType, selectors) =>{
            if (elementType === undefined) {
                elementType = "p";
            }
            self.newElement = document.createElement(elementType);
            self.newElement.textContent = textContent;
            if (selectors !== undefined) {    
            assignSelectors(self.newElement, selectors);
            }
            self.target.append(self.newElement);
            return self;
        },

        //method for adding an image to target
        imager: (src, selectors) => {
            self.newElement = document.createElement("img");
            self.newElement.setAttribute("src", src);
            if (selectors !== undefined) {    
                assignSelectors(self.newElement, selectors);
                }
                self.target.append(self.newElement);
                return self;            
        }
    }
    if (selector == undefined) {self.target = document.querySelector("body");};
    return self;
}

