let lists = document.querySelectorAll("li");
let divs = document.querySelectorAll("div");

// Convert Lists To Array
lists = Array.from(lists);

// Convert Divs To Array
divs = Array.from(divs);

// Loop On Lists
lists.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    //Remove Active Class from All Items And Add Active Class To Selected Item
    lists.forEach((ele) => {
      ele.classList.remove("active");
      e.target.classList.add("active");
    });

    //Hide All Elements
    divs.forEach((ele) => {
      ele.style.display = "none";
    });

    // Show Element Which Equal Tab Data
    const showElement = document.querySelector(`.${ele.dataset.tab}`);
    showElement.style.display = "block";
  });
});
