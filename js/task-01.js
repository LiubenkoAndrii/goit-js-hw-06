const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.children;
const categoriesCount = categoriesItems.length;

console.log(`Number of categories: ${categoriesCount}`);

for (const item of categoriesItems) {
  const categoryName = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements}`);
}
