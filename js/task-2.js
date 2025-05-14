const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const elGallery = document.querySelector("ul.gallery");

console.log(elGallery);

for (const element of images) {

  if (!element.url || !element.alt) {
    continue;
  }

  const newLi = document.createElement("li");
  const newImage = document.createElement("img");

  newLi.classList.add("taskList")

  newImage.setAttribute("src", element.url);
  newImage.setAttribute("alt", element.alt);
  newImage.width = "450";

  newImage.classList.add("listItemImage")

  newLi.append(newImage);
  elGallery.append(newLi);

}
