
// var titleone = document.firstElementChild.querySelector('head :nth-child(2)');
// titleone.innerHTML = "You are welcome";

var mainTitle = document.firstElementChild.firstElementChild.querySelector('title');
mainTitle.innerHTML = "You are welcom!"


// alert("Hello My browser");
// var third = document.querySelectorAll('#list ul :nth-child(3)');
// third.innerHTML = "changed";

// var td = document.firstElementChild.lastElementChild.querySelector('ul :nth-child(3)');
// td.innerHTML = "Oluwaseyi is a great winner";


var thirdList = document.firstElementChild.lastElementChild.querySelector('#list :nth-child(3)');
thirdList.innerHTML = "Oluwaseyi is a great winner";

/**
 * Challenge to change the href to red. All the below works
 */
//document.querySelector("#list .list a").style.color = "red";
//document.querySelector("#list li a").style.color = "red";
document.querySelector("ul .list a").style.color = "red";

document.querySelector("body button").style.backgroundColor = "yellow";

// document.querySelector("h1").style.fontSize = "1rem";

document.querySelector("button").classList.add("invisible");

document.querySelector("button").classList.remove("invisible");

document.querySelector("h1").classList.toggle("huge");