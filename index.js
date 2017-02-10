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
for (var i = 0; i < 1600; i++) {
  let div = document.createElement('div');
  pixelSection.append(div);
  div.className = "pixel";
  div.style.width = '10px';
  div.style.height = '10px';
  div.style.border = "1px solid black";
  div.style.float = 'left';
}
// let newPalette = document.createElement('newPalette');
// body.appen(newPalette);
let palette = document.createElement('palette');
pixelSection.append(palette);
palette.style.border = "1px solid black";
palette.style.height = '160px';
palette.style.width = '600px';
palette.style.borderRadius = '400px';
palette.style.float = "left";
palette.styl
palette.style.padding = "20px";
palette.style.marginTop = '40px';
palette.style.marginLeft = 'auto';
palette.style.marginRight = 'auto';

for (var i = 0; i < 12; i++) {
  let spot = document.createElement('spot');
  palette.append(spot);

}

div.addEventListener('click', function(){
  if (event.target.id === 'div')
  event.target.style.backgroundColor = "red";

})

  //
  // var canvasDiv = document.getElementById('canvasDiv');
  // canvas = document.createElement('canvas');
  // canvas.setAttribute('width', canvasWidth);
  // canvas.setAttribute('height', canvasHeight);
  // canvas.setAttribute('id', 'canvas');
  // canvasDiv.appendChild(canvas);
  // if(typeof G_vmlCanvasManager != 'undefined') {
  // 	canvas = G_vmlCanvasManager.initElement(canvas);
  // }
  // context = canvas.getContext("2d");

// canvas.id = "CursorLayer";
// canvas.width = 20%;
// canvas.height = 20%;
//
// canvas.style.position = "absolute";
// canvas.style.border = "1px solid";
// //
