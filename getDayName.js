function getDayName(dateString) {
  const dateName = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(dateName);
}

console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));

function getDayName2(dateString) {
  const day = new Date(dateString);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDays[day.getDay()];
}

console.log(getDayName2("10/11/2009"));
console.log(getDayName2("11/10/2010"));
