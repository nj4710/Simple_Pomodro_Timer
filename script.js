

var Time = 1499;
var mins,secs;

var countdownID;

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");
var start = document.getElementById("start");
start.addEventListener("click",startTimer,false);
var stop = document.getElementById("stop");
stop.addEventListener("click",stopTimer,false);
var reset = document.getElementById("reset");
reset.addEventListener("click",resetTimer,false);

function counter()
{
  mins = Math.floor(Time/60);
  secs = Time - mins*60;
  minutes.innerHTML=(mins<10?'0':'')+mins;
  seconds.innerHTML=(secs<10?'0':'')+secs;
  
  if(Time==0)
    {
       bigTime = 1499;  
      
      minutes.innerHTML = "25";
      seconds.innerHTML = "00";
      start.style.display = "block";
      stop.style.display = "none";
      reset.style.display = "none";
      clearInterval(countdownID);
    }
  else
    {
      Time = Time - 1;
    }
}

function startTimer()
{
  countdownID = setInterval("counter()",1000);
  message.innerHTML = "slow and steady";
  
  start.style.display = "none";
  stop.style.display = "block";
  reset.style.display = "none";
}
function stopTimer()
{
  clearInterval(countdownID);
  message.innerHTML="So Lazy";
  start.style.display = "none";
  reset.style.display="block";
  stop.style.display = "none";
  
}
function resetTimer()
{
  Time = 1499;
 minutes.innerHTML="25";
  seconds.innerHTML="00";
      seconds.innerHTML = "00";
  start.style.display = "block";
  stop.style.display = "none";
  reset.style.display="none";
}
