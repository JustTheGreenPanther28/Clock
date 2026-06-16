
function changeBackgroundImage(){
    let currentDateTime = new Date();
    let hrs = currentDateTime.getHours();
    let completeBody = document.getElementsByTagName("body")[0];
    let clock = document.getElementById("digital-clock");   
    
    if(hrs>=18){
        //night image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781606137/billy-huynh-W8KTS-mhFUE-unsplash_hlxjf5.jpg")';
        clock.classList.add("night");

    }
    else{
        //day image
        completeBody.style.backgroundImage = 'url("https://res.cloudinary.com/dh62nngtk/image/upload/v1781605693/jonas-weckschmied--N_UwPdUs7E-unsplash_mf2yze.jpg")';
        clock.classList.remove("night");

    }
}

function uploadTime(){
    let currentDateTime = new Date();
    let hr = document.getElementById("hrs");
    let min = document.getElementById("mins");
    let seconds = document.getElementById("seconds");

    hr.textContent=currentDateTime.getHours();
    min.textContent=currentDateTime.getMinutes();
    seconds.textContent=currentDateTime.getSeconds();
}
changeBackgroundImage();
setInterval(uploadTime,1000);