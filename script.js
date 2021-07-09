const months = [
"January", 
"February", 
"March", 
"April", 
"May", 
"June", 
"July", 
"August", 
"September", 
"October", 
"November", 
"December"];

const days = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"];

var isMilitary = false;
    
function updateTime(timeNow, isMilitary) {
  const time = document.getElementById("Title").getElementsByTagName("h2")[1];
  var timeHoursInMilitary = timeNow.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2});
  const timeMinutes = timeNow.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2});
  const timeSeconds = timeNow.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});
  
  if (isMilitary  == false && timeHoursInMilitary > 12) {
    timeHoursInMilitary = timeHoursInMilitary - 12;
    timeAMPM = " PM";
  } else if (isMilitary == false && timeHoursInMilitary <= 12) {
    timeAMPM = " AM";
  } else {
    timeAMPM = "";
  }
        
  time.innerHTML = `${timeHoursInMilitary}:${timeMinutes}:${timeSeconds}${timeAMPM}`;
}
    
function updateDate(timeNow) {
  const date = document.getElementById("Title").getElementsByTagName("h2")[0];
  const dateMonth = months[timeNow.getMonth()];
  const dateDay = days[timeNow.getDay()];
  const dateDate = timeNow.getDate();
  const dateYear = timeNow.getFullYear();
  
  date.innerHTML = `${dateDay} ${dateMonth} ${dateSuffix(dateDate)}, ${dateYear}`;
  }
    
function dateSuffix(x) {
  suffix = ["st", 'nd', 'rd', 'th'];
  lastDigit = x.toString().split('').pop();

  if (x > 10 && x < 20) {
    x = x + suffix[3];
  } else if (lastDigit == 1) {
    x = x + suffix[0];
  } else if (lastDigit == 2) {
    x = x + suffix[1];
  } else if (lastDigit == 3) {
    x = x + suffix[2];
  } else { 
    x = x + suffix[3];
  }

  return x;
}
    
function combine(isMilitary) {
  timeNow = new Date();
  updateTime(timeNow, isMilitary);
  updateDate(timeNow);
}

combine();
setInterval(combine, 1000, isMilitary);