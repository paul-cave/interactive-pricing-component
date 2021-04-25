"use strict";

// options arrays
const positions = [0, 0.25, 0.5, 0.75, 1];
const prices = [8, 12, 16, 24, 36];
const pageviews = ["10K", "50K", "100K", "500K", "1M"];

// DOM ELEMENTS
const slider = document.querySelector(".slider");
const sliderButton = document.querySelector(".slider-button");
const sliderLineFull = document.querySelector(".slider-line-full");
const pageviewDisplay = document.querySelector(".pageviews");
const priceDisplay = document.querySelector(".price-number");
const billingToggle = document.querySelector(".billing-toggle");
const billingToggleCircle = document.querySelector(".billing-toggle-circle");

let yearlyBilling = false;

// SLIDER VARIABLES
let sliderWidth = slider.offsetWidth;
let sliderLeft = slider.offsetLeft;
let dragging = false;
let buttonOffset = 0; //so button does not jump when mouse is not centered
let buttonPosition;
let closestIndex;

const changeDisplayValues = function () {
  pageviewDisplay.textContent = `${pageviews[closestIndex]} PAGEVIEWS`;
  priceDisplay.textContent = `$${
    yearlyBilling
      ? String((prices[closestIndex] * 0.75).toFixed(2))
      : String(prices[closestIndex].toFixed(2))
  }`;
  sliderLineFull.style.width = `${positions[closestIndex] * 100}%`;
};

// FIND CLOSEST INCREMENT TO BUTTON POSITION
const closestPosition = function (position) {
  const positionsPixels = positions.map((pos) => pos * sliderWidth);
  let closest = positionsPixels.reduce((a, b) => {
    return Math.abs(b - position) < Math.abs(a - position) ? b : a;
  });
  closestIndex = positionsPixels.findIndex((el) => el === closest);
  if (closest < 20) closest = 20;
  if (closest > sliderWidth - 20) closest = sliderWidth - 20;
  changeDisplayValues();
  return closest;
};

// UPDATE BUTTON POSTION WITH MEDIA QUERY (SLIDER LENGTH)
const sliderResizeObserver = new ResizeObserver((entries) =>
  entries.forEach((entry) => {
    if (buttonPosition === undefined) return;
    const sliderWidthPrev = sliderWidth;
    sliderWidth = entry.target.offsetWidth;
    sliderLeft = entry.target.offsetLeft;
    // position button at same relative position as before
    sliderButton.style.left = `${closestPosition(
      buttonPosition * (sliderWidth / sliderWidthPrev) + 20
    )}px`;
    buttonPosition = sliderButton.offsetLeft;
  })
);

// SLIDER EVENT LISTENERS
sliderButton.addEventListener("mousedown", function (e) {
  e.preventDefault();
  buttonOffset = e.clientX - sliderLeft - sliderButton.offsetLeft - 20;
  dragging = true;
});
window.addEventListener("mouseup", function (e) {
  dragging = false;
  buttonPosition = sliderButton.offsetLeft + 20;
});
window.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!dragging) return;
  let offset = e.clientX - sliderLeft - buttonOffset;
  sliderButton.style.left = `${closestPosition(offset)}px`;
});
sliderResizeObserver.observe(slider);

// TOGGLE YEARLY BILLING
billingToggle.addEventListener("click", function () {
  billingToggle.classList.toggle("billing-toggle-active");
  yearlyBilling = billingToggle.classList.contains("billing-toggle-active")
    ? true
    : false;
  changeDisplayValues();
});
