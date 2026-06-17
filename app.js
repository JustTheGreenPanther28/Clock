
function changeBackgroundImage() {
    let currentDateTime = new Date();
    let hrs = currentDateTime.getHours();
    let completeBody = document.getElementsByTagName("body")[0];
    let clock = document.getElementById("digital-clock");
    let heading = document.getElementById("digital-clock-heading");

    if (hrs >= 18 || hrs <= 3) {
        //night image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781606137/billy-huynh-W8KTS-mhFUE-unsplash_hlxjf5.jpg")';
        clock.classList.add("night");

    }
    if (hrs >= 4 && hrs <= 17) {
        //day image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781605693/jonas-weckschmied--N_UwPdUs7E-unsplash_mf2yze.jpg")';
        heading.style.color = "#8f1a2e";
        clock.classList.remove("night");

    }
    else {
        completeBody.style.backgroundImage = 'url("https://images.pexels.com/photos/37200092/pexels-photo-37200092.jpeg")';
    }
}

function uploadTime() {
    let currentDateTime = new Date();
    let hr = document.getElementById("hrs");
    let min = document.getElementById("mins");
    let seconds = document.getElementById("seconds");

    hr.textContent = currentDateTime.getHours();
    min.textContent = currentDateTime.getMinutes();
    seconds.textContent = currentDateTime.getSeconds();
}
changeBackgroundImage();
setInterval(uploadTime, 1000);

function moveHands() {
    let second_hand = document.getElementById("second-hand");
    let minute_hand = document.getElementById("minute-hand");
    let hour_hand = document.getElementById("hour-hand");

    let currentDateTime = new Date();
    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    let seconds = currentDateTime.getSeconds();

    let rotateSeconds = seconds * 6;
    let rotateMinutes = minutes * 6 + seconds * 0.1;
    let rotateHours = (hours % 12) * 30 + minutes * 0.5;


    minute_hand.style.transform = `translateX(-50%) rotate(${rotateMinutes}deg)`;
    hour_hand.style.transform = `translateX(-50%) rotate(${rotateHours}deg)`;
    second_hand.style.transform = `translateX(-50%) rotate(${rotateSeconds}deg)`;
}
setInterval(moveHands, 1000);

let analog_btn = document.getElementById("analog");
analog_btn.addEventListener("click", () => {
    let digital_clock = document.getElementById("digital-clock");
    let analog_clock = document.getElementById("analog-clock");
    digital_clock.style = "display:none";
    analog_clock.style = "display:flex"
})
let digital_btn = document.getElementById("digital");
digital_btn.addEventListener("click", () => {
    let digital_clock = document.getElementById("digital-clock");
    let analog_clock = document.getElementById("analog-clock");
    digital_clock.style = "display:flex";
    analog_clock.style = "display:none"
})