'use strict';

// Toggle functionality for the gallery section
let toggleButton = document.getElementById('toggleButton');
let content = document.getElementById('content');


//conditionals used for toggle function
toggleButton.addEventListener('click', function () {
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});


// Toggle functionality for the about section
let aboutToggle = document.getElementById('aboutToggle');
let aboutContent = document.getElementById('aboutContent');
let portfolioButton = document.getElementById('portfolioButton');


//Toggle written as function!
aboutToggle.addEventListener('click', function () {
    if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
        aboutContent.style.display = 'block';
        portfolioButton.style.display = 'block';
    } else {
        aboutContent.style.display = 'none';
        portfolioButton.style.display = 'none';
    }
});


// rendering the images in the gallery section (array of image objects) //
const images = [
    { src: "assets/images/sait-pic1.jpg", alt: 'Image 1' },
    { src: "assets/images/sait-pic2.jpg", alt: 'Image 2' },
    { src: 'assets/images/sait-pic3.jpg', alt: 'Image 3' },
    { src: 'assets/images/sait-pic4.jpg', alt: 'Image 4' },
    { src: 'assets/images/sait-pic5.jpg', alt: 'Image 5' },
    { src: 'assets/images/sait-pic6.jpg', alt: 'Image 6' },
    { src: 'assets/images/sait-pic7.jpg', alt: 'Image 7' },
    { src: 'assets/images/sait-pic8.jpg', alt: 'Image 8' },
    { src: 'assets/images/sait-pic9.jpg', alt: 'Image 9' },
];


//HTML element => 'galleryContainer'
const galleryContainer = document.getElementById('galleryContainer');

// Loop used through images array to render content
// Rendering images in the galleryContainer => result: displays the images when page is deployed
images.forEach(image => {
    const imgElement = document.createElement('img');
    
    //created img, using src, alt elements 
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.classList.add('gallery-image');
    galleryContainer.appendChild(imgElement);
});


// Button functionality & checks if form is valid
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
    alert('Your message has been sent!');
});


// Input field functionality
const inputField = document.getElementById('inputField');
inputField.addEventListener('input', function (event) {
//Display message when input value is changed
    const text = event.target.value;
    console.log('Input field changed:', text);
});

