// Challenge 1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    // .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Challenge 2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));

// Challenge 3

// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load image 1
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };
// // loadNPause();
// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async (img) => await createImage(img));
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach((img) => img.classList.add("parallel"));
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
