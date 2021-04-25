# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshots

![](./screenshot-desktop.png)
![](./screenshot-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Interactive Pricing Component](https://interactive-pricing-component-steel.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid (very small application)
- Mobile-first workflow
- Vanilla JS

### What I learned

I didn't actually know there was a native html element for range sliders, so I ended up building the slider from scratch with JS. Definitely a valuable experience.

### Useful resources

- [Creating a pure lavascript range slider control](https://stackoverflow.com/questions/41068428/creating-a-pure-javascript-range-slider-control) - This stackoverflow solution gave me a great starting point for building my slider from scratch.
- [gav's blog: Find the closest number in an array JavaScript](https://www.gavsblog.com/blog/find-closest-number-in-array-javascript) - This article gave me a way to convert the range slider from a smooth/stepless slider into my desired number of increments and always have the slider button land on the closest value.
