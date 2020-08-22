new WOW().init();

let omg = anime({
    targets: ".logo",
    direction: "alternate",
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
    keyframes: [{
        color: "#0f82eb"
    }, {
        color: "#fc08e8"
    }]
});

$('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $(".hed_nav").toggleClass('hed_nav_active');
});

document.querySelector('.fa-vk').addEventListener("click", function () {
    document.location.href = "https://vk.com/iiimya";
})
document.querySelector('.fa-instagram').addEventListener("click", function () {
    document.location.href = "https://www.instagram.com/_i.r.b.1.s_/";
})

window.onscroll = function showheader() {
    var header = document.querySelector(".header")
    if (window.pageYOffset > 200) {
        header.classList.add("header_fixed");
    } else {
        header.classList.remove("header_fixed");
    }
}
//слайдер
const
    next = document.querySelector(".next"),
    prev = document.querySelector(".prev"),
    slides = document.querySelectorAll(".slide"),
    dots = document.querySelectorAll(".dot");

let index = 0;

const actvslide = n => {
    for (slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}

const actvdot = n => {
    for (dot of dots) {
        dot.classList.remove("activ");
    }
    dots[n].classList.add("activ");
}
const nextslide = () => {
    if (index == slides.length - 1) {
        index = 0
        actvslide(index);
        actvdot(index);
    } else {
        index++;
        actvslide(index);
        actvdot(index);
    }
}
const prevslide = () => {
    if (index == 0) {
        index = slides.length - 1;
        actvslide(index);
        actvdot(index);
    } else {
        index--;
        actvslide(index);
        actvdot(index);
    }
}
dots.forEach((iteam, indexDot) => {
    iteam.addEventListener("click", () => {
        index = indexDot;
        actvslide(index);
        actvdot(index);
    })
})

next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);

const intr = setInterval(nextslide, 4500);

//слайдер товаров
const 
    str_left = document.querySelector(".left_str"),
    str_right = document.querySelector(".right_str"),
    tovar_odin = document.querySelector(".tovar_odin"),
    tovar_dva = document.querySelector(".tovar_dva");

str_right.addEventListener("click", function(){
    tovar_dva.style.display = "inline"
    tovar_odin.style.display = "none"
})
str_left.addEventListener("click", function () {
    tovar_dva.style.display = "none"
    tovar_odin.style.display = "inline"
})