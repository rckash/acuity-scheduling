let scrollContainer = document.getElementsByClassName("slider")[0];
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

backBtn.addEventListener("click", (evt) => {
    scrollContainer.scrollLeft -= 350;
    console.log("backBtn clicked!");
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 350;
    console.log("nextBtn clicked!");
});