var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/balloon.jpeg') {
      myImage.setAttribute ('src','images/balloon1.jpeg');
    } else {
      myImage.setAttribute ('src','images/balloon.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='气球'+myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '气球 ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var myScr = myImage.getAttribute('src');
    if(myScr === 'images/balloon.jpeg'){
        myImage.setAttribute ('src','images/balloon1.jpeg');
    }else{
        myImage.setAttribute ('scr','images/balloon.jpeg');
    }
}*/