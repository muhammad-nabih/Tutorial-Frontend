const serialArea = document.querySelector(".serial");
const generateBtn = document.querySelector("span.generate");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const serialCharacterCount = 10;

// First Way To Generate Serial Number
generateBtn.addEventListener("click", () => {
  let serial = Array.from({ length: serialCharacterCount }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
  serialArea.textContent = serial;
});


// Another Way To Generate Serial Number
// generateBtn.addEventListener("click", () => {
//   let serial = "";
//   for (let i = 0; i < serialCharacterCount; i++) {
//     const randomNumber = Math.floor(Math.random() * characters.length);
//     serial += characters.charAt(randomNumber);
//   }

//   serialArea.textContent = serial;
// });
