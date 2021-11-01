document.addEventListener("DOMContentLoader", changeTheme);
function changeTheme() {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
    }
}