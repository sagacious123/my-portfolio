const navBar = document.querySelector(".navbar");
const navToggler = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const navItems = document.querySelector(".nav-items");

window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display")
    }, 300);
}

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

