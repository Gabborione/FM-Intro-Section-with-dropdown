const menuIcon = document.getElementById("header__hamburger");
const headerNav = document.querySelector(".header__nav");

console.log(menuIcon);

menuIcon.addEventListener("click", () => {
    const visibility = headerNav.getAttribute("data-visible");

    if (visibility === "false") {
        headerNav.setAttribute("data-visible", true);
        menuIcon.setAttribute("aria-expanded", true);
    } else {
        headerNav.setAttribute("data-visible", false);
        menuIcon.setAttribute("aria-expanded", false);
    }
});
