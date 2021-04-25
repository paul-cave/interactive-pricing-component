"use strict";

const positions = [0, 0.25, 0.5, 0.75, 1];

const slider = document.querySelector(".slider");
const sliderButton = document.querySelector(".slider-button");
// slider coordinates
let sliderWidth = slider.offsetWidth;
let sliderLeft = slider.offsetLeft;
let active = false;
let buttonOffset = 0;
let buttonPosition;

const closestPosition = function (position) {
  let closest = positions
    .map((pos) => pos * sliderWidth)
    .reduce((a, b) => {
      return Math.abs(b - position) < Math.abs(a - position) ? b : a;
    });
  if (closest < 20) closest = 20;
  if (closest > sliderWidth - 20) closest = sliderWidth - 20;
  return closest;
};

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

sliderButton.addEventListener("mousedown", function (e) {
  e.preventDefault();
  buttonOffset = e.clientX - sliderLeft - sliderButton.offsetLeft - 20;
  active = true;
});

window.addEventListener("mouseup", function (e) {
  active = false;
  buttonPosition = sliderButton.offsetLeft + 20;
  console.log(buttonPosition);
});

window.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!active) return;
  let offset = e.clientX - sliderLeft - buttonOffset;
  sliderButton.style.left = `${closestPosition(offset)}px`;
});

sliderResizeObserver.observe(slider);
