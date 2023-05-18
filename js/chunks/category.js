function category() {

  

   const storage = [
      {
         name: 'Puma Running',
         size: 'Dubble-XL',
         price: '200',
         category: 'male',
      },
      {
         name: 'Puma RS-X Bold',
         size: 'Dubble-XL',
         price: '200',
         category: 'male',
      },
      {
         name: 'Puma Sneakers',
         size: 'Dubble-XL',
         price: '180',
         category: 'female',
      },
      {
         name: 'Puma Ferrari',
         size: 'Dubble-XL',
         price: '190',
         category: 'kids',
      },
      {
         name: 'Puma RS-X Bold',
         size: 'Dubble-XL',
         price: '170',
         category: 'female',
      },
   ]

   function start(storage, src, init) {

      const main = document.querySelector(src)

      function temp(storage) {

         const { name, size, price, category } = storage

         const temp = `
         <article class="gallary-columns__item swiper-slide" data-category="${category}">
         <a class="gallary-columns__image" href="#"><img src="img/sections/gallary/${name}.webp" alt="#"> </a>
         <div class="gallary-columns__info">
            <h3 class="gallary-columns__title title-little">${name}</h3>
            <div class="gallary-columns__row">
               <div class="gallary-columns__property text">Size:</div>
               <div class="gallary-columns__value text">${size}</div>
            </div>
            <div class="gallary-columns__row">
               <div class="gallary-columns__property text">Price:</div>
               <div class="gallary-columns__value text">$${price}</div>
            </div>
            <button class="gallary-columns__button button" type="button">Buy now</button>
         </div>
      </article>
         `
         return temp

      }


      const paste = main.querySelector('[data-category-paste]')
      storage.forEach((elem) => {
         paste.insertAdjacentHTML('beforeend', temp(elem))
      })

      const swiper = init(src)


      main.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-category-button]')) {

            const button = main.querySelectorAll('[data-category-button]')
            button.forEach((elem) => {
               elem.classList.remove('_active')
            })
            eventTarget.classList.add('_active')


            // убираем все
            main.querySelectorAll('[data-category]').forEach((elem) => {
               elem.remove()
            })

            const att = eventTarget.getAttribute('data-category-button')

            storage.forEach((elem) => {
               const category = elem.category
               if (category === att) {
                  console.log(elem);
                  paste.insertAdjacentHTML('afterbegin', temp(elem))
               }
               if (att === 'all') {
                  paste.insertAdjacentHTML('afterbegin', temp(elem))
               }

            })
            swiper.update()

         }

      })


   }

   // (i) cfg
   start(storage, '[data-main]', (src) => {

      // const src = '[data-main]'
      const swiper = new Swiper(`${src} .swiper`, {
         slidesPerView: 4,
         spaceBetween: 30,
         // grabCursor: true,
         allowTouchMove: false, 
         speed: 1200,
         autoHeight: true,
         autoplay: {
            delay: 3500,
         },

         navigation: {
            nextEl: `${src} .swiper-button-next`,
            prevEl: `${src} .swiper-button-prev`
         },
         breakpoints: {

            320: {
               slidesPerView: 1,
            },
            425: {
               slidesPerView: 2,
            },
            552: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 4,
            }
         }
      })

      return swiper

   })







}
export { category }