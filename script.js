let footerClick = document.querySelector("footer");
let i = 0

function onClickFooter() {
    console.clear()
    i++
    console.log("clique numéro : " + i);
};

footerClick.addEventListener("click", onClickFooter);

// Hamburger Menu

let menuBtn = document.querySelector(".navbar-toggler");
let menu = document.getElementById("navbarHeader");
// let menuStatus = false;
// function menuToggle() {
//     if(menuStatus == false) {
//       menu.classList.remove("collapse");
//       menuStatus = true;
//     }

//     else if(menuStatus == true) {
//       menu.classList.add("collapse");
//       menuStatus = false;
//     }
        
// };

function menuToggle() {
    menu.classList.toggle("collapse");
}
menuBtn.addEventListener("click", menuToggle);


// Edit red irreversible

let card1 = document.querySelector(".card-body")[0]; 
let editButton1 = document.querySelector("div div .btn-outline-secondary");
let text = document.querySelector(".card-text");

function redColor() {
    text.style.color = "red"
}

editButton1.addEventListener("click", redColor);


// Edit second card to green


// let secondCard = document.querySelectorAll(".card-body")[1]; 
// // let editButton2 = secondCard.querySelector(".btn-outline-secondary");
// console.log(secondCard);
// let text2 = document.querySelector(".card-text")[1];

let secondCard = document.querySelectorAll(".card-body")[1];
let editButton2 = secondCard.querySelector(".btn-outline-secondary");
let text2 = secondCard.querySelector(".card-text");

function turnGreen() {
    if(text2.style.color === "green") {
        text2.style.color = "";
    }
    else if(text2.style.color === ""){
        text2.style.color = "green";
    }
};

editButton2.addEventListener("click", turnGreen);

// DISABLE NAVBAR

let navBar = document.querySelector("header");
let link = document.querySelector("link");

function disabledCss() {

  if (link.disabled === true) {
    link.disabled = false;
  }
  else {
    link.disabled = true
  }
};
navBar.addEventListener("dblclick", disabledCss);

// REDUCE CARD

// REDUCE IMG WITHOUT ALTERING CARD DIMENSIONS

// let allCard = document.querySelectorAll(".col-md-4")


// allCard.forEach( card => {
// let viewBtn = card.querySelector(".btn-success");
// let img = card.querySelector("img");
// let textDisabled = card.querySelector(".card-text");
// let onMouseOver = function() {
//     if (textDisabled.style.filter === "") {
//     textDisabled.style.filter = "opacity(0%)";
//     img.style.scale = "20%";
//   }
//     else {
//     textDisabled.style.filter = "";
//     img.style.scale = "";
//     }
//   // delete text
//   // reduce img to 20%
//   // keep view & edit buttons
    
// };
// viewBtn.addEventListener("mouseover", onMouseOver);
// })

// ----------------------------------------------

// REDUCE IMG WITH CARD DIMENSIONS CHANGE

let allCard = document.querySelectorAll(".col-md-4")


allCard.forEach( card => {
let viewBtn = card.querySelector(".btn-success");
let img = card.querySelector("img");
let textDisabled = card.querySelector(".card-text");
let onMouseOver = function() {
    textDisabled.classList.toggle("collapse");
    if(img.style.scale === ""){
        img.style.scale = "20%"
    }
    else {
        img.style.scale = ""
    }
  
  // delete text
  // reduce img to 20%
  // keep view & edit buttons
    
};
viewBtn.addEventListener("mouseover", onMouseOver);
})

// COOOOOOOOOOOOOOOOL exo 7 

let rightBtn = document.querySelector("main section div p").childNodes[3];
let allCard2 = document.getElementsByClassName("row")[1];
 console.log(allCard2)
function wtf() {
  let lastCard = allCard2.lastElementChild;
  allCard2.insertBefore(lastCard, allCard2.firstChild);
};

rightBtn.addEventListener("click", wtf);