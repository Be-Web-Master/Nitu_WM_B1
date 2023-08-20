// que1 Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)
// const main_heading = document.getElementById("main-heading")
// console.log(main_heading)

// que2 Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)
// const elem = document.getElementById("name")
// console.log(elem.type)

// que3 Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)
// let elem = document.getElementById("name")
// console.log(elem.name)

// que4 Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)
// let target = document.getElementById("name")
// console.log(target.id)


// que5 With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)
// let elem = document.getElementById("name")
// console.log(elem.value)

// que6 Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)
// let elem = document.querySelectorAll(".list")[0].innerHTML
// console.log(elem)

// que7 Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)
// let lever = document.querySelector("#container").children[0]
// console.log(lever)

// que8 Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)
// const body = document.body.children;
// console.log(body);


// que9 Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)
// const elem = document.getElementsByTagName("li")[0];
// console.log(elem)

// que10 Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)
// const elem = document.getElementsByClassName("content")
// console.log(elem)


// que11 Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)
// const names = document.getElementsByName("fullname")
// console.log(names);


// que12 What classes are present in the classList of the element with the ID "main-heading"? (classList)
// let elem = document.getElementById("main-heading").classList
// console.log(elem)

// que13 Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)
// let class_list_add = document.getElementById('main-heading')
// class_list_add.classList.add("highlight");
// console.log(class_list_add);


// que14 Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)
// let class_list_add = document.getElementById('main-heading')
// class_list_add.classList.remove("highlight");
// console.log(class_list_add);


// que15 Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". What classes are present on the "inner-box" element? (classList.toggle)
// const printToggle = document.getElementsByClassName('inner-box')[0].classList
// console.log(printToggle)


// que16 Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)
// const class1 = document.getElementsByClassName("inner-box")[0]
// const class2 = class1.classList.contains("active")
// console.log(class2)

// que17 What is the background color of the element with the ID "main-heading"? (style.background-color)
// const elem = document.getElementById("main-heading")
// elem.style.backgroundColor = "red"
// const color = elem.style.backgroundColor
// console.log(color)


// que18  Does the element with the class "list" contain an <li> element with the text "Item 2"? Print true or false. (matches)
// const elem = document.getElementsByClassName("list")[0]
// const elem1 = elem.matches("Item2")
// console.log(elem1)

//que19 Does the element with the class "content" match a <div> tag? Print true or false. (matches)
// const elem = document.getElementsByClassName("content")[0]
// const elem1 = elem.matches("div")
// console.log(elem1)

// que20  What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)
// const elem = document.getElementsByClassName("inner-box")[0]
// const nearest = elem.closest("#container")
// console.log(nearest)

// que21 Print the first child element of the <body> element. (document.body)
// const elem = document.body.firstElementChild
// console.log(elem)


// que22 Print the number of child elements within the <body> element. (document.body.children)
// const elem = document.body.children
// console.log(elem)


// que23 What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)
// const elem = document.body.firstElementChild.tagName
// console.log(elem)

// que24 What is the class name of the first child element of the <body> element? (document.body.firstChild.className)
// let elem = document.body.firstElementChild.className
// console.log(elem)

// que25  Print the innerHTML of the element with the class "content". (innerHTML)
// const elem = document.getElementsByClassName("content")[0].innerHTML
// console.log(elem)

// que26 Print the innerText of the element with the class "content". (innerText)
// const elem = document.getElementsByClassName("content")[0].innerText
// console.log(elem)

// que27 Get the value of the "type" attribute of the input element with the ID "name". (getAttribute())
// const elem = document.getElementById("name").getAttribute('type')
// console.log(elem)


// que28 Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (setAttribute())
// const elem = document.getElementById("name").setAttribute('placeholder','Enter your full name')
// console.log(elem)


// que29 Does the input element with the ID "name" have the "placeholder" attribute? Print true or false. (hasAttribute())
// const elem = document.getElementById("name").hasAttribute("placeholder")
// console.log(elem)

// que30 Remove the "value" attribute from the input element with the ID "name". (removeAttribute())
// const elem = document.getElementById("name").removeAttribute("value")
// console.log(elem)


// que31  Print the total number of attributes present in the element with the ID "main-heading". (attributes())
// const elem = document.getElementById("main-heading").attributes
// console.log(elem)


// que32 Create a new <div> element using the document.createElement method. Print the created element. (document.createElement)
// const elem = document.createElement("div")
// console.log(elem)

// que33 Create a new text node with the content "This is a new text node." using the document.createTextNode method. Print the created text node. (document.createTextNode)
// const elem = document.createTextNode("This is a new text node")
// console.log(elem)


// que34 Append the created text node to the element with the ID "main-heading". Print the updated element. (append)
// const elem = document.getElementById("main-headig")
// const elem2 = elem.append(crtText)
// console.log(elem2)


// que35 Prepend the created <div> element to the element with the class "content". Print the updated element. (prepend)
// const elem = document.getElementsByClassName("content")[0]
// const elem2 = elem.prepend("hello",crtDiv)
// console.log(elem2)


// que36 Replace the element with the ID "main-heading" with the created text node. Print the updated element. (replaceWith)
// let elem2 = document.createTextNode("#textNode")
// let elem = document.querySelector("#main-heading")
// elem.replaceWith(elem2)
// console.log(elem2)

// que37 Insert the created <div> element before the element with the class "inner-box". Print the updated parent element. (before)
// const insertCrtElem = document.getElementsByClassName("inner-box")[0]
// const insertCrtElem2 = insertCrtElem.before("second")
// console.log(insertCrtElem2)


// que38  Insert the created <div> element after the element with the class "inner-box". Print the updated parent element. (after)
// const insertCrtElem = document.getElementsByClassName("inner-box")[0]
// const insertCrtElem2 = insertCrtElem.after("second")
// console.log(insertCrtElem2)


// que39 Print the offsetHeight and offsetWidth of the element with the class "content". (offsetHeight / offsetWidth)
// let elem = document.querySelector(".content")
// console.log(elem.offsetHeight)
// console.log(elem.offsetWidth)

// que40 Print the clientHeight and clientWidth of the element with the class "content". (clientHeight / clientWidth)
// const elem = document.querySelector(".content")
// console.log(elem.clientHeight)
// console.log(elem.clientWidth)

// que41Print the scrollHeight and scrollWidth of the element with the class "content". (scrollHeight / scrollWidth)
// const elem = document.querySelector(".content")
// console.log(elem.scrollHeight)
// console.log(elem.scrollWidth)


// que42 Print the innerHeight and innerWidth of the window. (innerHeight / innerWidth)
// const elem = document.querySelector(".content")
// console.log(elem.innerHeight)
// console.log(elem.innerWidth)


// que43 Print the outerHeight and outerWidth of the window. (outerHeight / outerWidth)
// const elem = document.querySelector(".content")
// console.log(elem.outerHeight)
// console.log(elem.outerWidth)


// que44 Change the text content of the <h1> element with the ID "main-heading" to "Hello, DOM!".
// let elem = document.getElementById("main-heading")
// elem.textContent = "helllo,Dom!"
// console.log(elem.textContent)

// que45 Change the value of the input element with the ID "name" to "Jane Smith".
// const nameInput = document.getElementById("name")
// nameInput.value = "jane smith"
// console.log(nameInput.value)


// que46 Add a new <li> element to the <ul> element with class "list" containing the text "Item 4".
// var newItem = document.createElement("li")
// newItem.textContent = "Item 4"
// var listElement = document.querySelector(".list")
// listElement.appendChild(newItem)


// que47 Change the text content of the <p> element within the <div> with class "content" to "Updated paragraph text".
// let elem = document.querySelector(".content")
// let elem2 = elem.querySelector("p")
// elem2.textContent = "Update paragraph text"
// console.log(elem2.textContent)


// que48 Change the background color of the <div> element with ID "container" to blue.
// let elem = document.getElementById("container")
// elem.style.backgroundColor="blue";

// que49 Remove the class "inner-box" from the <div> element with class "inner-box".
// let inner = document.querySelector(".inner-box")
// inner.classList.remove("inner-box");
// console.log(inner)


// que50 Clone the <div> element with ID "container" and append it to the body.
// let elem = document.querySelector("#container")
// let elem2 = elem.cloneNode(true);
// document.body.appendChild(elem2)
// console.log(elem2, elem2.id)

// que51 Wrap the contents of the <div> with ID "container" in a new <div> with class "wrapper".
// let elem = document.querySelector("#container")
// let elem2 = document.createElement("div")
// elem2.className= "wrapper"
// elem2.appendChild(elem)
// console.log(elem2)


// que52 Remove the first <li> element from the <ul> with class "list".
// let elem = document.querySelector("ul")
// elem.removeChild(document.querySelectorAll("li")[0])
// console.log(elem)


// que53 Add the class "highlight" to the <p> element within the <div> with class "content".
// const elem = document.querySelector(".content")
// const emm = elem.querySelector("p")
// emm.classList.add("highlight")
// console.log(emm.classList)


// que54 Change the type of the input element with ID "name" to "email".
// let elem = document.querySelector("#name")
// elem.type="email"
// console.log(elem.type)


// que55 Replace the text content of the <li> element with "Item 2" to "Updated Item 2".
// let elem = document.getElementsByTagName("li")[0]
// let elem2 = elem.replaceChildren("Updated Item 2")
// console.log(elem2)


// que56 Change the value of the input element with ID "name" to an empty string.
// let elem = document.getElementById("#name")
// elem.Value = " "
// console.log(elem)


// que57 Remove the entire <form> element from the DOM.
// let elem = document.getElementsByTagName("from")[0]
// elem.remove()
// console.log(elem)


// que58 Add an event listener to the <h1> element with ID "main-heading" that logs a message when clicked.
// const elem = document.getElementById("main-heading")
// elem.addEventListener("click",function(){
//     alert("helooo........")
// })


// que59 Change the font size of the <p> element within the <div> with class "content" to 18px.
// let elem = document.querySelector(".content")
// elem.getElementsByTagName("p")[0].style.fontSize = "79px"


// que60 Remove the <ul> element with class "list" from the DOM.
// let elem = document.querySelector(".list")[0]
// elem.remove();
// console.log(elem)


// que61 Create a new <div> element, give it a class of "new-div", and append it to the body.
// let elem = document.createElement("div")
// elem.classList.add("newdiv")
// document.body.appendChild(elem)
// console.log(elem)


// que62  Append a new <p> element with the text "New paragraph" to the <div> with class "inner-box".
let elem = document.getElementsByClassName("inner-box")[0]
let newp = document.createElement('p')
newp.textContent = "new paragraph"
elem.appendChild(newp)
console.log(newp.innerHTML)