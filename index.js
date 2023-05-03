const cookieButton = document.getElementById('container');


let count = 0;
cookieButton.addEventListener('click', function() {
    console.log(count, "count from event listener")
    count ++
    container.innerText = `The current count is ${count}`
    
});

const container = document.getElementById('counter');
container.style.backgroundColor = "red";
// container.style.backgroundImage = "url('cookie.jpeg')";

// Magnify Text
const bigger = document.getElementById('bigger');
const text = document.querySelector('p');
const smaller = document.getElementById('smaller');
let currentFontSize = parseInt(window.getComputedStyle(text).fontSize);
bigger.addEventListener('click', function() {
    if (currentFontSize >= 100) return;
    currentFontSize++;
    text.style.fontSize = currentFontSize + 'px';
    console.log(`Current size ${currentFontSize}`);
    console.log('Clicked!');
    // let fontSize = parseInt(text.style.fontSize);
    // console.log(`current size: ${fontSize}`)
    
});
smaller.addEventListener('click', function () {
    if (currentFontSize <= 1) return;
    currentFontSize--;
    text.style.fontSize = currentFontSize + 'px';
    console.log(`Current size ${currentFontSize}`);
    console.log('Clicked!');
})
