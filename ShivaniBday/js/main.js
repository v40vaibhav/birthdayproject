const time = document.getElementById("time");

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //set AM or PM
    const amPm = hour>=12 ? 'PM' : 'AM';

    showImage(today);
    //12 hour format
    hour = hour%12 || 12;

    //Output the time
    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}<span>:</span>${amPm}`;
    setTimeout(showTime, 1000);

}
showTime();

async function showImage(today){
    console.log(today.getHours());
    if(today.getDate() >= 29 ) {
        document.getElementById("birthday").style.display = "block";
        await sleep(2000);
        document.getElementById("images1").style.display = "block";
        await sleep(2000);
        document.getElementById("images2").style.display = "block";
        await sleep(2000);
        document.getElementById("images3").style.display = "block";
        await sleep(2000);
        document.getElementById("time").style.fontSize = "30px";
        document.getElementById("text").style.display = "block";

    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}