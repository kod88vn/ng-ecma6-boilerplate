import angular from 'angular';
import uiRouter from 'angular-ui-router';
import calendarComponent from './calendar.component';
import apptController from './appointment.controller';

let calendarModule = angular.module('calendar', [
  uiRouter
])
.controller('apptCtrl', apptController)
.component('calendar', calendarComponent)
;

export default calendarModule;
