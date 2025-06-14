import { data } from "./data.mjs";

data.map((info) => {
  const card = document.createElement("section");

  const figure = document.createElement("figure");
  const img = document.createElement("img");

  const main = document.createElement("main");
  const personalData = document.createElement("div");
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  const anchor = document.createElement("a");

  const about = document.createElement("div");
  const aboutTitle = document.createElement("h3");
  const p = document.createElement("p");

  const interests = document.createElement("div");
  const interestTitle = document.createElement("h3");
  const interestParagraph = document.createElement("p");

  const footer = document.createElement("footer");
  const fbIcon = document.createElement("img");
  const inIcon = document.createElement("img");

  // Classes
  card.classList.add("card");
  figure.classList.add("figure");
  img.classList.add("photo");
  main.classList.add("main");
  personalData.classList.add("personal-data");
  h2.classList.add("name");
  span.classList.add("career");
  anchor.classList.add("web");
  about.classList.add("about");
  aboutTitle.classList.add("about__title");
  p.classList.add("about__p");
  footer.classList.add("footer");
  fbIcon.classList.add("fbIcon");
  inIcon.classList.add("inIcon");
  interests.classList.add("interests");
  interestTitle.classList.add("interest__title");
  interestParagraph.classList.add("interest__paragraph");

  img.src = info.img;
  img.alt = `Photograph of ${info.name}`;

  h2.textContent = info.name;
  span.textContent = info.career;
  anchor.textContent = info.web;

  aboutTitle.textContent = "About";
  p.textContent = info.about;

  interestTitle.textContent = "Interests";
  interestParagraph.textContent = info.interests;

  fbIcon.src = info.media[0];
  inIcon.src = info.media[1];
  fbIcon.alt = `Facebook icon`;
  inIcon.alt = `Instagram icon`;

  figure.append(img);
  personalData.append(h2, span, anchor);
  about.append(aboutTitle, p);
  interests.append(interestTitle, interestParagraph);
  main.append(personalData, about, interests);
  footer.append(fbIcon, inIcon);

  card.append(figure, main, footer);
  document.body.append(card);
});
