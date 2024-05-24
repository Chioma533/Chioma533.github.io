// window.alert('hello');
//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let iconBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    iconBar.classList.toggle('active');
}


//scroll section
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop = 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                // active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
                // active sections for animation on scroll
                sec.classList.add('show-animate');
            }
            // if you want to make use of animation that repeats on scroll use this
            else {
                sec.classList.remove('show-animate');
            }
        });

    }

window.onscroll = () => {

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links {scroll}

    menuIcon.classList.remove('bx-x');
    iconBar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.querySelector('#read-more-btn');
    const moreText = document.querySelector('.more-text');
    const dots = document.querySelector('.dots');

    readMoreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none') {
          moreText.style.display = 'inline';
          dots.style.display = 'none';
          readMoreBtn.textContent = 'Read Less';
        } else {
          moreText.style.display = 'none';
          dots.style.display = 'inline';
          readMoreBtn.textContent = 'Read More';
        }
      });
})
