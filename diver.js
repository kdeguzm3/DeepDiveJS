//handler
let deepDiveStyleElem;

//lazy functions here

function pp(textString) {       //primitive print. For simple console logging only.  No other console log functions.
    console.log(textString);
}

//Min Max.  Returns a random number between the minimum and maximum integers
function mm(lowestInteger, highestInteger) {
    return Math.floor(Math.random() * (1 + (highestInteger - lowestInteger))) + lowestInteger;
}  

// Main library function: Deep Dive

function dd(selector) {

    //created object to be returned for cascading methods
    let self = {
        target: document.querySelector(selector),
        newElement: "body",
        lastID: "body",

        //Creates a new <div>, and immediately sets that new div as the target for dd()
        diver: (selectors) => {
            self.newElement = document.createElement("div");
            if (selectors !== undefined) {    
                self.assignSelectors(self.newElement, selectors);
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
            self.assignSelectors(self.newElement, selectors);
            }
            self.target.append(self.newElement);
            return self;
        },

        //method for adding an image to target
        imager: (src, selectors) => {
            self.newElement = document.createElement("img");
            self.newElement.setAttribute("src", src);
            if (selectors !== undefined) {    
                self.assignSelectors(self.newElement, selectors);
                }
                self.target.append(self.newElement);
                return self;            
        },

        //add css method for styling new elements
        css: (cssStyles, cssSelector) => {
            
            //check if a DeepDive style element exists, if not then make one.
            if (document.querySelector("style") == null){
                deepDiveStyleElem = document.createElement("style");
                deepDiveStyleElem.setAttribute("id", "deepDiveStyle");
                document.head.appendChild(deepDiveStyleElem);
            }

            if (cssSelector == undefined) {
                cssSelector = self.lastID;
            }
            let cssString = `${cssSelector} {
${cssStyles}
}

`;
            deepDiveStyleElem.innerHTML += cssString;
            return self;
        },

        // Function to read a string of multiple selector declarations, separated by whitespace,
        // to be assigned to 'target'
        assignSelectors: (target, selectorString) => {
        let selectorArray = selectorString.split(" ");
        selectorArray.forEach(element => {
        if (element[0] == "#") {
        target.setAttribute("id", element.substring(1));
        self.lastID = element;
        } else if (element[0] == ".") {
            target.classList.add(element.substring(1));
        }
        else {
            console.log(`${element} is not a valid selector assignment. This declaration was skipped`);
        }
        //New method starts here.
    });
}
    }
    if (selector == undefined) {self.target = document.querySelector("body");};
    return self;
}
