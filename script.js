let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const myDiv = document.getElementById('nav');
    let scrollTop = window.scrollY;
    
    // Scroll down
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        myDiv.classList.add('nav');
    }
    // Scroll up (to the top or near the top)
    else if (scrollTop < lastScrollTop && scrollTop <= 100) {
        myDiv.classList.remove('nav');
    }

    lastScrollTop = scrollTop; // Update last scroll position
});
let lastScrollTop2 = 0;

window.addEventListener('scroll', function() {
    const myDiv2 = document.getElementById('ll2');
    let scrollTop2 = window.scrollY;
    
    // Scroll down
    if (scrollTop2 > lastScrollTop2 && scrollTop2 > 200) {
        myDiv2.style.visibility = 'visible'; // Make it visible
        myDiv2.style.opacity = 1; // Fade in effect
        myDiv2.classList.add('ll2'); // Add animation class
    }
    // Scroll up (to the top or near the top)
    else if (scrollTop2 < lastScrollTop2 && scrollTop2 <= 200) {
        myDiv2.style.opacity = 0; // Fade out effect
        myDiv2.style.visibility = 'hidden'; // Hide after fade out
        myDiv2.classList.remove('ll2'); // Remove animation class
    }

    lastScrollTop2 = scrollTop2; // Update last scroll position
});

let lastScrollTop3 = 0;
window.addEventListener('scroll', function() {
    const myDiv3 = document.getElementById('ll3');
    let scrollTop3 = window.scrollY;
    
    // Scroll down
    if (scrollTop3 > lastScrollTop3 && scrollTop3 > 500) {
        myDiv3.style.visibility = 'visible'; // Make it visible
        myDiv3.style.opacity = 1; // Fade in effect
        myDiv3.classList.add('ll3'); // Add animation class
    }
    // Scroll up (to the top or near the top)
    else if (scrollTop3 < lastScrollTop3 && scrollTop3 <= 500) {
        myDiv3.style.opacity = 0; // Fade out effect
        myDiv3.style.visibility = 'hidden'; // Hide after fade out
        myDiv3.classList.remove('ll3'); // Remove animation class
    }

    lastScrollTop3 = scrollTop3; // Update last scroll position
});

let lastScrollTop4 = 0;
window.addEventListener('scroll', function() {
    const myDiv4 = document.getElementById('ll4');
    let scrollTop4 = window.scrollY;
    
    // Scroll down
    if (scrollTop4 > lastScrollTop4 && scrollTop4 > 700) {
        myDiv4.style.visibility = 'visible'; // Make it visible
        myDiv4.style.opacity = 1; // Fade in effect
        myDiv4.classList.add('ll4'); // Add animation class
    }
    // Scroll up (to the top or near the top)
    else if (scrollTop4 < lastScrollTop4 && scrollTop4 <= 700) {
        myDiv4.style.opacity = 0; // Fade out effect
        myDiv4.style.visibility = 'hidden'; // Hide after fade out
        myDiv4.classList.remove('ll4'); // Remove animation class
    }

    lastScrollTop4 = scrollTop4; // Update last scroll position
});

let lastScrollTop5 = 0;
window.addEventListener('scroll', function() {
    const myDiv5 = document.getElementById('ll5');
    let scrollTop5 = window.scrollY;
    
    // Scroll down
    if (scrollTop5 > lastScrollTop5 && scrollTop5 > 1000) {
        myDiv5.style.visibility = 'visible'; // Make it visible
        myDiv5.style.opacity = 1; // Fade in effect
        myDiv5.classList.add('ll5'); // Add animation class
    }
    // Scroll up (to the top or near the top)
    else if (scrollTop5 < lastScrollTop5 && scrollTop5 <= 1000) {
        myDiv5.style.opacity = 0; // Fade out effect
        myDiv5.style.visibility = 'hidden'; // Hide after fade out
        myDiv5.classList.remove('ll5'); // Remove animation class
    }

    lastScrollTop5 = scrollTop5; // Update last scroll position
});

// let cl = window.prompt('In which class does your ward want to take admission? Please type the option: (a) Nursery to 10th (b) 11th or 12th.');