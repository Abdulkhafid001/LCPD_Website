// navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // menuToggle.addEventListener("click", function () {
  //   navLinks.classList.toggle("active");
  // });

  // Adjust contact info display on resize
  function adjustContactInfo() {
    const contactInfo = document.querySelector(".contact-info");
    const contactSpans = contactInfo.querySelectorAll("span");

    if (window.innerWidth <= "576px") {
      // For mobile, make sure items stack
      contactInfo.style.flexDirection = "column";
      contactInfo.style.gap = "5px";
    } else if (window.innerWidth <= "768px") {
      // For tablet, try to keep items in row if possible
      contactInfo.style.flexDirection = "row";
      contactInfo.style.gap = "15px";
    } else {
      // For desktop, default layout
      contactInfo.style.flexDirection = "row";
      contactInfo.style.gap = "20px";
    }
  }

  window.addEventListener("resize", adjustContactInfo);
  adjustContactInfo(); // Initial call
});

// faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
