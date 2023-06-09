let searchField = document.querySelector(".search");
let searchValue;
const allProducts = document.querySelectorAll(".item");

searchField.addEventListener("input", function (e) {
searchValue = searchField.value;

for (let i = 0; i < allProducts.length; i++) {
    if (
    allProducts[i].textContent.slice(0, searchValue.length) !== searchValue
    ) {
    allProducts[i].classList.add("item-hide");
    } else {
    allProducts[i].classList.remove("item-hide");
    }
}
});

let artistsCategory = document.querySelectorAll(".artists");
let musicCategory = document.querySelectorAll(".music");
let internetCategory = document.querySelectorAll(".internet");

document.querySelector("select").addEventListener("change", () => {
switch (document.querySelector("select").options.selectedIndex) {
    case 0:
        allProducts.forEach(function (elem) {
            elem.classList.remove('item-hide');
        })
        break;
    case 1:
        artistsCategory.forEach(function (elem) {
            elem.classList.remove('item-hide');
        })
        internetCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
        musicCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
    break;
    case 2:
        musicCategory.forEach(function (elem) {
            elem.classList.remove('item-hide');
        })
        internetCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
        artistsCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
    break;
    case 3:
        internetCategory.forEach(function (elem) {
            elem.classList.remove('item-hide');
        })
        musicCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
        artistsCategory.forEach(function (elem) {
            elem.classList.add('item-hide');
        })
    break;
}
});