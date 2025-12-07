// Modal open/close
const modal = document.getElementById("authModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Open modal
if (openModalBtn && modal) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent link default
    modal.style.display = "block";
  });
}

// Close modal
if (closeModalBtn && modal) {
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Tabs
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active from all
    tabLinks.forEach((l) => l.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Add active to clicked tab
    link.classList.add("active");
    const targetTab = document.getElementById(link.dataset.tab);
    if (targetTab) {
      targetTab.classList.add("active");
    }
  });
});