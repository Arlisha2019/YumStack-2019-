let foodItem = document.getElementById('foodItem')
let foodSubmitBtn = document.getElementById('foodSubmitBtn')
let recipeList = document.getElementById('recipeList')

const BASE_URL = "https://www.food2fork.com/api/search?" + API_KEY

// var isLive = false
//
//
// if(isLive === true) {
//  //put api call logic
//
//  //this function gets called when data comes back from api
//  //startWithFoodData(DATA_FROM_API)
// } else {
//
//   startWithFoodData(FOOD_DATA)
//
// }

foodSubmitBtn.addEventListener('click', function() {

  let food = foodItem.value
  let queryURL = BASE_URL + "&q=" + food

  $.get(queryURL, function(res) {
    console.log(res);
  })
})

function displayAllReceipes(rec) {
  console.log('displayAllReceipes');
  let recipeItems = rec.map(function(recipe) {
    return `
    <li>
      <label> ${recipe.title} </label>
    </li>
    `
  })
  recipeList.innerHTML = recipeItems.join('')
  console.log(recipeItems);
}


function startWithFoodData(foodData){
  console.log('Not Live ATM')
}

$("#foodSubmitBtn").click(function() {
  console.log("hello World");
})
