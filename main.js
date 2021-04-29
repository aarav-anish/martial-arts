let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let image = document.createElement("img");
  // var image = new Image();
  image.onload = () => callback(image);
  image.src = src;
};

loadImage("images/5.png", (image) => {
  ctx.drawImage(image, 10, 10, 500, 500);
});
