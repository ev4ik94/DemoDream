"use strict";
console.log("work watch1"), $(".slider").slick({
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeead: 5e3,
    slidesToScroll: 1,
    slidesToShow: 1
}), $(".slider-listener").slick({
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeead: 5e3,
    slidesToScroll: 1,
    slidesToShow: 1
}), $(".subscribe__slider").slick({
    arrows: !0,
    dots: !1,
    infinite: !1,
    slidesToShow: 14,
    slidesToScroll: 14
}), $(".donate-slider").slick({
    dots: !0,
    arrows: !1,
    infinite: !1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 5e3
}), $(".sides__slider--three").slick({
    dots: !0,
    arrows: !1,
    slidesToShow: 3,
    slidesToScroll: 3
}), $(".sides__slider-one").slick({
    dots: !0,
    arrows: !1,
    slidesToShow: 1,
    slidesToScroll: 1
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    for (tabcontent = document.getElementsByClassName("tabcontent"), i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";
    for (tablinks = document.getElementsByClassName("tablinks"), i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(cityName).style.display = "block", evt.currentTarget.className += " active"
}

function sortThing(event, thing) {
    var z, innerTabcontect, innerTabLinks;
    for (innerTabcontect = document.getElementsByClassName("inner-tabcontent"), z = 0; z < innerTabcontect.length; z++) innerTabcontect[z].style.display = "none";
    for (innerTabLinks = document.getElementsByClassName("inner-tablinks"), z = 0; z < innerTabLinks.length; z++) innerTabLinks[z].className = innerTabLinks[z].className.replace(" active", "");
    document.getElementById(thing).style.display = "block", event.currentTarget.className += " active"
}

function sortThingByDate(sevent, sthing) {
    var y, sInnerTabcontect, sInnerTabLinks;
    for (sInnerTabcontect = document.getElementsByClassName("sinner-tabcontent"), y = 0; y < sInnerTabcontect.length; y++) sInnerTabcontect[y].style.display = "none";
    for (sInnerTabLinks = document.getElementsByClassName("sinner-tablinks"), y = 0; y < sInnerTabLinks.length; y++) sInnerTabLinks[y].className = sInnerTabLinks[y].className.replace(" active", "");
    document.getElementById(sthing).style.display = "block", sevent.currentTarget.className += " active"
}
console.log("script work");
var closeMenuBtn = document.querySelector(".close"),
    openMenuBtn = document.querySelector(".main-nav__burger"),
    menu = document.querySelector(".menu-block");
closeMenuBtn.addEventListener("click", function (e) {
    e.preventDefault(), menu.style.display = "none", document.body.style.overflowY = "scroll"
}), openMenuBtn.addEventListener("click", function (e) {
    e.preventDefault(), menu.style.display = "flex", document.body.style.overflowY = "hidden"
});