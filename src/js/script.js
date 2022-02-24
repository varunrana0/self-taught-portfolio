// scrolling effect on navigation
// const navigation = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY > 200;
//   navigation.classList.toggle("active", scrollY);
// });

// SCROLL TO TOP BUTTON
const scrollToTop = document.querySelector(".scroll_top");
window.addEventListener("scroll", function () {
  scrollToTop.classList.toggle("active", window.scrollY > 500);
});

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// SHOW NAVIGATION BUTTON
const toggleButton = document.querySelector("[data-target]");
const navigatedUl = document.querySelector("#navigation");

toggleButton.addEventListener("click", function () {
  navigatedUl.classList.toggle("show");
});
