// document object model (dom)
/* <h1></h1>
<p></p> */ //html tags (objects);

// windows refers to the browser window
// document refers to the html file loaded in the window
// location refers to the http://www....

// example;
// window.location.href = "http://www.google.com"

// document;
// window.document(this refers to the html document loaded in browser)


// ways to read html content in browser using js;
// window.document.getElementsByTagName("h1"); //it will give html collection all h1 tag includes 
// window.document.getElementsByTagName("h1")[0]; //it will give first index of the h1 tag
// window.document.getElementsByTagName("h1")[0].textContent; //it will show the content which is present in h1 tag
// window.document.getElementsByTagName("ul")[0].children//it will show the list item present inside the ul 

// <ul>
/* <li>coffee</li>
<li>tea</li>
<li>milk</li>
<li>black coffee</li> */
// </ul>

// let listitems = window.document.getElementsByTagName("ul")[0].children;
// for (let i = 0 ; i < listitems.length ; i++){
//     console.log(listitems[i].textContent)
// }

// changing content using js
// let listitems1 = window.document.getElementsByTagName("ul")[0].children;
// for(let i = 0 ; i < listitems1.length ; i++){
//     listitems1[i].textContent = "coffee";
// }


// get elementbyid;
// window.document.getElementById("header");
// let head = window.document.getElementById("header");
// console.log(head.textContent);

// adding class name to h1 tag using setAttributes()
// head.setAttribute("class","blue");

// remove or add new class names to html tags using classList;
// head.classList.add("red");
// head.classList.remove("red");
// head.classList.add("red");




// example showing and hiding the html content;

// let content = window.document.getElementById("show");
// let button1 = window.document.getElementById("showbutton");
// let button2 = window.document.getElementById("hidebutton");

// button1.addEventListener("click" , () => {
// content.classList.remove("hide");
// content.classList.add("show");
// })
// button2.addEventListener("click" , () => {
//     content.classList.remove("show")
//     content.classList.add("hide")
// })


// get elememt by class name (html collection)
// console.log(window.document.getElementsByClassName("class")[0].textContent);
// console.log(window.document.getElementsByClassName("class")[1].textContent);
// console.log(window.document.getElementsByClassName("class")[2].textContent);



// queryselector (it will return first matching items)
// console.log(window.document.querySelector("h1").textContent);
// console.log(window.document.querySelector(".classone")); //class name first matched
// console.log(window.document.querySelector("#id-one")); //id name first matched


// queryselectorAll (it will retuen all the tag name which is class,id ,anything)
// console.log(window.document.querySelectorAll("h1")); //gives all h1 element which is present
// console.log(window.document.querySelectorAll("#id-one")); //gives first element id because js has only one id
// console.log(window.document.querySelectorAll(".classone")); // it will give all class name


// creating a elemnt using js(dom);
// let header = window.document.createElement("h1");

// adding content to that tag;
// header.textContent = "hello world !";

// inserting to html body using appendchild;
// window.document.body.appendChild(header);

// adding color
// header.style.color = "blue"














