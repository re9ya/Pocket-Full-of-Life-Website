let slideIndex = 0; // Computers start counting at 0
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    // 1. Handle looping (Going past the end or beginning)
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    // 2. Reset all slides (Remove all special classes)
    for (let i = 0; i < slides.length; i++) {
        slides[i].className = "slide"; // Reset to basic class
    }
    
    // 3. Define the Indices for Prev, Current, and Next
    let current = slideIndex;
    let prev = current - 1;
    let next = current + 1;

    // Handle the "Loop" logic for neighbors
    if (prev < 0) { prev = slides.length - 1; } // If current is first, prev is last
    if (next >= slides.length) { next = 0; }    // If current is last, next is first

    // 4. Assign the classes to create the layout
    slides[current].classList.add("active");
    slides[prev].classList.add("prev-ghost");
    slides[next].classList.add("next-ghost");
}