function Greeting() {
    var x = document.getElementById("jumbotron-titlebox");
    var userResponse = prompt('Welcome to My Wardrobe . What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome ' + userResponse+'  to';
}


function sort() {
    var response = prompt("Clothes you would like to search?");
    var x = document.getElementsByClassName("Season");
    var y = document.getElementsByClassName("photos");
    var found=new Array(0);

    for (var i = 0; i < x.length; i++) {
        if (x[i].innerText == response) {
            found.push(response);
            //found = found +" "+ x[i].innerText;
           }
        
    }

    for (var i = 0; i < found.length; i++) {
         alert(y[i].innerText);
    }
    alert(found);
}