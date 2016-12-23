import template from './calendar.pug';
import controller from './calendar.controller';
import './calendar.styl';

let calendarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'cactrl'
};

export default calendarComponent;
