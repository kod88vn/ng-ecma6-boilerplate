class CalendarController {
  constructor($uibModal, dateUtils) {
    'ngInject';
    this.now = new Date();
    this.dateUtils = dateUtils;
    this.appointments = {};
    this.uibModal = $uibModal;
    this.calendar = dateUtils.getCalendar(this.now);
    this.days = dateUtils.days;
    this.months = dateUtils.months;
    this.month = this.months[this.now.getMonth()];
    this.daysOfWeek = dateUtils.getDaysOfWeek(this.now);
    this.timeSlots = dateUtils.getTimeSlots();
  }

  toPreviousWeek() {
    this.now = new Date(this.now.setDate(this.now.getDate() - 7));
    this.daysOfWeek = this.dateUtils.getDaysOfWeek(this.now);
    this.month = this.months[this.now.getMonth()];
  }

  toNextWeek() {
    this.now = new Date(this.now.setDate(this.now.getDate() + 7));
    this.daysOfWeek = this.dateUtils.getDaysOfWeek(this.now);
    this.month = this.months[this.now.getMonth()];
  }

  remove(date, timeslot) {
    delete this.appointments[[date, timeslot]];
  }

  open(date, timeslot) {
    if(!this.appointments[[date, timeslot]]) {
      this.appointments[[date, timeslot]] = {};
    }

    let modalInstance = this.uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'appt.html',
      controller: 'apptCtrl',
      controllerAs: 'apptCtrl',
      size: 'sm',
      resolve: {
        appointment: () => {
          return this.appointments[[date, timeslot]];
        }
      }
    });
  }
}

export default CalendarController;
