import angular from 'angular';

let chosenDates = [0, 7 ,14, 21 ,28, 30];

class dateUtilsService
{
  constructor() {
    let d = new Date();

    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  getCalendar(date) {
    let calendar = {};

    for(let i = 0; i < chosenDates.length; i++) {
      calendar[i] = this.getDaysOfWeek(new Date(date.getFullYear(), date.getMonth(), chosenDates[i]));
    }

    if(calendar[4][0].toLocaleDateString() === calendar[5][0].toLocaleDateString()) {
      delete calendar[5];
    }

    return calendar;
  }

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  getDaysOfWeek(date)
  {
    var days = new Array();
    for (var i = 0; i < 7; i++)
    {
      days[i] = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() - date.getDay() + 1 + i);
    }
    return days;
  }
}

let dateUtils = angular.module('dateUtils', [])
.service('dateUtils', dateUtilsService);

export default dateUtils;
