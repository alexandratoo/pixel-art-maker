let pixelSection = document.createElement('section');
pixelSection.style.width = '480px';
pixelSection.style.height = '480px';
pixelSection.style.border = '1px solid black';
pixelSection.style.padding = '1px';
pixelSection.style.display = 'inline-block';

// pixelSection.setAttribute('class', 'pixel');
// pixelSection.setAttribute('width', canvasWidth);
// canvas.setAttribute('height', canvasHeight);
let body = document.getElementsByTagName('body')[0];
body.append(pixelSection);
//creating the for loop in order to create and add multiple divs to the pixelSection
for (var i = 0; i < 1521; i++) {
  let div = document.createElement('div');
  pixelSection.append(div);
  div.className = "pixel";
  div.style.width = '10px';
  div.style.height = '10px';
  div.style.border = "1px solid black";
  div.style.float = 'left';
}
let paletteSection = document.createElement('section');
body.append(paletteSection);
    paletteSection.className = 'newSection'
// let palette = document.createElement('palette');
//
// paletteSection.append(palette);
// palette.className = 'paly';
// palette.style.border = "1px solid black";
// palette.style.height = '120px';
// palette.style.width = '400px';
// palette.style.borderRadius = '400px';
// palette.style.float = "left";
// palette.style.padding = "20px";
// palette.style.marginTop = '40px';
// palette.style.marginLeft = 'auto';
// palette.style.marginRight = 'auto';


var colorArray = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "brown", "black", "grey"];

for (var i = 0; i < colorArray.length; i++) {
  let spot = document.createElement('div');
  var styleColor = colorArray[i];
  spot.style.backgroundColor = styleColor;
  spot.className = 'spotty';
  spot.style.display = 'inline-block'
  spot.style.width = '40px';
  spot.style.height = '40px';
  spot.style.float = 'left'
  paletteSection.append(spot);

}
function picked () {
  let pick= event.target
  let pickedColor= pick.style.backgroundColor
  console.log(pickedColor);
  return pickedColor
}
paletteSection.addEventListener('click', function(){
  let coloring=picked()
  pixelSection.addEventListener('click', function(){
    event.target.style.backgroundColor=coloring
  })
})
// var userChoice = ""
// pixelSection.addEventListener('click', function(event){
// event.target.style.backgroundColor = "red";
//
// })
// var btnEvent = function (event) {
//     if (event.type == 'click') {
//         btnEvent['storedColor'] = event.target.style.backgroundColor;
//         event.target.style.backgroundColor = someColorWhilePressed;
 //
 // paletteSection.addEventListener('click', function(event){
 //  var storedColor = event.target;
 //  let pickedColor = storedColor.backgroundColor;

  // var btnEvent = function (event) {
  //     if (event.type == 'click') {
  //         btnEvent['storedColor'] = event.target.style.backgroundColor;
  //         event.target.style.backgroundColor = someColorWhilePressed;
// var selectedColor = {
//   color: 'black'
// }
// paletteSection.addEventListener('click', function() {
//   selectedColor = event.target.style.backgroundColor;
// function objectifyColor(eventColor) {
//   if (eventColor !== selectedColor['color']) {
//     selectedColor['color'] = eventColor;
