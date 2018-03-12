var dropDownPanel = document.getElementById('dropDownPanel');
var unbrokenCollection = document.getElementById('unbrokenCollection');
var materialIcon = document.getElementById('materialIcon');
var container = document.getElementById('container');
var topBL = document.getElementById("topBL");
var lowBL = document.getElementById("lowBL");
document.getElementById("navBar").style.width = window.innerWidth;
var behandlingarPil = document.getElementById("behandlingarPil");
var unbrokenBehandlingarPil = document.getElementById("unbrokenBehandlingarPil");
var panelIsExtended = false;
var mouseOverDropdown = false;

behandlingarPil.style.transform = "rotate(-45deg)";
unbrokenBehandlingarPil.style.transform = "rotate(-45deg)";
unbrokenCollection.style.display = "none";

document.getElementById("menuButton").addEventListener("click", rotateMenuButton);
$(dropDownPanel).hide();

window.onresize = function() {
  behandlingarPil.style.transform = "rotate(-45deg)";
  unbrokenBehandlingarPil.style.transform = "rotate(-45deg)";

  if(window.innerWidth > 850) {
    if(panelIsExtended){
      rotateMenuButton();
    }
    } else {
    if(panelIsExtended){
      rotateMenuButton();
    }
    dropDownPanel.style.left = "0px";
    }
  }

function rotateMenuButton() {
  if (!panelIsExtended) {
    $(topBL).animate({ top: '3.5px' });
    $(lowBL).animate({ top: '4px' });
    topBL.style.transform = "rotate(45deg)";
    lowBL.style.transform = "rotate(-45deg)";
    topBL.style.width = "40px";
    lowBL.style.width = "40px";
    $(dropDownPanel).slideToggle("slow");
    panelIsExtended = true;
  } else {
    $(topBL).animate({ top: '1px' });
    $(lowBL).animate({ top: '7px' });
    topBL.style.transform = "rotate(0deg)";
    lowBL.style.transform = "rotate(0deg)";
    topBL.style.width = "30px";
    lowBL.style.width = "30px";
    $(dropDownPanel).slideToggle("slow");
    panelIsExtended = false;
  }
}

function showBehandlingarDropdown() {
  behandlingarPil.style.transform = "rotate(45deg)";
  if(window.innerWidth < 800) {
    $(unbrokenCollection).slideToggle("slow");
  }
  else {
    $(unbrokenCollection).show();
  }
}

function hideBehandlingarDropdown() {
  behandlingarPil.style.transform = "rotate(-45deg)";
  $(unbrokenCollection).slideToggle("slow");
}

$("#unbrokenBehandlingar").on("click", function() {
  showBehandlingarDropdown();
  unbrokenBehandlingarPil.style.transform = "rotate(45deg)";
});

// $("#unbrokenCollection").on("mouseover", function() {
//   mouseOverDropdown = true;
//   console.log("mouse over true");
// });

// $("#unbrokenCollection").on("mouseout", function() {
//   mouseOverDropdown = false;
//       rotateMenuButton();
//     behandlingarPil.style.transform = "rotate(-45deg)";
//     hideBehandlingarDropdown();

// });

// $("#dropDownPanel").on("mouseout", function() {
//   mouseOverDropdown = false;
//   if(window.innerWidth > 800) {
//       rotateMenuButton();
//     behandlingarPil.style.transform = "rotate(-45deg)";
//     hideBehandlingarDropdown();
//   }

// });


$("#dropDownPanel").on("mouseout", function() {
  console.log("out");
});

$("#dropDownPanel").on("mouseover", function() {
  console.log("over");
});

// $("#behandlingar").on('mouseout', function () {
//     if(panelIsExtended && mouseOverDropdown == false) {
//       rotateMenuButton();
//       hideBehandlingarDropdown();
//   }
// });

// $("#behandlingar").on('mouseover', function () {
//   var xPos = $("#behandlingar").position().left - 25;
//      dropDownPanel.style.left = xPos + "px";
//      showBehandlingarDropdown();
//      rotateMenuButton();
// });

$("#behandlingar").on('click', function () {
  if(panelIsExtended) {
    rotateMenuButton();
    behandlingarPil.style.transform = "rotate(-45deg)";
    hideBehandlingarDropdown();
  } else {
      var xPos = $("#behandlingar").position().left - 25;
     dropDownPanel.style.left = xPos + "px";
    showBehandlingarDropdown();
    rotateMenuButton();
    behandlingarPil.style.transform = "rotate(45deg)";
    
  }
});
