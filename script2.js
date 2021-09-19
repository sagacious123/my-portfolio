// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})

const portfolio = document.querySelector('.portfolio-section')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= portfolio.offsetTop + portfolio.offsetHeight - 1000 && window.innerWidth >= 900) {

        portfolio.classList.add('change');

    } else if (window.pageYOffset + window.innerHeight >= portfolio.offsetTop + portfolio.offsetHeight - 1900 && window.innerWidth < 900) {

        portfolio.classList.add('change');

    } else {
        portfolio.classList.remove('change');
    }
})

const portfolio2 = document.querySelector('.portfolio')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= portfolio2.offsetTop + portfolio2.offsetHeight - 1000 && window.innerWidth >= 900) {

        portfolio2.classList.add('change');

    } else if (window.pageYOffset + window.innerHeight >= portfolio2.offsetTop + portfolio2.offsetHeight - 1900 && window.innerWidth < 900) {

        portfolio2.classList.add('change');

    } else {
        portfolio2.classList.remove('change');
    }
})

