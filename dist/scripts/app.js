document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("changeThemeButton").addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    });
});
