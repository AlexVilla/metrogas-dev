'use strict';
angular.module('metrogas', ['ionic','ui.router','ngCordova','angular.filter','ngResource'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('login',{
            url: '/login',
            views: {
                'content': {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })
        
    .state('app',{
            url: '/app',
            views: {
                'sidenav': {
                    templateUrl: 'views/sidenav.html'
                },
                'content': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
    
    .state('app.asignadas',{
            url: '/asignadas',
            views: {
                'content@': {
                    templateUrl: 'views/asignadas.html',
                    controller: 'AsignCtrl'
                }
            }
        })
    
    .state('app.edit',{
            url: '/edit/:ic',
            views: {
                'content@': {
                    templateUrl: 'views/edit.html',
                    controller: 'EditCtrl'
                }
            }
        });
    
    $urlRouterProvider.otherwise('login');

})
;