const searchingMeal = () => {
    const searchInput = document.getElementById("search-input").value;
    allMeal(searchInput);
}

const allMeal = async searchMealName => {
    const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const url = `${apiBase}${searchMealName}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        showAllMeals(data);
    } catch (error) {
        errorMessage();
    }
}
//error handler
const errorMessage = () => {
    const errorText = document.getElementById("error-message");
    errorText.style.display = "block";
    errorText.innerText = "Sorry, Meal Item Not Found";
}
// Whole Grid
const showAllMeals = expectedMeal => {
    const errorText = document.getElementById("error-message");
    errorText.style.display = "none";
    const resultOfMeals = expectedMeal.meals;
    const allMealGrid = document.getElementById("food-items");
    allMealGrid.innerHTML = '';

    resultOfMeals.forEach(element => {
        const mealName = element.strMeal;
        const mealImg = element.strMealThumb;
        const mealId = element.idMeal;
        const mealCard = document.createElement("div");
        mealCard.className = "card meal-card";
        mealCard.setAttribute('onclick', `singleMeal('${mealId}')`);
        const mealContent = `
        <img class="card-img-top" src="${mealImg}" alt="Meal Image">
        <div class="card-body">
        <h5 class="card-title text-center">${mealName}</h5>
        </div>`;
        mealCard.innerHTML = mealContent;
        allMealGrid.appendChild(mealCard);
    });
}
//Single Grid
const singleMeal = async singleMealId => {
    const apiBase = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const url = `${apiBase}${singleMealId}`;
    const res = await fetch(url);
    const singleRes = await res.json();
    showAllMealsData(singleRes)
}

const showAllMealsData = eachMeal => {
    const mealObject = eachMeal.meals[0];
    const mealImg = mealObject.strMealThumb;
    const mealName = mealObject.strMeal;
    const singleItemBox = document.getElementById("upper-data");
    const upperContent = `<img src="${mealImg}" id="single-meal-img">
    <h4>${mealName}</h4>
    <h5>Ingredients</h5>
    <ul>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient1}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient2}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient3}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient4}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient5}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient6}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient7}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient8}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient9}</p></li>
    <li><i class="fas fa-check-square"></i><p>${mealObject.strIngredient10}</p></li>
    </ul>`;
    singleItemBox.innerHTML = upperContent;
}
