console.log('client.js has been loaded');

const shellApp = angular.module('ShellApp', []);

shellApp.controller('ShellController', [function() {
    console.log('loading ShellController');
    
    let self = this;
    self.number = 7;

}]);