const btn = document.querySelector("#btn"),
button_a = document.querySelector(".btn_A");

const link = document.querySelector("a");

const div = document.querySelector(".div");


//=============1uSuli========================
// btn.onclick = function() {
//     console.log('Hello world');
// }

// btn.onclick = function () {
//     console.log(2);
// }
//===========================================


//=============2uSuli========================
// btn.addEventListener("click", () => {
//     console.log('Hello world')
// })
//===========================================


// const callFunc = () => {
//     console.log('Hello world');
// }

// btn.addEventListener("click", callFunc);

// button_a.addEventListener("click", (ev) => {
//     console.log(ev.target);
// })


// link.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     alert("Haaa Anqovlar");
// })




const callFunc = (e) => {
    console.log(e.currentTarget);
};
btn.addEventListener("click", callFunc);
div.addEventListener("click", callFunc);


const input = document.querySelector("form input");

input.addEventListener("input", (ev) => {
    console.log(ev.target.value);
})