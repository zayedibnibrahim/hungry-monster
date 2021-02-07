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

const showAllMeals = expectedMeal => {
    const resultOfMeals = expectedMeal.meals;
    resultOfMeals.forEach(element => {
        const mealName = element.strMeal;
        const mealImg = element.strMealThumb;
        const mealCard = document.createElement("div");
        mealCard.className = "card";
        mealCard.setAttribute('onclick', `singleMeal('${mealName}')`);
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

const singleMeal = singleData => {
    const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const url = `${apiBase}${singleData}`;
    fetch(url)
        .then(singleRes => singleRes.json())
        .then(singleData => showAllMealsData(singleData))
}

const showAllMealsData = eachMeal => {
    
}