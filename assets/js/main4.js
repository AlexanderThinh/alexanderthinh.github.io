
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var productOption = $$('.product__option')
var productActives = $$('.product__desc0')
var line = $('.line')
var mobileMenuItems = $$('.mobile__nav-list')

productOption.forEach( (item, index) => {
   var productActive = productActives[index] 
   item.addEventListener('click', function() {
      $('.product__option.active').classList.remove('active')
      this.classList.add('active')
      
      $('.product__desc0.active').classList.remove('active')
      productActive.classList.add('active')

      line.style.left = this.offsetLeft + 'px'
      line.style.top = this.offsetTop + this.offsetHeight + 'px'
      line.style.width = this.offsetWidth + 'px'
   })
} )


mobileMenuItems.forEach(function(item, index) {
   item.onclick = function() {
      this.classList.toggle('active')
   }
})



