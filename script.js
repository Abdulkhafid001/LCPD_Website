// navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

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

function handleCategoryClick(categoryName) {
  // You can customize what happens when a category is clicked
  console.log(`Category clicked: ${categoryName}`);
  alert(`You selected the ${categoryName} category!`);

  // In a real application, you might:
  // 1. Redirect to a category page
  // 2. Filter courses by category
  // 3. Show more details about the category
  // window.location.href = `/categories/${categoryName.toLowerCase().replace(' ', '-')}`;
}

// Alternative: Add event listeners for better separation of concerns
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".category-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const categoryName = this.querySelector(".category-title").textContent;
      handleCategoryClick(categoryName);
    });
  });
});
