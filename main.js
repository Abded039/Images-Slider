// GEt Slider Items | Array.from() [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous And Next Buttons
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

// Handle Click On Previous And Next Buttons
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create The Main UL Element
var paginationElement = document.createElement("ul");

// Set Id ON Created UL Element 
paginationElement.setAttribute('id', 'pagination-ul');

// Create LIst Items based on slides count
for (var i = 1; i <= slidesCount; i++) {
    // Create the li
    var paginationItem = document.createElement("li");

    // Set custome attribe
    paginationItem.setAttribute('data-index', i);

    // set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append items to the main ul list
    paginationElement.appendChild(paginationItem);

}

// Add The Created Element To The page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

// GEt pagination Items | Array.from() [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through all bullets items
for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}

// Trigger The Chicker Function
theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do nothing
        return false;
        
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do nothing
        return false;

    } else {
        currentSlide--;
        theChecker();
    }
}

// CReate The checker function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = `Slide # ${currentSlide} Of ${slidesCount}`;

    // Remove active classes
    removeAllActive();
    
    // Set active class on current slide
    sliderImages[currentSlide - 1].classList.add("active");
    
    // Set Active Class On current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    
    // Check if current slide is the first ------11--------
    if (currentSlide == 1) {
        // Add disabled class on previous button
        prevButton.classList.add('disabled'); // to make prev button disabled
    } else {
        // REmove disabled class on previous button
        prevButton.classList.remove('disabled');
    }

    // Check if current slide is the last ------22-------
    if (currentSlide == slidesCount) {
        // Add disabled class on Next button
        nextButton.classList.add('disabled'); // to make prev button disabled
    } else {
        // REmove disabled class on Next button
        nextButton.classList.remove('disabled');
    }
}

// Remove All Active Classes From Images and pagination bullets
function removeAllActive() {
    // Loop on images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    // Loop on pagination bullets
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    })
}
