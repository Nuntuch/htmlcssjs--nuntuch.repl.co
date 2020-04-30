/* Go to Top Botton */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* Go to Top Botton */

/* Hide JS */

/* Hide JS */


// login menu
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// login menu


//DropDownBTH Menu Left 
// ___________________________________________________________________
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}
function myFunction6() {
  document.getElementById("myDropdown6").classList.toggle("show");
}
function myFunction7() {
  document.getElementById("myDropdown7").classList.toggle("show");
}
function myFunction8() {
  document.getElementById("myDropdown8").classList.toggle("show");
}
function myFunction9() {
  document.getElementById("myDropdown9").classList.toggle("show");
}
function myFunction10() {
  document.getElementById("myDropdown10").classList.toggle("show");
}
function myFunction11() {
  document.getElementById("myDropdown11").classList.toggle("show");
}
function myFunction12() {
  document.getElementById("myDropdown12").classList.toggle("show");
}
function myFunction13() {
  document.getElementById("myDropdown13").classList.toggle("show");
}
function myFunction14() {
  document.getElementById("myDropdown14").classList.toggle("show");
}
function myFunction15() {
  document.getElementById("myDropdown15").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




// ___________________________________________________________________
// /DropDownBTH Menu Left


// Hide content

// function HideContentFunction() {
 if (sessionStorage.getItem("status")!= "admin"){
    // var x = document.getElementById("hide_if_ms-team-vdo");
    var x = document.getElementById("hide_if_ms-team-vdo");
    // var x = document.getElementById("if_ms-team-vdo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  // }

 var y = document.getElementById("fb-postv");
    
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  
  
 var z = document.getElementById("Lecture");
    
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }

  var a = document.getElementById("My-Tools");
    
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }

 var b = document.getElementById("workdrive");
    
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }

 var c = document.getElementById("DriveforWorksofSIT.KMUTT");
    
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
 
 var d = document.getElementById("head_if_ms-team-vdo");
    
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
 var f = document.getElementById("head_if_youtubelearner");
    
    if (f.style.display === "none") {
      f.style.display = "block";
    } else {
      f.style.display = "none";
    }
 var g = document.getElementById("if_youtubelearner");
    
    if (g.style.display === "none") {
      g.style.display = "block";
    } else {
      g.style.display = "none";
    }

//  var e = document.getElementById("tail_if_ms-team-vdo");
    
//     if (e.style.display === "none") {
//       e.style.display = "block";
//     } else {
//       e.style.display = "none";
//     }


  }

// }



  // onload = () => {
  //   const webview = document.querySelector('webview')
  //   const indicator = document.querySelector('.indicator')

  //   const loadstart = () => {
  //     indicator.innerText = 'loading...'
  //   }

  //   const loadstop = () => {
  //     indicator.innerText = ''
  //   }

  //   webview.addEventListener('did-start-loading', loadstart)
  //   webview.addEventListener('did-stop-loading', loadstop)
  // }













