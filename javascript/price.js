// Price button selection
const priceBtn = document.getElementById("HeroBtn-price");
const priceSection = document.getElementById("price-h1");
priceBtn.addEventListener("click", () => {
  priceSection.scrollIntoView({ behavior: "smooth" });
});
