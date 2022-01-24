/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

const newsGener = document.querySelector(".promo__genre");
// newsGener.innerHTML = "Qalampir";

// newsGener.insertAdjacentHTML("afterend", "UzNews")


const btnNews = document.querySelector(".promo__btn"),
bg = document.querySelector(".promo__bg"),
newList = document.querySelector(".promo__interactive-list");

console.log(newList);



const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

btnNews.remove();

newsGener.textContent = "UzNews";
newsGener.style.color = "crimson";

bg.style.backgroundImage = "url(img/2.jpg)"

newList.innerHTML = ""

news.forEach((itemNews, index) => {
  newList.innerHTML += ` <li class="promo__interactive-item">
  ${index+1} ${itemNews}
  <div class="delete"></div></li>`;
  // console.log(itemNews);
})


