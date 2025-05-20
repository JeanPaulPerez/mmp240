function showMenu(){
var menu = document.getElementById("dropmenu");
if (menu.style.display==="none"){
menu.style.display="block";
} else {
menu.style.display="none";
  }
}
var num = 0;

//Replace with your own values and add additional lines for more images
imgArray = [
  ['images/slide1.jpg'],
  ['images/slide2.jpg'],
  ['images/slide3.jpg']
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('banner-img').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('banner-img').src=imgArray[num];
}