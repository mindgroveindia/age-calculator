function ageCalculate() {

  var birthDate = document.getElementById('birth_date').value;
  var userName = document.getElementById('userName').value;

  // get date
  var d = new Date(birthDate);

  var mdate = birthDate.toString();
  var yearThen = parseInt(mdate.substring(0, 4), 10);
  var monthThen = parseInt(mdate.substring(5, 7), 10);
  var dayThen = parseInt(mdate.substring(8, 10), 10);
  
  var dayLookup = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };

  var dayName = dayLookup[d.getDay()];
  var today = new Date();
  var birthday = new Date(yearThen, monthThen - 1, dayThen);
  var differenceInMilisecond = today.valueOf() - birthday.valueOf();

  var year_age = Math.floor(differenceInMilisecond / 31536000000);
  var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

  if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
    alert("Happy B'day!!!");
  }

  var month_age = Math.floor(day_age / 30);
  day_age = day_age % 30;
  var tMnt = (month_age + (year_age * 12));
  var tDays = (tMnt * 30) + day_age;

  if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
    document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
  }
  else {
    document.getElementById("age").innerHTML = "Hi "

      + userName + " did you know that you where born on a "+ dayName +" " + tDays + " Days ago"

  }

}