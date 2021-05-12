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


const date = new Date()
const year = date.getFullYear()
const elem = $('[data-id="current-date-year"]').append(year)


/*---------MODAL WINDOW TRACK-LIST-------*/

/*------Click like-------*/
const buttonsLike = $('button[data-item="like"]')
$('button[data-item="like"]').on('click', function(e){
    e.currentTarget.classList.toggle('liked')
})

/*--------- Authentication Functions--------*/
/*------ Toggle Buttons Forms-----*/
// const registerForm = document.getElementById('signUp-from');
// const registerFormArr = registerForm.querySelectorAll('form')
// const btnsArr = registerForm.querySelectorAll('button[data-button]');
//
// btnsArr.forEach(btn => btn.addEventListener('click', ToggleForms))
//
// function ToggleForms(e) {
//     const buttonClick = e.target;
//     btnsArr.forEach(btn => {
//         btn.classList.remove('active')
//     })
//     registerFormArr.forEach(form => form.classList.remove('d-block'))
//     buttonClick.classList.add('active')
//     const btnId = buttonClick.getAttribute('data-button')
//     const form = document.getElementById(btnId)
//     form.classList.add('d-block')
// }
//
//
// /*-----Show Password--------*/
//
// const btnsShowPass = document.querySelectorAll('.button__show_password');
// btnsShowPass.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         const btn = e.currentTarget;
//         const input = btn.parentElement.querySelector('input');
//         if (input.getAttribute('type') === 'password') {
//             input.setAttribute('type', 'text')
//         } else {
//             input.setAttribute('type', 'password')
//         }
//
//     })
// })
//
//
// /*------Open modal window Authentication-----*/
//
// const buttonsAuth = Array.from(document.getElementsByClassName('open__modalWindow_form'));
// const modalWindow = document.getElementById('modal-window-auth');
// const btnClose = Array.from(document.getElementsByClassName('btn__close'));
//
// buttonsAuth.forEach(item => {
//     item.addEventListener('click', (e) => {
//
//         e.preventDefault();
//         const typeForm = item.getAttribute('data-form');
//         modalWindow.classList.add('show');
//         const form1 = document.getElementById('signIn-from');
//         const form2 = document.getElementById('signUp-from');
//         const form3 = document.getElementById('forgot_pass_form');
//
//         if (typeForm === 'sign-in') {
//             form1.classList.add('show');
//             form3.classList.remove('show');
//             form2.classList.remove('show');
//         } else if (typeForm === 'sign-up') {
//             form2.classList.add('show');
//             form3.classList.remove('show');
//             form1.classList.remove('show');
//         } else if (typeForm === 'forgot_pass_form') {
//             form2.classList.remove('show');
//             form1.classList.remove('show');
//             form3.classList.add('show');
//         }
//
//     });
// });
//
// btnClose.forEach(item => item.addEventListener('click', closeModal))
//
//
// function closeModal() {
//     console.log('click')
//     modalWindow.classList.remove('show');
// }


/*------Sliders Carousel-------*/

$('.slider_button').slick({
    infinite: false,
    speed: 500,
    autoplay: false,
    variableWidth: true,
    slidesToShow: 2,
    nextArrow: '<button class="slider-btn-catalog next-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-right" viewBox="0 0 16 16">\n' +
        '    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n' +
        '</svg></button>',
    prevArrow: '<button class="slider-btn-catalog preview-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-left" viewBox="0 0 16 16">' +
        '<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>' +
        '</svg></button>',
    slidesToScroll: 1
});




 /*-----Create data options for select-----*/
        const selectDate = Array.from(document.querySelectorAll('select[data-id="pick_date_select"]'));
        const selectMonth = Array.from(document.querySelectorAll('select[data-id="pick_month_select"]'));
        const selectYear = Array.from(document.querySelectorAll('select[data-id="pick_year_select"]'));

        const arrDate = [];
        const arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь',
            'Ноябрь', 'Декабрь'
        ];
        const arrYear = [];

        for (let d = 1; d <= 31; d++) {
            arrDate.push(d);
        }
        for (let d = 2007; d >= 1956; d--) {
            arrYear.push(d);
        }

        selectDate.forEach(item => createOptions(arrDate, item));
        selectMonth.forEach(item => createOptions(arrMonth, item));
        selectYear.forEach(item => createOptions(arrYear, item));


        function createOptions(arr, elem) {
            const option = arr.map(item => {
                const optionItem = document.createElement('option');
                optionItem.setAttribute('value', item);
                optionItem.innerText = item;
                return optionItem;
            })
            option.forEach(opt => {
                elem.appendChild(opt)
            })
        }


/*------Show Password Button---------*/
function toggleShowPassword(e){
    const input = e.parentElement.querySelector('input')
    const show = input.getAttribute('type') === 'text'
    input.setAttribute('type', show?'password':'text')
}


/*-------Set Mask Input-----*/
function setMask(){
    const inputMask = Array.from(document.querySelectorAll('input[data-type="mask-number"]'))
    inputMask.forEach(item=>{
        const phoneMask = IMask(
            item, {
                mask: '+{7}(000)000-00-00',
                lazy: false
            });
        console.log(item)
    })
}

/*-------Select Country------*/
function selectCountryRender(){
    const countries = ['rus', 'uzb']
    const containers = Array.from($('div[data-id="select-country"] .dropdown_select'))
    $('div[data-type="selected"] img').attr('src', `./img/country_flags/${countries[0]}.png`)
    countries.forEach(item=>{
        const img = `./img/country_flags/${item}.png`
        containers.forEach(select=>{
            $(select).append(`<div onclick='selectCountry(this)'><img src=${img} alt="" /></div>`)
        })
    })
}

function selectCountry(e){
    const img = e.querySelector('img')
    const src = img?img.getAttribute('src'):''
    const selectDiv = $('div[data-type="selected"] img')
    $(selectDiv).attr('src', src)
    dropDown()
}

function dropDown(){
    $('.dropdown_select').toggleClass('d-none')
}

$(document).ready(()=>{
    setMask()
    selectCountryRender()
})
