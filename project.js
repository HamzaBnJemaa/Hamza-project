var  y = 3
var  guess = 1;

document.getElementById("submitguess").onclick = function () {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("YES, you guesesed the band ! "+ guess + " GUESS ");
    }
    else  {
        guess++;
        alert("wrong band , fellas !");
    }
}

var imageElement = document.getElementById("imageElement");
var changeButton = document.getElementById("changeButton");
///////// i declared those images in a array with they're links///////////
var imageUrls = [
"https://lastfm.freetls.fastly.net/i/u/ar0/48fde70270ae9dd9eb183e2843ef7c9a.jpg",
"https://images.rtl.fr/~c/1200v800/rtl2/www/1571776-linkin-park.jpg",
"https://i.pinimg.com/originals/8f/76/e0/8f76e0d3c64fcb0aa6cff143069a6630.jpg",
];
var currentImageIndex = 0;
/////////this function will able to change the images by the button everytime///////////
function changeImage() {
currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
imageElement.src = imageUrls[currentImageIndex];
imageElement.alt = "Image " + (currentImageIndex + 1);
}
changeButton.addEventListener("click", changeImage)
