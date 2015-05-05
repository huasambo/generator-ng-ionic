angular.module('<%= _.camelize(appname) %>', ['ionic']);
angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/tab');

});
angular.module('<%= _.camelize(appname) %>').run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});
