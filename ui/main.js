console.log('Loaded!');

// Changing the ID
var element = document.getElementById('New-id');
element.innerHTML = 'NEW VALUE';

//Changing image
var img = document.getElementById('madi');
//img.onclick = function(){
//    img.style.marginLeft = '200px';
//};

//Adding motion to the image
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
var interval = setInterval(moveRight,50);
}