document.getElementById("search-btn").addEventListener('click', () => {
    const searchInput = document.getElementById("search-input").value;
    allMeal(searchInput);
})

const allMeal = searchMealName => {
    const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const url = `${apiBase}${searchMealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showAllMeals(data))
}
// Whole Grid
const showAllMeals = expectedMeal => {
    const resultOfMeals = expectedMeal.meals;
    resultOfMeals.forEach(element => {
        const mealName = element.strMeal;
        const mealImg = element.strMealThumb;
        const mealId = element.idMeal;
        const mealCard = document.createElement("div");
        mealCard.className = "card";
        mealCard.setAttribute('onclick', `singleMeal('${mealId}')`);
        const allMealGrid = document.getElementById("food-items");
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
const singleMeal = singleMealId => {
    const apiBase = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const url = `${apiBase}${singleMealId}`;
    fetch(url)
        .then(singleRes => singleRes.json())
        .then(singleData => showAllMealsData(singleData))
}

const showAllMealsData = eachMeal => {
    const mealObject = eachMeal.meals[0];
    const mealImg = mealObject.strMealThumb;
    const mealName = mealObject.strMeal;
    const singleItemBox = document.getElementById("upper-data");
    const upperData = document.createElement("div");
    upperData.className = "upper-data";
    const upperContent = `<img src="${mealImg}" id="single-meal-img">
    <h4>${mealName}</h4>
    <h5>Ingredients</h5>`;
    upperData.innerHTML = upperContent;
    singleItemBox.appendChild(upperData)
    const mealIngredientsArray = ingredientsLi(mealObject);
    for(let i=0; i< mealIngredientsArray.length; i++){
        const allIngredients = mealIngredientsArray[i];
        const ul = document.getElementById("ingredients-ul");
        const li = document.createElement("li");
        const ingredientContent = `<i style="float: left;" class="fas fa-check-square"></i><p>${allIngredients}</p>`;
        li.innerHTML = ingredientContent;
        ul.appendChild(li);
    }
    

}
//bunch of ingredients
const ingredientsLi = ingredient => {
    const ingredient1 = ingredient.strIngredient1;
    const ingredient2 = ingredient.strIngredient2;
    const ingredient3 = ingredient.strIngredient3;
    const ingredient4 = ingredient.strIngredient4;
    const ingredient5 = ingredient.strIngredient5;
    const ingredient6 = ingredient.strIngredient6;
    const ingredient7 = ingredient.strIngredient7;
    const ingredient8 = ingredient.strIngredient8;
    const ingredient9 = ingredient.strIngredient9;
    const ingredient10 = ingredient.strIngredient10;

    const ingredients =[ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient7, ingredient8, ingredient9, ingredient10];
    
    return ingredients;
}