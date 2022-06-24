const menuIcon = document.getElementById("header__hamburger");
const headerNav = document.querySelector(".header__nav");
const container = document.querySelector(".container");
const features = document.getElementById("features");
const featuresDropdown = document.querySelector(".features-dropdown");
const company = document.getElementById("company");
const companyDropdown = document.querySelector(".company-dropdown");

menuIcon.addEventListener("click", () => {
    Submit(menuIcon, headerNav);
});
features.addEventListener("click", () => {
    Submit(features, featuresDropdown);
});
company.addEventListener("click", () => {
    Submit(company, companyDropdown);
});

function Submit(clicked, component) {
    const visibility = component.getAttribute("data-visible");

    if (visibility === "false") {
        component.setAttribute("data-visible", true);
        clicked.setAttribute("aria-expanded", true);
        if (component === headerNav) container.classList.add("overlay");
    } else {
        component.setAttribute("data-visible", false);
        clicked.setAttribute("aria-expanded", false);
        if (component === headerNav) {
            container.classList.remove("overlay");
            featuresDropdown.setAttribute("data-visible", false);
            features.setAttribute("aria-expanded", false);
            companyDropdown.setAttribute("data-visible", false);
            company.setAttribute("aria-expanded", false);
        }
    }
}
