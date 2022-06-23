const menuIcon = document.getElementById("header__hamburger");
const headerNav = document.querySelector(".header__nav");
const container = document.querySelector(".container");

console.log(menuIcon);

menuIcon.addEventListener("click", () => {
    const visibility = headerNav.getAttribute("data-visible");

    if (visibility === "false") {
        headerNav.setAttribute("data-visible", true);
        menuIcon.setAttribute("aria-expanded", true);
        container.classList.add("overlay");
    } else {
        headerNav.setAttribute("data-visible", false);
        menuIcon.setAttribute("aria-expanded", false);
        container.classList.remove("overlay");
    }
});
