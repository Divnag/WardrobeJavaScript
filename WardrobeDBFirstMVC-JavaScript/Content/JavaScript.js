function Greeting() {
    var x = document.getElementById("jumbotron-titlebox");
    var userResponse = prompt('Welcome to My Wardrobe . What is your name?');
    x.getElementsByTagName('h1')[0].style.fontSize="20px";
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userResponse+'  to';
}

function overBtn(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
}

function outBtn(x) {
    x.style.backgroundColor = "#474e5d";
    x.style.color = "white";
}


function myFunction() {

    var selection = document.getElementById("mySelect").value;
    var content = document.getElementById('dis');
    var classseason = document.getElementsByClassName("Season");
    var classtype = document.getElementsByClassName("type");
    var classphoto = document.getElementsByClassName("photo");
    var found = new Array(0);
    for (var i = 0; i < classseason.length; i++) {
        if (classseason[i].innerText == selection) {

            found.push(classtype[i].innerText);
            classphoto[i].style.display = "block";

        }

    }

    content.innerText = "Collections for your season choice  :" + found;

    for (var i = 0; i < classseason.length; i++) {
        if (classseason[i].innerText != selection) {

            classphoto[i].style.display = "none";

        }


    }
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
    x.getElementsByTagName("p")[0].style.color = "white";
    
}

function numberguess() {

    x = Math.floor(Math.random() * 10) + 1;  // returns a number between 1 and 10
    console.log(x);
    var use = new Array(0);
    for (var i = 0; i < 3; i++) {
        var userResponse = prompt('Enter a Number between 1 and 10');
        use.push(userResponse);
    }


    alert('Random Number was ' + x)
    alert("you are numbers :" + use);
   
    for (var i = 0; i < 3; i++)
     {
        if (x == use[i]) {
            alert('Youre  guessed Correct')
           
        }
        else {
            alert('Youre guessed Wrong')
        }
       
    }
   
   
   }


    


