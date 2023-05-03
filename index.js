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