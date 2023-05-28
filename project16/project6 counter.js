
var totaldate = "16 August 2023 12:00 AM";
document.getElementById("lastTime").innerHTML = totaldate;
var inputs = document.querySelectorAll("input");

function Birthday(){
    const endDate = new Date(totaldate);
    const startDate = new Date();
    const diff = (endDate - startDate)/1000;
    console.log(diff);

    // ------------------  Day  -------------------
    const day = Math.floor (diff/3600/24);
    inputs[0].value = day;

    // ------------------  Hours  -------------------
    const hours = Math.floor (diff/3600) % 24;
    inputs[1].value = hours;

     // ------------------  Minutes  -------------------
     const minutes = Math.floor(diff/3600) % 60;
     inputs[2].value = minutes;

     // ------------------  Minutes  -------------------
     const seconds = Math.floor(diff) % 60;   
     inputs[3].value = seconds;

}
Birthday();

setInterval(Birthday, 1000)


