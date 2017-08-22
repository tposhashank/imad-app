console.log('Loaded!');

// Changing the ID
var element = document.getElementById('New-id');
element.innerHTML = 'NEW VALUE';

//Changing image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '500px';
};