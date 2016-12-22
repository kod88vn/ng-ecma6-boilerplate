import angular from 'angular';
import Navbar from './navbar/navbar';
import DateUtils from './dateUtils';

let commonModule = angular.module('app.common', [
  Navbar.name,
  DateUtils.name
]);

export default commonModule;
