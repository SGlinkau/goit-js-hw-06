const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const ulIngredients = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  ulIngredients.push(listItem);
});
list.append(...ulIngredients);