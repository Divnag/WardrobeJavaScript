function Greeting() {
    var x = document.getElementById("jumbotron-titlebox");
    var userResponse = prompt('Welcome to My Wardrobe . What is your name?');
    x.getElementsByTagName('h1')[0].style.fontSize="20px";
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userResponse+'  to';
}


//function sort() {
//    var response = prompt("Clothes you would like to search?");
//    var x = document.getElementsByClassName("Season");
//    var y = document.getElementsByClassName("photos");
//    var found = new Array(0);

//    for (var i = 0; i < x.length; i++) {
//        if (x[i].innerText ==response) {
//                found.push(y[i].innerText);
//            //found = found +" "+ x[i].innerText;
           
//        }
       
//    }
   
//    alert(response+"Type of Clothes:  "+found);
//    // for (var i = 0; i < found.length; i++) {

//    //     alert(y[i].innerText);

//    // }

//}


function myFunction() {
   
    var selection = document.getElementById("mySelect").value;
    var content = document.getElementById('dis');
    var classseason = document.getElementsByClassName("Season");
    var classtype = document.getElementsByClassName("type");
    var found = new Array(0);
    for (var i = 0; i < classseason.length; i++) {
        if (classseason[i].innerText == selection) {
            found.push(classtype[i].innerText);
         }

    }
      content.innerText ="Collections for your season choice  :"+found;
   
}

function newDoc() {

    var bResponse = confirm('Are you sure you want to exit?');

    if (bResponse === true) {
        ////console.log("lnkLogout_Confirm clciked.");
          window.open("/Tops").focus();
        

    }

}

function newDoc1() {

    var bResponse = confirm('Are you sure you want to exit?');

    if (bResponse === true) {
        ////console.log("lnkLogout_Confirm clciked.");

        window.open("/Bottoms").focus();

    }
 

}

function newDoc2() {

    var bResponse = confirm('Are you sure you want to exit?');

    if (bResponse === true) {
        ////console.log("lnkLogout_Confirm clciked.");

        window.open ("/Shoes").focus();

    }






}

function newDoc3() {

    var bResponse = confirm('Are you sure you want to exit?');

    if (bResponse === true) {
        ////console.log("lnkLogout_Confirm clciked.");
        
        window.open("/Accessories").focus();

    }

}

function newDoc4() {

    var bResponse = confirm('Are you sure you want to exit?');

    if (bResponse === true) {
        ////console.log("lnkLogout_Confirm clciked.");

        window.open("/Outfits").focus();

    }

}


function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}


function mouseover() {
    var x = document.getElementById("jumbotron-titlebox");
    x.getElementsByTagName("h1")[0].style.fontSize = "50px";
    x.getElementsByTagName("h1")[1].style.fontSize = "50px";
    x.getElementsByTagName("h2")[0].style.fontSize = "50px";
    x.getElementsByTagName("h1")[0].style.color = "black";
    x.getElementsByTagName("h1")[1].style.color = "black";
    x.getElementsByTagName("h2")[0].style.color = "black";
}

function mouseout() {
    var x = document.getElementById("jumbotron-titlebox");
    x.getElementsByTagName("h1")[0].style.fontSize = "20px";
    x.getElementsByTagName("h2")[0].style.fontSize = "20px";
    x.getElementsByTagName("h1")[0].style.color = "#4b0202";
    x.getElementsByTagName("h1")[1].style.color = "#4b0202";
    x.getElementsByTagName("h2")[0].style.color = "#4b0202";
}

function footer() {
    var x = document.getElementById("subheaderbar2");
    x.getElementsByTagName("p")[0].innerText = "Created by Divya";
    x.getElementsByTagName("p")[0].style.fontSize = "20px";
    x.getElementsByTagName("p")[0].style.color = "#4b0202";
    
}

