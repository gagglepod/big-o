function fillBar(seconds) {
  const bar = document.querySelector(".bar");
  bar.style.transition = `${seconds}s linear width`;
  bar.style.width = "100%";
}
