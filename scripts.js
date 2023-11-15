

let scroll_position = 0;

//Parallax
window.addEventListener("scroll", function setParallax() {

    //Add zoomout animation to year
    document.querySelector(".year").classList.add("year_zoomout");

    //Block scrolling if modal is open
    //This actually overlaps with the solution of storing the scroll_position so after closing the modal the user is scrolled to the same position
    //Now the modal is locked into place and the user can't scroll
    if (document.querySelector("dialog").open) {
        document.documentElement.scrollTop = document.body.scrollTop = scroll_position;
    }

    //Add parallax to clouds
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

    //Play balloon animation
    document.querySelectorAll(".balloon").forEach((element) => {
        element.classList.add("balloon_animation");
    })

    //Animation when the user reaches bottom
    //And the parachute "pops"
        //scrollTop is the difference between top of content and top of container
        //i.e. the gap between what cannot be seen and the height of the viewport
    let scroll_top = Math.floor(document.documentElement.scrollTop);
    //Viewport height
    let viewport_height = document.querySelector("html").clientHeight;
    //Content height
    let content_height = document.querySelector("body").scrollHeight;
    //Distance of scrolling from top to bottom of content
    let max_scrollTop = content_height - viewport_height;
    
    // Reached bottom
    if (scroll_top >= max_scrollTop - 5) {
        document.querySelector("#parachute").classList.remove("swaying");
        document.querySelector("#parachute").src = "assets/png/bear.png";
        document.querySelector(".parachute").classList.add("fall");
    }

    //Scrolling back upwards
    if (scroll_top < max_scrollTop - 10) {
        document.querySelector("#parachute").classList.add("swaying");
        document.querySelector("#parachute").src = "assets/png/parachute.png";
        document.querySelector(".parachute").classList.remove("fall");
        document.querySelector(".cat").classList.remove("hide_cat");
    }


})

//Bear falling animation finished
document.querySelector(".parachute").addEventListener("transitionend", () => { //Remember there are two transitionend events - down and up
    //Only triger this if reached bottom
    let scroll_top = Math.floor(document.documentElement.scrollTop);
    //Viewport height
    let viewport_height = document.querySelector("html").clientHeight;
    //Content height
    let content_height = document.querySelector("body").scrollHeight;
    //Distance of scrolling from top to bottom of content
    let max_scrollTop = content_height - viewport_height;
    if (scroll_top >= max_scrollTop - 5) {
        document.querySelector("#parachute").src = "assets/png/ending.png";
        document.querySelector(".cat").classList.add("hide_cat");
    }
});

//Stop animation when it has floated once
document.querySelectorAll(".balloon").forEach((element) => {
    element.addEventListener("animationend", () => {
        element.classList.remove("balloon_animation");
    })
})

//Balloon and Modal
    // Modal functions
const all_balloons = document.querySelectorAll(".balloon");

    //Open modal when the balloon is clicked
all_balloons.forEach((element) => {
    element.addEventListener("click", () => {
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

// Custom position for each balloon
function customBalloonPosition() {
    const all_balloons = document.querySelectorAll(".balloon");

    all_balloons.forEach((element) => {
        let random_padding = Math.floor((Math.random() * 50) + 20)
        element.style.paddingLeft = `${random_padding}vw`;
    })
}
customBalloonPosition();