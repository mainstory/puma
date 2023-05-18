function spoilers() {

   // data-spoiler
   // data-spoiler-button
   // data-spoiler-content
   // data-spoiler-name
   // data-spoiler-item


   function off() {

      // убрать все активные
      const elems = document.querySelectorAll('[data-spoiler]._active')
      elems.forEach((elem) => {
         if (elem.classList.contains('_active')) {
            elem.classList.remove('_active')
         }
      })

   }

   // обработчик
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-spoiler-button]')) {

         const spoiler = eventTarget.closest('[data-spoiler]')
         if (spoiler.classList.contains('_active')) {
            // если нажать на активный

            // убрать все активные
            off()


         } else {
            // если нажали на не активный

            // убрать все активные
            off()
            // сделать таргет активным
            spoiler.classList.add('_active')

         }
      }

      if (eventTarget.closest('[data-spoiler-item]')) {

         eventTarget.closest('[data-spoiler]').querySelector('[data-spoiler-name]').innerText = eventTarget.innerText

         // убрать все активные
         off()
      }

      if (!eventTarget.closest('[data-spoiler-button]') && !eventTarget.closest('[data-spoiler-content]')) {
         // убрать все активные
         off()
      }

   })


}
export { spoilers }

