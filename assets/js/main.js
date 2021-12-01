
//Index
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var goTopBtn = $('#goToTop');
var mobileMenuItems = $$('.mobile__nav-list')
var placeItems = $$('.destinations__content-wrap')
var destinationItems = $$('.destinations__info-view')

goTopBtn.style.display = "none";

window.onscroll = function() {
   var scrollTop = window.scrollY || document.documentElement.scrollTop
   if( scrollTop >= 630 ) {
      goTopBtn.style.display = "block";
   } else {
      goTopBtn.style.display = "none";
   }

}

goTopBtn.onclick = function() {
   window.scrollTo({
      top: 0, 
      behavior: 'smooth'
   });
}

mobileMenuItems.forEach(function(item, index) {
   item.onclick = function() {
      this.classList.toggle('active')
   }
})

placeItems.forEach(function(item, index) {
   var destination = destinationItems[index]
   item.onclick = function() {
      destination.click()
   }
})

