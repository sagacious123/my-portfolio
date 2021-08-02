const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");


navToggler.addEventListener("click", toggleNav())

window.addEventListener("scroll", function() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        header.classList.add("header-scroll");
        navItems.classList.add("navitems-scroll");
    } else {
        header.classList.remove("header-scroll");
        navItems.classList.remove("navitems-scroll");
    }
})


const navLink = document.querySelectorAll(".nav a");

// Loop through the buttons and add the active class to the current/clicked button
for (var d = 0; d < navLink.length; d++) {
    window.addEventListener('scroll', function() {
        const links = document.querySelectorAll('.nav-items a');
        const sections = document.querySelectorAll('.show-active');

        function changeLinkState() {
        let i = sections.length;

        while(--i && window.scrollY + 50 < sections[i].offsetTop && window.scrollY + 400 < sections[2].offsetTop) {}
        
        links.forEach((link) => link.classList.remove('active'));
        links[i].classList.add('active');
        }

        changeLinkState();
    })

    navLink[d].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
    
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
    
        this.className += " active";
        });
}


function toggleNav() {
    return function () {
        header.classList.toggle("responsive");
        this.classList.toggle("change");
    };
}


// TYPEWRITER EFFECT

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {

  // window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 3000);
// }


  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap::after { content: "|"; position: absolute; right: 0; animation: caret 1s infinite; animation-timing-function: steps(1, end); }";
  document.body.appendChild(css);
};