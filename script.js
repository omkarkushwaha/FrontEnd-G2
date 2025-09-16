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

// -----------------Day 5 -----------------------

document.querySelector(".contact-form").addEventListener("submit", function(e){
  const email = document.getElementById("the-email");
  const phone = document.getElementById("the-phone");
  let isValid = true;

  if (!email.value.includes("@")) {
    alert("Please enter a valid email.");
    isValid = false;
  }

  if (phone.value.trim().length < 10) {
    alert("Phone number must be at least 10 digits.");
    isValid = false;
  }

  if (!isValid) e.preventDefault();   
});

const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default submit so we can show message
    const feedback = document.createElement("p");
    feedback.textContent = "✅ Thanks! We’ll get back soon.";
    feedback.style.color = "green";
    feedback.style.marginTop = "1rem";
    form.appendChild(feedback);
    form.reset();
  });


const emailInput = document.getElementById("the-email");
emailInput.addEventListener("input", () => {
  if(emailInput.validity.valid){
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  }
});

 form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    
      alert("✅ Thanks! Your message has been recorded.");
    form.reset();
  });

const contactLink = document.querySelector("a[href='#contactForm']");
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById("contactForm")
        .scrollIntoView({ behavior: "smooth" });
    });
  }






