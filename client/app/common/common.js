import angular from 'angular';
import Navbar from './navbar/navbar';
import DateUtils from './dateUtils';
import CompileAddedTemplate from './compileAddedTemplate';

let commonModule = angular.module('app.common', [
  Navbar.name,
  DateUtils.name,
  CompileAddedTemplate.name
]);

export default commonModule;
