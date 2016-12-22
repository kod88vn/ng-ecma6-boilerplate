class CalendarController {
  constructor(dateUtils) {
    'ngInject';
    let today = new Date();

    this.calendar = dateUtils.getCalendar(today);
    this.days = dateUtils.days;
    this.months = dateUtils.months;
    this.month = this.months[today.getMonth()];
  }
}

export default CalendarController;
