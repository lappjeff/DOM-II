// Your code goes here
const signUpBtn = document.querySelectorAll('.btn');
const container = document.querySelector('.nav-container');
const intro = document.querySelector('.intro');
const logoHeading = document.querySelector('.logo-heading');
const destinationText = document.querySelectorAll('.destination')
const contentPick = document.querySelector('.content-pick')
const firstImg = document.querySelector('img');
const navLinks = document.querySelectorAll('.nav-link')
const body = document.querySelector('body')

intro.addEventListener('mouseenter', function(e) {
    TweenMax.to(e.target, 3, {backgroundColor: 'white'})
})
//prevent default for nav links
navLinks.forEach(function(currentLink) {
    currentLink.addEventListener('click', function(e) {
        console.log('Nav link was clicked')
        e.preventDefault();
    })
})

//changes text content of logo heading when resized
window.addEventListener('resize', function(e) {
    logoHeading.textContent = 'Window resized'
})
//change color of intro background to gray on scroll
window.addEventListener('scroll', function(e) {
    intro.style.background = 'lightGray'
})
//logs content when page loads
window.addEventListener('load', function(e) {
    console.log('Page Finished Loading!')
    TweenMax.to(body, 3, {backgroundColor: '#776f67'})
})

//try dragging  anything on the page
window.addEventListener('dragend', function() {
    alert('Cannot drag this item')
})
//Click outside the .destination-text content for this example to work
contentPick.addEventListener('click', function(e) {
    console.log(`content-pick triggered`)
})

destinationText.forEach(function(currentIndex) {
    currentIndex.addEventListener('click', function(e) {
        console.log(`destination triggered`)
        e.stopPropagation();
    })
})


//copy content in intro section
intro.addEventListener('copy', function(e) {
    e.target.textContent = 'COPY ME NOW'
})

//sign up btn events

signUpBtn.forEach(function(currentItem) {
    currentItem.addEventListener('click', function(e){
        TweenMax.to(e.target, 2, { rotationX: 360, rotationY: 360})
    })
})

signUpBtn[0].addEventListener('dblclick', function(e) {
    e.target.textContent = 'DOUBLE KILL'
})

signUpBtn[1].addEventListener('mouseover', function(e) {
    e.target.style.fontSize = '30px'
    e.target.textContent = 'BIG!'

})

signUpBtn[1].addEventListener('mouseout', function(e) {
    e.target.style.fontSize = '20px'
    e.target.textContent = 'Normal size again!'
})

signUpBtn[2].addEventListener('mousedown', function(e) {
    e.target.textContent = 'RELEASE ME'
})

signUpBtn[2].addEventListener('mouseup', function(e) {
    e.target.textContent = 'FREEDOM!!!'
})
