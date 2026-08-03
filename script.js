function toggleMenu(){
    const menu = document.querySelector(".mobileMenu")
    const icon = document.querySelector("#hamburgerIcon")
    
    menu.classList.toggle("open");
    icon.classList.toggle("active")
}