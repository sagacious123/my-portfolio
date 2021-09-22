window.addEventListener("scroll", function() {
  
  if (document.body.scrollTop >= 260 || document.documentElement.scrollTop >= 260 ) {
      header.classList.add("header-scroll");
      header.style.zIndex = 9999999999;
      navItems.classList.add("navitems-scroll");
  } else {
      header.classList.remove("header-scroll");
      header.style.zIndex = 99;
      navItems.classList.remove("navitems-scroll");
  }
})