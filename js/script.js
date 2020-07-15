new WOW().init();

let omg = anime({
    targets: ".logo",
    direction: "alternate",
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
    keyframes: [{
            color: "#0f82eb"
        },
        {
            color: "#fc08e8"
        }
    ]
});

$('.menu-btn').on('click', function(e) {
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

const intr= setInterval(nextslide,4500);