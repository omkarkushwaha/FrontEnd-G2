const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// Scroll Reveal (Sagar Mohanty) Day-3
window.addEventListener("scroll", function() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
});

// Modal elements
const modal = document.getElementById("siteModal");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".explore").forEach(button => {
  button.addEventListener("click", function() {
    let card = this.parentElement;

    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;
    modalImg.src = card.querySelector("img").src;

    modal.style.display = "flex"; 
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click outside close
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


