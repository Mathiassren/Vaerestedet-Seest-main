const contactBtn = document.getElementById("HeroBtn-contact");
const contactSection = document.getElementById("map-background-color");
contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
