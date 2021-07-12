function displayTime() {
  const timeNow = new Date();
  const time = document.getElementById('time');
  var timeHours = timeNow.getHours();
  const timeMinutes = timeNow.getMinutes();
  const timeSeconds = timeNow.getSeconds();
  const isAm = timeHours < 12 || timeHours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  time.innerText = `${formatHour(timeHours)}:${renderLeadingZero(
    timeMinutes
  )}:${renderLeadingZero(timeSeconds)}${amPm}`;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function displayDate() {
  const dateNow = new Date();
  const date = document.getElementById('date');
  const dateMonth = months[dateNow.getMonth()];
  const dateDay = days[dateNow.getDay()];
  const dateDate = dateNow.getDate();
  const dateYear = dateNow.getFullYear();

  date.innerText = `${dateDay} ${dateMonth} ${dateSuffix(
    dateDate
  )}, ${dateYear}`;
}

function renderLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function dateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

displayTime();
displayDate();
setInterval(() => {
  displayTime();
  displayDate();
});
