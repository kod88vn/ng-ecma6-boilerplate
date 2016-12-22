import angular from 'angular';
import Home from './_containers/home/home';
import About from './_containers/about/about';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name
]);

export default componentModule;
