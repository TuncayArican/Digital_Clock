window.addEventListener('load', () => {
    setInterval(() => {    
        let currentDate = new Date();
    
        let showHour = document.querySelector("#hours");
        let showMinute = document.querySelector("#minutes");
        let showSecond = document.querySelector("#seconds");
        let ampm = document.querySelector("#am_pm");
    
        let hours = currentDate.getHours() ;
        let minutes = currentDate.getMinutes() ;
        let seconds = currentDate.getSeconds();
        

        // I have added "0" if the Hours/minutes/Seconds smaller than 10
        hours=hours<10 ? "0" + hours : hours
        showHour.innerText = hours 
        minutes=minutes<10 ? "0" + minutes : minutes
        showMinute.innerText = minutes
        seconds=seconds<10 ? "0" + seconds : seconds
        showSecond.innerText = seconds
        

        //We will add AM or PM according to the hour
        ampm.innerText= hours>=12 ? "PM" : "AM"
    }, 1000)
  });
