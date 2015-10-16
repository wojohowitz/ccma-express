var angular = require('angular');
require('../semantic/app/styles/semantic.css');
require('../semantic/app/styles/semantic.js');


angular.module('ccma.controllers',[]);
angular.module('ccma.services',[]);
angular.module('ccma.directives',[]);
angular.module('ccma',[
    'ccma.controllers',
    'ccma.services',
    'ccma.directives'
]);

