//Menu Dropdown
var dropDownList1 = document.getElementById('dropdown1-list');
var dropDownList2 = document.getElementById('dropdown2-list');
var arrowUp1 = document.getElementById('arrow-up1');
var arrowUp2 = document.getElementById('arrow-up2');
var arrowDown1 = document.getElementById('arrow-down1');
var arrowDown2 = document.getElementById('arrow-down2');


// Mobile Menu

var mobileMenu = document.getElementById('mobile-menu');
var closeMenu = document.getElementById('close-menu');
var section1 = document.querySelector('.section-1');
var navbar = document.querySelector('.space');
var dropDownMobile1 = document.querySelector('#dropdown1-list-mobile');
var dropDownMobile2 = document.querySelector('#dropdown2-list-mobile');
var arrowUp1Mobile = document.getElementById('arrow-up1-mobile');
var arrowUp2Mobile = document.getElementById('arrow-up2-mobile');
var arrowDown1Mobile = document.getElementById('arrow-down1-mobile');
var arrowDown2Mobile = document.getElementById('arrow-down2-mobile');




// Menu DropDown

function dropList1() {
    if (dropDownList1.style.display === "none") {
        dropDownList1.style.display = "block";
      } else {
        dropDownList1.style.display = "none";
      }
    
      // Change arrow up down
    if(arrowUp1.style.display === "none") {
      arrowDown1.style.display = "none";
      arrowUp1.style.display = "block"
    } else {
      arrowUp1.style.display = "none";
      arrowDown1.style.display = "block";
    }
}

function dropList2() {
    if (dropDownList2.style.display == "none") {
        dropDownList2.style.display = "block";
      } else {
        dropDownList2.style.display = "none";
      }


      // Change arrow up down
      if(arrowUp2.style.display === "none") {
        arrowDown2.style.display = "none";
        arrowUp2.style.display = "block"
      } else {
        arrowUp2.style.display = "none";
        arrowDown2.style.display = "block";
      }
}

// Mobile Menu Functions

function showMenu() {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    navbar.style.opacity = "0.2";
    section1.style.opacity = "0.2";

  } else {
    mobileMenu.style.display = "none";
  }
}

closeMenu.addEventListener('click', () =>  {
  if (mobileMenu.style.display == "flex") {
    mobileMenu.style.display = "none";
    navbar.style.opacity = "1";
    section1.style.opacity = "1";
  } else {
    mobileMenu.style.display = "none";
  }
})

// Menu Element DropDowns

document.querySelector('#dropdown1-mobile').addEventListener('click', () => {
  if (dropDownMobile1.style.display === 'none') {
    dropDownMobile1.style.display = 'block';
  } else {
    dropDownMobile1.style.display = 'none'
  }

  // Change arrow up down
  if(arrowUp1Mobile.style.display === "none") {
    arrowDown1Mobile.style.display = "none";
    arrowUp1Mobile.style.display = "block"
  } else {
    arrowUp1Mobile.style.display = "none";
    arrowDown1Mobile.style.display = "block";
  }
})

document.querySelector('#dropdown2-mobile').addEventListener('click', () => {
  if (dropDownMobile2.style.display === 'none') {
    dropDownMobile2.style.display = 'block';
  } else {
    dropDownMobile2.style.display = 'none'
  }

  // Change arrow up down
  if(arrowUp2Mobile.style.display === "none") {
    arrowDown2Mobile.style.display = "none";
    arrowUp2Mobile.style.display = "block"
  } else {
    arrowUp2Mobile.style.display = "none";
    arrowDown2Mobile.style.display = "block";
  }
})


