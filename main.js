let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let image = document.createElement("img");
  // var image = new Image();
  image.onload = () => callback(image);
  image.src = src;
};

let loadImages = (callback) => {
  let images = [];

  [1, 2, 3, 4, 5, 6, 7, 8].forEach((frameNumber) => {
    let path = "images/" + frameNumber + ".png";
    loadImage(path, (image) => {
      images[frameNumber - 1] = image;
      frameNumber === 8 && callback(images);
    });
  });
};

loadImages((images) => {
  ctx.drawImage(images[3], 10, 10, 500, 500);
});
