new WOW().init();

let omg = anime({
    targets: ".logo",
    direction: "alternate",
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
    keyframes: [
        {color: "#0f82eb"},
        {color: "#fc08e8"}
    ]
});

document.querySelector('.fa-vk').addEventListener("click", function () {
    document.location.href = "https://vk.com/iiimya";
})
document.querySelector('.fa-instagram').addEventListener("click", function () {
    document.location.href = "https://www.instagram.com/_i.r.b.1.s_/";
})

