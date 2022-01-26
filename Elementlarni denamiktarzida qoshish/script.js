"use strict";
const parentDiv =  document.querySelector(".parent");

const div = document.createElement("div");

div.classList.add("box");

div.style.background = 'black';

parentDiv.append(div); // parentDiv ni oxiriga kontentni qo'shadi

parentDiv.prepend(div); // parentDiv ni boshiga kontentni qo'shadi




console.log(div);