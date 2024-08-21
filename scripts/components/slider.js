let scrollContainer = document.getElementsByClassName("slider")[0];
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 350;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 350;
});