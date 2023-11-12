
//Parallax
window.addEventListener("scroll", function setParallax() {

    //Add zoomout animation to year
    document.querySelector(".year").classList.add("year_zoomout");

    const translucent_clouds = document.querySelectorAll(".translucent");
    const opaque_clouds = document.querySelectorAll(".opaque");

    translucent_clouds.forEach((element) => {
        let speed = -1.5;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    })

    opaque_clouds.forEach((element) => {
        let speed = -1;
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    })

})

//Balloon and Modal
    // Modal functions
const all_balloons = document.querySelectorAll(".balloon");

    //Open modal when the balloon is clicked
all_balloons.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelector("dialog").showModal();
    });
})

    //Call this whenever a modal is created, otherwise the close button won't work
const closeModal = () => {
    document.querySelector("#close_button").addEventListener("click", function () {
        document.querySelector("dialog").close();
    });

    dialog.addEventListener("click", (event) => {
        const dialogDimensions = document.querySelector("dialog").getBoundingClientRect()
        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          dialog.close();
        }
    })
}
closeModal();