
// Modal functions
document.addEventListener("keydown", function (event) {
    if (event.key == "a") {
        document.querySelector("dialog").showModal();
    }
});

const closeModal = () => {
    document.querySelector("#close_button").addEventListener("click", function () {
        document.querySelector("dialog").close();
    })
}
closeModal();