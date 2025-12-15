// Typing effect
const text = "Student • IIT Aspirant • JEE Focused";
let index = 0;
const speed = 70;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();
