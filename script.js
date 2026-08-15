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



document.addEventListener("DOMContentLoaded", () => {
  const images1 = document.querySelector(".images1");
  const button1 = document.querySelector(".button1");
  const images2 = document.querySelector(".images2");
  const button2 = document.querySelector(".button2");
  const images3 = document.querySelector(".images3");
  const button3 = document.querySelector(".button3");
  const button4 = document.querySelector(".button4");
  const images4 = document.querySelector(".images4");
  const button5 = document.querySelector(".button5");
  const images5 = document.querySelector(".images5");

  const imagescycle1 = ["./keysproject/1.png", "./keysproject/2.png", "./keysproject/3.png", "./keysproject/4.png", "./keysproject/5.png"];
  let index1 = 0;

  const imagescycle2 = ["./movieappproject/1.png", "./movieappproject/2.png", "./movieappproject/3.png", "./movieappproject/4.png", "./movieappproject/5.png", "./movieappproject/6.png"];
  let index2 = 0;

  const imagescycle3 = ["./pokeappproject/1.png", "./pokeappproject/2.png", "./pokeappproject/3.png"];
  let index3 = 0;

  const imagescycle4 = ["./horrorGamepics/1.png", "./horrorGamepics/2.png", "./horrorGamepics/3.png"];
  let index4 = 0;

    const imagescycle5 = ["./trainSystempics/1.png", "./trainSystempics/2.png"];
  let index5 = 0;

  if (button1 && images1) {
    button1.addEventListener('click', () => {
      index1++;
      if (index1 >= imagescycle1.length) index1 = 0;
      images1.src = imagescycle1[index1];
    });
  }

  if (button2 && images2) {
    button2.addEventListener('click', () => {
      index2++;
      if (index2 >= imagescycle2.length) index2 = 0;
      images2.src = imagescycle2[index2];
    });
  }

  if (button3 && images3) {
    button3.addEventListener('click', () => {
      index3++;
      if (index3 >= imagescycle3.length) index3 = 0;
      images3.src = imagescycle3[index3];
    });
  }
  if (button4 && images4) {
    button4.addEventListener('click', () => {
      index4++;
      if (index4 >= imagescycle4.length) 
      index4 = 0;
      images4.src = imagescycle4[index4];
    })
}

if (button5 && images5) {
    button5.addEventListener('click', () => {
      index5++;
      if (index5 >= imagescycle5.length) 
      index5 = 0;
      images5.src = imagescycle5[index5];
    })
}
});

