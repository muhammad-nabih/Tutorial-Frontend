const count = document.querySelector(".count");
const progress = document.querySelector(".progress");
const input = document.querySelector("input");
const div = document.querySelector("div");
const maxLength = input.getAttribute("maxLength");

count.textContent = maxLength;

input.addEventListener("input", (e) => {
  const targetValue = e.target.value.length;

  const value = maxLength - targetValue;
  count.textContent = value;
  progress.style.width = `${(targetValue * 100) / maxLength}%`;
 
  count.textContent=="0" ? count.classList.add("zero"): count.classList.remove("zero");
});
