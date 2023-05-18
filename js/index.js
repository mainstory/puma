import {
   burgerMenu,
} from "./chunks/burgerMenu.js"
import {
   popup,
} from "./chunks/popup.js"
import {
   swiper,
} from "./chunks/swiper.js"
import {
   spoilers,
} from "./chunks/spoilers.js"
import {
   headerAnimation,
} from "./chunks/headerAnimation.js"
import {
   category,
} from "./chunks/category.js"
import {
   footerAccordions,
} from "./chunks/footerAccordions.js"
import {
   anchors,
} from "./chunks/anchors.js"



burgerMenu()
popup()
swiper()
spoilers()
headerAnimation()
category()
footerAccordions()
anchors()




const preloader = document.querySelector('[data-preloader]')
setTimeout(() => {

   preloader.classList.add('_close')

   document.querySelector('body').style.paddingRight = `0px`
   document.querySelector('body').style.overflowY = `auto`

   // функции
   // функции
   new WOW(
      {
         mobile: false,
      }
   ).init();

}, 1000)



