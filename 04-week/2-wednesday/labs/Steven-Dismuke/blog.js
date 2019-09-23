var container = document.getElementById("container");
var header = document.createElement("header");
var logo = document.createElement("h1");
var nav=document.createElement("nav");
logo.innerHTML = "My New Mixtape";

container.appendChild(header);
header.appendChild(logo);

var navUi=document.createElement("ul");
var listItem1=document.createElement('li');
var link1=document.createElement('a');
link1.innerHTML="About us";
link1.setAttribute("href","http://google.com");
listItem1.appendChild(link1);
listItem1.setAttribute("style", "color:yellow; border: 2px solid black;padding:5px;");
navUi.appendChild(listItem1);

var listItem2=document.createElement('li');
var link2=document.createElement('a');
link2.innerHTML="Categories";
link2.setAttribute("href","http://yahoo.com");
listItem2.appendChild(link2);
listItem2.setAttribute("style", "color:green; border: 2px solid black;padding:5px;");
navUi.appendChild(listItem2);



header.appendChild(nav);
nav.appendChild(navUi);

var main=document.createElement("main");
main.innerHTML="Curse of the Current Reviews";
main.setAttribute("style","background-color:grey;border:1px solid black;height:200px;");
container.appendChild(main);

header.setAttribute("style","display:flex;background-color:aqua;height:150px;");
navUi.setAttribute("style","display:flex;list-style-type:none;")
