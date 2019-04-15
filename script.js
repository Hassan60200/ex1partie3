var images = document.getElementsByTagName('img');
for (var i=0; i<images.length; i++){
    // met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible.
    images[i].addEventListener('mouseover',addImageBorders);
    images[i].addEventListener('mouseout',removeImageBorders);
}
function addImageBorders(image){
    image=image.target;
    image.style.border='3px solid red';
}
function removeImageBorders(image){
    image=image.target;
    image.style.border='0px';
}
