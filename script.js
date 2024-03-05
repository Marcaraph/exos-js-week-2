// Exo 1 - Footer

let footerClick = document.querySelector("footer");
let i = 0

function onClickFooter() {
    console.clear()
    i++
    console.log("clique numéro : " + i);
};

footerClick.addEventListener("click", onClickFooter);

// Exo 2 - Hamburger Menu

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


// Exo 3 - Edit red irreversible

let card1 = document.querySelector(".card-body")[0]; 
let editButton1 = document.querySelector("div div .btn-outline-secondary");
let text = document.querySelector(".card-text");

function redColor() {
    text.style.color = "red"
}

editButton1.addEventListener("click", redColor);


// Exo 4 - Edit second card to green


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

// Exo 5 - DISABLE NAVBAR

let navBar = document.querySelector(".navbar");
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

// Exo 6 - REDUCE CARD

// let allCard = document.querySelectorAll(".col-md-4")


// allCard.forEach( card => {
// let viewBtn = card.querySelector(".btn-success");
// let img = card.querySelector("img");
// let textDisabled = card.querySelector(".card-text");
// let onMouseOver = function() {
//     textDisabled.classList.toggle("collapse");
//     if(img.style.scale === ""){
//         img.style.scale = "20%"
//     }
//     else {
//         img.style.scale = ""
//     }
  
//   // delete text
//   // reduce img to 20%
//   // keep view & edit buttons
    
// };
// viewBtn.addEventListener("mouseover", onMouseOver);
// })

// ----------------------------------------------

// Exo 6.2 - REDUCE IMG WITHOUT ALTERING CARD DIMENSIONS

let allCard = document.querySelectorAll(".col-md-4")


allCard.forEach( card => {
let viewBtn = card.querySelector(".btn-success");
let img = card.querySelector("img");
let textDisabled = card.querySelector(".card-text");
let onMouseOver = function() {
    if (textDisabled.style.opacity === "") {
    textDisabled.style.opacity = "0";
    img.style.scale = "20%";
  }
    else {
    textDisabled.style.opacity = "";
    img.style.scale = "";
    }
  // delete text
  // reduce img to 20%
  // keep view & edit buttons
    
};
viewBtn.addEventListener("mouseover", onMouseOver);
})

// Exo 7 - CAROUSEL

let rightBtn = document.querySelector("main section div p").childNodes[3];
let allCard2 = document.getElementsByClassName("row")[1];
 console.log(allCard2)
function wtf() {
  let lastCard = allCard2.lastElementChild;
  allCard2.insertBefore(lastCard, allCard2.firstChild);
};

rightBtn.addEventListener("click", wtf);

// Exo 8 - RE-CAROUSEL

let leftBtn = document.querySelector("main section div p a");

function wtfInverse(e) {
    console.log(e)
  e.preventDefault();
  let firstCard = allCard2.firstElementChild;
  allCard2.insertBefore(firstCard, allCard2.lastChild);
};

leftBtn.addEventListener("click", wtfInverse);

// Exo 9 - VIEW 1/3

// 9.1 - FOURTH CODE WITH HIGHLIGHT

function isTextHighlight() {
  let selection = window.getSelection();
  let selectedText = selection.toString().trim();
  let strongText = document.querySelector('.navbar-brand strong').innerText.trim();

  if (selectedText === strongText) {
    document.addEventListener("keypress", handleKeyPress);
  } else {
    document.removeEventListener("keypress", handleKeyPress);
  }
}

function handleKeyPress(event) {
  let bodyElement = document.body;

  if (event.key === "a" || event.key === "y" || event.key === "p") {
    bodyElement.style.width = "33.3333%";
    bodyElement.style.maxWidth = "33.3333%";
    if (event.key === "y") {
      bodyElement.style.marginLeft = "33.3333%";
    } else if (event.key === "p") {
      bodyElement.style.marginLeft = "66.6667%";
    } else {
      bodyElement.style.marginLeft = "";
    }
  } else if (event.key === "b") {
    bodyElement.style.width = "";
    bodyElement.style.maxWidth = "";
    bodyElement.style.marginLeft = "";
  }
}

document.addEventListener("mouseup", isTextHighlight);

// 9.2 - CHANGE WITH A MOUSEOVER

// let logo = document.querySelector(".navbar-brand");
// let bodyElement = document.body;

// function handleKeyPress(event) {
//   if (event.key === "a" || event.key === "y" || event.key === "p") {
//     bodyElement.style.width = "33.3333%";
//     bodyElement.style.maxWidth = "33.3333%";
//     if (event.key === "y") {
//       bodyElement.style.marginLeft = "33.3333%";
//     } else if (event.key === "p") {
//       bodyElement.style.marginLeft = "66.6667%";
//     } else {
//       bodyElement.style.marginLeft = "";
//     }
//   } else if (event.key === "b") {
//     bodyElement.style.width = "";
//     bodyElement.style.maxWidth = "";
//     bodyElement.style.marginLeft = "";
//   }
// }

// logo.addEventListener("mouseover", function () {
//   document.addEventListener("keydown", handleKeyPress);
// });

// Exo 9.3 - CHANGE WITH A CLICK

// let logo = document.querySelector(".navbar-brand");
// let bodyElement = document.body;

// function handleKeyPress(event) {
//   if (event.key === "a" || event.key === "y" || event.key === "p") {
//     bodyElement.style.width = "33.3333%";
//     bodyElement.style.maxWidth = "33.3333%";
//     if (event.key === "y") {
//       bodyElement.style.marginLeft = "33.3333%";
//     } else if (event.key === "p") {
//       bodyElement.style.marginLeft = "66.6667%";
//     } else {
//       bodyElement.style.marginLeft = "";
//     }
//   } else if (event.key === "b") {
//     bodyElement.style.width = "";
//     bodyElement.style.maxWidth = "";
//     bodyElement.style.marginLeft = "";
//   }
// }

// logo.addEventListener("click", function () {
//   document.addEventListener("keydown", handleKeyPress);
// });

// -----------------------------------------------

// Exo 9.4 - THIRD CODE

// let logo = document.querySelector(".navbar-brand");
// let bodyElement = document.body;

// logo.addEventListener("click", function() {
//   bodyElement.addEventListener("keydown", function(event) {
//     if (event.key === "a") {
//       bodyElement.style.width = "33.3333%";
//       bodyElement.style.maxWidth = "33.3333%";
//     } else if (event.key === "y") {
//       bodyElement.style.width = "33.3333%";
//       bodyElement.style.maxWidth = "33.3333%";
//       bodyElement.style.marginLeft = "33.3333%";
//     } else if (event.key === "p") {
//       bodyElement.style.width = "33.3333%";
//       bodyElement.style.maxWidth = "33.3333%";
//       bodyElement.style.marginLeft = "66.6667%";
//     } else if (event.key === "b") {
//       bodyElement.style.width = "";
//       bodyElement.style.maxWidth = "";
//       bodyElement.style.marginLeft = "";
//     }
//   });
// });

