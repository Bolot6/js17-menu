const row = document.querySelector('.row')
const all =document.querySelector('#all')
const search =document.querySelector('#search')
const searchBox = document.querySelector('.search-wrapper')
const searchInput =document.querySelector('#searchInput')
const submit =document.querySelector('#submit')
const searchMain =document.querySelector('#searchMain')
const meals = document.querySelector('#meals')
const instructions = document.querySelector('#instructions')
const category = document.querySelector('#category')
const imgMeal = document.querySelector('#imgMeal')


all.addEventListener('click', () => {
    if (all.checked) {
        row.classList.remove('hidden')
        searchBox.classList.add('hidden')
    }
})

search.addEventListener('click', () => {
    if (search.checked){
        searchBox.classList.remove('hidden')
        row.classList.add('hidden')
    }
})

const handleGetMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
        .then(res => res.json())
        .then(json => {
            json.meals.forEach(meals => {
                row.innerHTML += `
            <div class = "col-3">
                <div class = "card">
                  <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${meals.strMeal}</h5>
                  </div>
                </div>
            </div>
            `
            })
        })

}

handleGetMeals()

searchMain.addEventListener('click',()=> {
    let value = searchInput.value
    console.log(value)

    fetch(`https://www.themealdb.com/api/json/v2/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            imgMeal.src=json.meals[0].strMealThumb
            meals.innerHTML=json.meals[0].strMeal
            instructions.innerHTML=json.meals[0].strInstructions
            category.innerHTML=json.meals[0].strCategory


        })

})