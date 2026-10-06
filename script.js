document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation nav");

  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("is-open");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
    });
  });

  const impactDetails = document.querySelectorAll("#impact .card details");
  const tabletView = window.matchMedia("(min-width: 768px)");

  function updateImpactCards() {
    impactDetails.forEach((details) => {
      details.open = tabletView.matches;
    });
  }

  updateImpactCards();

  tabletView.addEventListener("change", updateImpactCards);
});