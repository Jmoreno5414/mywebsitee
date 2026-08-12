function toggleMenu(){
    const menu = document.querySelector(".mobileMenu")
    const icon = document.querySelector("#hamburgerIcon")
    
    menu.classList.toggle("open");
    icon.classList.toggle("active")
}

const text = ">Aspiring Software Engineer.";
const text2 = ">Juan D. Moreno"
const text3 = ">Front-end Developer | Junior @Mercy University"
const element = document.querySelector(".miniHead")
const element2 = document.querySelector(".nameHead")
const element3 = document.querySelector(".fontendText")

const background = document.querySelector(".backImage")

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function typeText(textString, element, time) {
  for (let i = 0; i < textString.length; i++) {
    element.textContent += textString.charAt(i);
    await delay(time); 
  }
}

async function runSequence() {
    await typeText(text, element, 30);
    await delay(10)
    element.classList.add("typingDone");

    await typeText(text2, element2, 80);
    await delay(10)
    element2.classList.add("typingDone");

    await typeText(text3, element3, 40);
    element3.classList.add("typingDone");

    document.querySelector(".header").classList.add("animate");
}
  
runSequence();



