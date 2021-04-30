let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
  let image = document.createElement("img");
  // var image = new Image();
  image.onload = () => callback(image);
  image.src = src;
};

let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
};

let imagePath = (animation, frameNumber) => {
  return `images/${animation}/${frameNumber}.png`;
};

let loadImages = (callback) => {
  let images = { idle: [], kick: [], punch: [] };
  let imagesToLoad = 0;

  ["idle", "kick", "punch"].forEach((animation) => {
    let animationFrames = frames[animation];
    imagesToLoad += animationFrames.length;

    animationFrames.forEach((frameNumber) => {
      let path = imagePath(animation, frameNumber);

      loadImage(path, (image) => {
        images[animation][frameNumber - 1] = image;
        imagesToLoad--;
        imagesToLoad === 0 && callback(images);
      });
    });
  });
};

let animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 10, 10, 500, 500);
    }, index * 100);
  });
  setTimeout(callback, images[animation].length * 100);
};

loadImages((images) => {
  animate(ctx, images, "kick", () => {
    console.log("Done");
  });
});
