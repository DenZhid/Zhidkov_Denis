document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    })
});