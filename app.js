let foodItem = document.getElementById('foodItem')
let foodSubmitBtn = document.getElementById('foodSubmitBtn')
let recipeList = document.getElementById('recipeList')

const BASE_URL = "https://food2fork.com/api/search?key=" + API_KEY



function fetchTheInfo(method, url){
  fetch(url, {
    method: method,
  }).then(res=>res.json())
  .then(response => displayAllReceipes(response))
  .catch(error => console.error('Error: ', error));
}





function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();


  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    xhr = null;

  }
}

foodSubmitBtn.addEventListener('click', function() {
  console.log("in the button")
  let food = foodItem.value
  let queryURL = BASE_URL + "&q=" + food
  fetchTheInfo("GET", queryURL)
})

function displayAllReceipes(rec) {
  console.log(rec);
  let recipeItems = rec.recipes.map(function(recipe) {
    return `
    <li>
      <img src="${recipe.image_url}" />
      <label> ${recipe.title} </label>
      <a herf=""${recipe.source_url}"></a>
    </li>
    `
  })
  recipeList.innerHTML = recipeItems.join('')
  console.log(recipeItems);
}


function startWithFoodData(foodData){
  console.log('Not Live ATM')
}
