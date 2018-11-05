$(document).ready(function () {
   
    
    
    
    /* STICKY NAVIGATION */
    $('.js--section-features').waypoint(function (direction)    {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });
    
    
    /* SCROLL ON BUTTONS */
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000) 
    });
    
    
    /* NAVIGATION SMOOTH SCROLLING */
    
    $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });
    
    /** ANIMATIONS ON SCROLL **/
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /** MOBILE NAVIGATION **/
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        
    });
});

let foodItem = document.getElementById('foodItem')
let foodSubmitBtn = document.getElementById('foodSubmitBtn')
let recipeList = document.getElementById('recipeList')

const BASE_URL = "https://food2fork.com/api/search?key=" + API_KEY



function fetchTheInfo(method, url){
  fetch(url, {
    method: method
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
  
  let food = foodItem.value
  let queryURL = BASE_URL + "&q=" + food
  fetchTheInfo("GET", queryURL)
})

function displayAllReceipes(rec) {
  console.log(rec);
  let recipeItems = rec.recipes.map(function(recipe) {
    return `
    <div class="foodImg">
    <li>
        <div class="food-label">
        <label> ${recipe.title} </label>
        </br>
      <a href="${recipe.source_url}">
      <img id="recipe-pop" src="${recipe.image_url}" />
      </a>
        </br>  
    </div>
    </li>
    </div>
    `
  })
  recipeList.innerHTML = recipeItems.join('')
  console.log(recipeItems);
}


function startWithFoodData(foodData){
  console.log('Not Live ATM')
}


