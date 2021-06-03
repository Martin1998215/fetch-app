const catDisplay = document.getElementById("cat");
const dogDisplay = document.getElementById("dog");

const catBtn = document.querySelector(".cat-btn");
const dogBtn = document.querySelector(".dog-btn");


catBtn.addEventListener("click", () => {
    fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(data => {
            catDisplay.innerHTML = `<img src=${data.file} alt=photo />`
        })
});


dogBtn.addEventListener("click", () => {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogDisplay.innerHTML = `<img src=${data.url} alt=photo />`
        })
});