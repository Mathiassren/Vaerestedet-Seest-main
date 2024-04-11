const omosBtn = document.getElementById("HeroBtn-omos");
const omosSection = document.getElementById("om-os");
omosBtn.addEventListener("click", () => {
  omosSection.scrollIntoView({ behavior: "smooth" });
});
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  var divs = document.querySelectorAll(".flex-bio, .reversed, .flex-bio div");
  divs.forEach(function (div) {
    if (isElementInViewport(div)) {
      div.classList.add("show");
    }
  });
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initially check if any divs are already in the viewport
handleScroll();
