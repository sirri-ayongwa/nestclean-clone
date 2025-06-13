
  const modal = document.getElementById("industryModal");
  const bookButtons = document.querySelectorAll(".book-btn, .btn-hero, .footer-btn, .book-button, .cta-btn");
  const closeBtn = document.querySelector(".modal .close");
//   btn-hero book

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

  
  // const carousel = document.getElementById("carousel");
  // const reviewCards = document.querySelectorAll("#carousel .review-card");

  // let currentIndex = 0;
  // let hoverTimer;

  // function showCard(index) {
  //   carousel.style.transform = `translateX(-${index * 100}%)`;
  // }

  // function startCarousel() {
  //   hoverTimer = setInterval(() => {
  //     currentIndex = (currentIndex + 1) % reviewCards.length;
  //     showCard(currentIndex);
  //   }, 5000);
  // }

  // function stopCarousel() {
  //   clearInterval(hoverTimer);
  // }

  // carousel.addEventListener("mouseenter", startCarousel);
  // carousel.addEventListener("mouseleave", stopCarousel);