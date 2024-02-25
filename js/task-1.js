const list = document.querySelector("#categories");

const itemCategories = categories.children.length;
console.log(`Number of categories: ${itemCategories}`);

list.querySelectorAll(".item").forEach((item) => {
const title = item.querySelector("h2").textContent;
const elemCategories = item.querySelectorAll("li").length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elemCategories}`);
});