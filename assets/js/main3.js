
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var searchInput = $('.search__content-input')
var searchContentDetail = $('.search__content-input-details')
var searchContentItems = $$('.search__content-input-item')
var productItems = $$('.product__place')
var mobileMenuItems = $$('.mobile__nav-list')

searchInput.onclick = function() {
   if(searchInput.value != ""){
      searchInput.value = ""
   }
   searchContentDetail.classList.toggle('active')
}


function search() {
   var inputValue = searchInput.value
   if(inputValue != "") {
      productItems.forEach(function(item, index) {
         var itemAncestor = item.closest('.product')
         if(item.textContent.includes(inputValue)) {
            itemAncestor.scrollIntoView([{
               behavior: 'smooth',
               block: 'nearest'
            }])
            setTimeout(function() {
               itemAncestor.style.outline = '4px solid red'
            }, 800)
            setTimeout(function() {
               itemAncestor.style.outline = 'none'
            }, 1600)
         }
      })
   }
}

searchContentItems.forEach(function(item, index) {
   item.onclick = function(e) {
      searchInput.value = e.target.textContent
      searchContentDetail.classList.remove('active')
      search()
   }
})

mobileMenuItems.forEach(function(item, index) {
   item.onclick = function() {
      this.classList.toggle('active')
   }
})
