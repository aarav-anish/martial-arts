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

let animate = (ctx, images, callback) => {
  images.forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 10, 10, 500, 500);
    }, index * 100);
  });
  setTimeout(callback, images.length * 100);
};

loadImages((images) => {
  animate(ctx, images, () => {
    console.log("Done");
  });
});
