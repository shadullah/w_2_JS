const loadData = () => {
  const searchText = document.getElementById("search-box").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};

const displayData = (data) => {
  document.getElementById("total-meals").innerText = data.length;
  const mealsContainer = document.getElementById("meals-container");
  data.forEach((meal) => {
    console.log(meal);
    const card = document.createElement("div");
    card.innerHTML = `
    <img src="" alt="">
    <h2>${meal?.strMeal}</h2>
    <p></p>
    <button>Details</button>
    `;

    mealsContainer.appendChild(card);
  });
};
