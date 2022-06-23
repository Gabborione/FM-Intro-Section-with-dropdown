const menuIcon = document.getElementById("header__hamburger");
const headerNav = document.querySelector(".header__nav");
const container = document.querySelector(".container");
const features = document.getElementById("features");
const featuresDropdown = document.querySelector(".features-dropdown");
const company = document.getElementById("company");
const companyDropdown = document.querySelector(".company-dropdown");

menuIcon.addEventListener("click", Submit(headerNav));
features.addEventListener("click", Submit(featuresDropdown));
company.addEventListener("click", Submit(companyDropdown));

function Submit(component) {
    const visibility = component.getAttribute("data-visible");

    if (visibility === "false") {
        headerNav.setAttribute("data-visible", true);
        menuIcon.setAttribute("aria-expanded", true);
        if (component === headerNav) container.classList.add("overlay");
    } else {
        headerNav.setAttribute("data-visible", false);
        menuIcon.setAttribute("aria-expanded", false);
        if (component === headerNav) container.classList.remove("overlay");
    }
}
