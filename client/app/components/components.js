import angular from 'angular';
import Home from './_containers/home/home';
import About from './_containers/about/about';
import Calendar from './calendar/calendar';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Calendar.name
]);

export default componentModule;
