## First Things First

Add this code at the end of the <body> section of your html file:
  
``` <script src = "https://kdeguzm3.github.io/DeepDiveJS/diver.js" />```

# DeepDiveJS
Personal library for multi line functions used for boot camp

## First Step: 

Every line of code using DeepDive, starts with:

```dd()```

it can be passed an HTML DOM selector as an argument, and targets the first occurence of that selector for the remainder of the command line.

        If there is no argument passed, the line will target the <body> of the HTML document.

## Builders:

DeepDive will feature methods for creating HTML elements and appending them to the target element.

### Method: writer()

        The writer method will add a new text element to the target.  It can take 3 arguments, only the first is required:

            *Text Content: The first argument passed into writer() will be the text content of the resuling new element

            *Element Type: The second argument dictates the type of text element to be created (h1 h2 h3 p etc). If no second argument is passed, a "p" element is created.

            *DOM selectors: The third argument will be a list of selectors to be assigned to the new element, separated by whitespace.

example:

```dd().writer("Text string goes here", "h1", "#id, .class1 .class2 .class3");```
