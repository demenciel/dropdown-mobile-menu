# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/Screen%20Shot%202022-07-31%20at%207.19.21%20PM.png.jpg)
![](./images/Screen%20Shot%202022-07-31%20at%207.19.34%20PM.png.jpg)




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

So with this project I have learned how to make a responsive hamburger menu and dropdown menus.
My plan was quite simple, I constructed the menus but simply hid them using display:none. And after using JS, using addEventListener function, I made the display none switch to a display:block or display:flex.

```css
  #dropdown1-list-mobile {
          display: none;
      }

      #dropdown2-list-mobile {
          display: none;
      }

      #arrow-up1-mobile {
          display: none;
      }
      
      #arrow-up2-mobile {
          display: none;
      }
```
```js
document.querySelector('#dropdown1-mobile').addEventListener('click', () => {
  if (dropDownMobile1.style.display === 'none') {
    dropDownMobile1.style.display = 'block';
  } else {
    dropDownMobile1.style.display = 'none'
  }

  // Change arrow up down
  if(arrowUp1Mobile.style.display === "none") {
    arrowDown1Mobile.style.display = "none";
    arrowUp1Mobile.style.display = "block"
  } else {
    arrowUp1Mobile.style.display = "none";
    arrowDown1Mobile.style.display = "block";
  }
})

```


### Continued development

So I had trouble with the javascript for the mobile version of my functions because I needed to change my original ID's to new ones for my mobile version.



## Author

- Website - [Alexandre Couture](alexcoutureportfolio.com)
- Frontend Mentor - [@demenciel](https://www.frontendmentor.io/profile/demenciel)

