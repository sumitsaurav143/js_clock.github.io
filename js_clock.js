var timer=function() 
{
    const time = new Date();
    var hours=time.getHours().toString();
    if (Number(hours)>12)
    document.getElementById("ampm").innerHTML = "PM";
    else
    document.getElementById("ampm").innerHTML = "AM";
    if(Number(hours)>12)
    hours=(Number(hours)-12).toString();
    if(hours.length==1)
    hours="0"+hours;

    var minutes=time.getMinutes().toString();
    if(minutes.length==1)
    minutes="0"+minutes;
    
    var seconds=time.getSeconds().toString();
    if(seconds.length==1)
    seconds="0"+seconds;

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

setInterval(timer,1000);