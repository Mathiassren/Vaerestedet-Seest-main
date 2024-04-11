const colorElements = document.querySelectorAll(".nav-links li");

colorElements.forEach((colorElement) => {
  colorElement.addEventListener("mouseover", () => {
    colorElement.style.height = "129px";
    colorElement.style.marginTop = "0";
  });

  colorElement.addEventListener("mouseout", () => {
    colorElement.style.height = "95px";
    colorElement.style.marginTop = "34px";
  });
});

/*H1 Animation*/
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml16 .letter",
  translateY: [-100, 0],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
});

// Hero button selection
let myButton = document.getElementById("HeroBtn");
myButton.addEventListener("click", function () {
  let section = document.getElementById("facilities");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
});
