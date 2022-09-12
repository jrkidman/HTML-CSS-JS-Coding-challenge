
const remove = document.getElementById("remove");
const add = document.getElementById("add");
const counter = document.getElementById("count");
const starsDisplay = document.querySelector(".stars-display");

let count = 5;

const updateStars = () => {
    starsDisplay.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.textContent = "🌟"
        starsDisplay.append(star);
    }
};

const updateNumber = () => {
    counter.textContent = count;
    updateStars();
};
updateNumber();

remove.addEventListener("click", () => {
    if (count > 0) count -= 1;
    updateNumber();
});

add.addEventListener("click", () => {
    if (count <= 4) {
        count += 1;
        updateNumber();
    }
});