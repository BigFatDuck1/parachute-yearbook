

let scroll_position = 0;

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
        console.log(document.documentElement.scrollTop)
        //Store where user scrolled to in variable
        scroll_position = document.documentElement.scrollTop;
        document.querySelector("dialog").showModal();
        
    });

})

    //Adds closing function to modal
const closeModal = () => {

    let closeModal = () => {
        document.querySelector("dialog").close();
        //Scroll to where user was before modal opened
        document.documentElement.scrollTop = document.body.scrollTop = scroll_position;
    }

    document.querySelector("#close_button").addEventListener("click", function () {
       closeModal();
    });

    const dialog = document.querySelector("dialog");

    dialog.addEventListener("click", (event) => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
          event.clientX < dialogDimensions.left ||
          event.clientX > dialogDimensions.right ||
          event.clientY < dialogDimensions.top ||
          event.clientY > dialogDimensions.bottom
        ) {
          closeModal();
        }
    })
}
closeModal();