const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayNumber = today.getDay();
const dayName = days[dayNumber];

function getEventWeekday (daysToEvent){
  const eventDayNumber = (dayNumber + daysToEvent) % 7;
  return days[eventDayNumber];
}

console.log(getEventWeekday(5));
