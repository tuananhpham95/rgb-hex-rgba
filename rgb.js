//rgb color
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  return "rgb" + "(" + this.r + "," + this.g + "," + this.b + ")";
};

let color1 = new Color(200, 230, 230);
console.log("RGB:", color1.rgb());

function testColor1() {
  document.body.style.backgroundColor = color1.rgb();
}

//-------------------------------------------------------------------------

//Hex color
Color.prototype.hex = function () {
  let rHex = this.r.toString(16).padStart(2, "0");
  let gHex = this.g.toString(16).padStart(2, "0");
  let bHex = this.b.toString(16).padStart(2, "0");
  return "#" + rHex + gHex + bHex;
};
let color2 = new Color(223, 32, 32);

console.log("Hex:", color2.hex());
function testColor2() {
  document.body.style.backgroundColor = color2.hex();
}

//--------------------------------------------------------------------------------

//rgba Color
Color.prototype.rgba = function (a) {
  return "rgba(" + this.r + "," + this.g + "," + this.b + "," + a + ")";
};

let color3 = new Color(223, 32, 32);
console.log("RGBA:", color3.rgba(0.4));
function testColor3() {
  document.body.style.backgroundColor = color3.rgba(0.4);
}
