var agnular = require('angular');
require('angular-ui-router');


angular.module('ccma.controllers',[]);
angular.module('ccma.services',[]);
angular.module('ccma.directives',[]);
angular.module('ccma',[
    'ccma.controllers',
    'ccma.services',
    'ccma.directives',
    'ui.router'
]);

require('./router');
