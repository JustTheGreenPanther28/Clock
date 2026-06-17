
function changeBackgroundImage() {
    let currentDateTime = new Date();
    let hrs = currentDateTime.getHours();
    let completeBody = document.getElementsByTagName("body")[0];
    let clock = document.getElementById("digital-clock");

    if (hrs >= 18 || hrs<=3) {
        //night image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781606137/billy-huynh-W8KTS-mhFUE-unsplash_hlxjf5.jpg")';
        clock.classList.add("night");

    }
    else if(hrs>=4 && hrs<=17){
        //day image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781605693/jonas-weckschmied--N_UwPdUs7E-unsplash_mf2yze.jpg")';
        clock.classList.remove("night");

    }
    else{
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

let analog_btn = document.getElementById("analog");
analog_btn.addEventListener("click", () => {
    let digital_clock = document.getElementById("digital-clock");
    let analog_clock = document.getElementById("analog-clock");
    digital_clock.style = "display:none";
    analog_clock.style = "display:flex"
})
let digital_btn = document.getElementById("digital");
digital_btn.addEventListener("click",()=>{
    let digital_clock = document.getElementById("digital-clock");
    let analog_clock = document.getElementById("analog-clock");
    digital_clock.style = "display:flex";
    analog_clock.style = "display:none"
})