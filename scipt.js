document.addEventListener("DOMContentLoaded", function () {
    const barsIcon = document.querySelector('.header-top i');
    const navMenu = document.querySelector('.header-top ul');

    barsIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}