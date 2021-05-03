// sliders settings


$(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeead: 5000,
    slidesToScroll: 1,
    slidesToShow: 1
});

$(".slider-listener").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeead: 5000,
    slidesToScroll: 1,
    slidesToShow: 1
});

$(".subscribe__slider").slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 14,
    slidesToScroll: 14,
});

$(".donate-slider").slick({
    dots:true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 5000
});

$(".sides__slider--three").slick({
    dots:true,
    arrows: false,
    appendDots: $('.sides__item[data-index="1"] .sides__dots'),
    slidesToShow: 3,
    slidesToScroll: 3
});

$(".sides__slider-two").slick({
    dots:true,
    arrows: false,
    appendDots: $('.sides__item[data-index="2"] .sides__dots_vertical'),
    slidesToShow: 1,
    vertical: true,
    slidesToScroll: 1
});

$(".sides__slider-one").slick({
    dots:true,
    arrows: false,
    appendDots: $('.sides__item[data-index="3"] .sides__dots'),
    slidesToShow: 1,
    slidesToScroll: 1
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function sortThing(event, thing) {
    var z, innerTabcontect, innerTabLinks;
    
    // Get all elements with class="tabcontent" and hide them
  innerTabcontect = document.getElementsByClassName("inner-tabcontent");
  for (z = 0; z < innerTabcontect.length; z++) {
    innerTabcontect[z].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  innerTabLinks = document.getElementsByClassName("inner-tablinks");
  for (z = 0; z < innerTabLinks.length; z++) {
    innerTabLinks[z].className = innerTabLinks[z].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(thing).style.display = "block";
  event.currentTarget.className += " active";
        
  }

function sortThingByDate(sevent, sthing) {
    var y, sInnerTabcontect, sInnerTabLinks;
    
    // Get all elements with class="tabcontent" and hide them
  sInnerTabcontect = document.getElementsByClassName("sinner-tabcontent");
  for (y = 0; y < sInnerTabcontect.length; y++) {
    sInnerTabcontect[y].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  sInnerTabLinks = document.getElementsByClassName("sinner-tablinks");
  for (y = 0; y < sInnerTabLinks.length; y++) {
    sInnerTabLinks[y].className = sInnerTabLinks[y].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sthing).style.display = "block";
  sevent.currentTarget.className += " active";
        
  }

// menu 
console.log('script work')
const closeMenuBtn = document.querySelector(".close"),
      openMenuBtn = document.querySelector(".main-nav__burger"),
      menu = document.querySelector(".menu-block");

closeMenuBtn.addEventListener("click", function(e) {
    e.preventDefault();
    menu.style.display = "none";
    document.body.style.overflowY = "scroll";
});

openMenuBtn.addEventListener("click", function(e) {
   e.preventDefault();
   menu.style.display = "flex";
   document.body.style.overflowY = "hidden";
});




