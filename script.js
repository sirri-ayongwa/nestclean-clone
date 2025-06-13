
  const modal = document.getElementById("industryModal");
  const bookButtons = document.querySelectorAll(".book-btn, .btn-hero, .footer-btn, .book-button, .cta-btn");
  const closeBtn = document.querySelector(".modal .close");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
