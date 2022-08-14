let elSiteForm = document.querySelector(".site-form");
let elSiteInput = document.querySelector(".site-input");
let elSiteRain = document.querySelector(".rain-check");
let elSiteHall = document.querySelector(".hall-check");
let elSiteText = document.querySelector(".text");

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elSiteInput.value;
  let coldTem = 10;
  let hotTem = 35;

  if (elSiteHall.checked) {
    return (elSiteText.textContent =
      "Sport zal ochiq, borib mashq qilsangiz bo'ladi.");
  }
  if (elSiteRain.checked) {
    return (elSiteText.textContent =
      "Yomg'irda yugurmang! Shamollab qolishingiz mumkin.");
  }

  if (inputValue < coldTem || inputValue > hotTem) {
    elSiteText.textContent = "Yugurishga bugun chiqishni maslahat bermiyman.";
  } else {
    elSiteText.textContent = "Havo juda ajoyib! Yugurishga chiqsangiz bo'ladi.";
  }
});
