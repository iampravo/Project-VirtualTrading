/** Main VT Web Application */
var vtWebApp =   angular.module('vtWebApp', ['ngRoute']);

/** Configure the Routes*/
 vtWebApp.config(function($routeProvider) {
$routeProvider

    .when('/', {
        templateUrl: 'pages/homepage.html',
        controller: 'homepageController'
     })

    .when('/home', {
        templateUrl: 'pages/homepage.html',
        controller: 'homepageController'
    })

    .when('/portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: 'portfolioController'
    })

    .when("/watchlist", {
        templateUrl: 'pages/watchlist.html',
        controller: "watchlistController"})

    .when("/blog", {
        templateUrl: "pages/blog.html",
        controller: "blogController"
    })

    .when("/forum", {
        templateUrl: "pages/forum.html",
        controller: "forumController"
     })

    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })

    .when('/stock', {
        templateUrl : 'pages/stockDashboard.html',
        controller  : 'stockDashboardController'
    })

    .when('/performanceMarket', {
            templateUrl : 'pages/performanceMarket.html',
            controller  : 'performanceMarketController'
        })

    .when("/inbox", {
        templateUrl: 'pages/inbox.html',
        controller: 'inboxController'
    })

    .when("/profile", {
        templateUrl: 'pages/profile.html',
        controller: 'profileController'
    })

    .when("/logout", {
        templateUrl: 'pages/logout.html',
        controller: 'logoutController'
    })

    .otherwise('/404', {
        templateUrl: 'pages/404.html',
        controller: '404Controller'
    });
});

/**
 * Controls the About
 */
vtWebApp.controller('aboutController', function($scope) {
  console.log("aboutController Controller reporting for duty.");
});

/**
 * Controls the Homepage
 */
vtWebApp.controller('homepageController', function (/* $scope, $location, $http */) {
  console.log("Homepage Controller reporting for duty.");
});

/**
 * Controls the Portfolio
 */
vtWebApp.controller('portfolioController', function (/* $scope, $location, $http */) {
  console.log("Portfolio Controller reporting for duty.");
});

/**
 * Controls the Watchlist
 */
vtWebApp.controller('watchlistController', function (/* $scope, $location, $http */) {
  console.log("Watchlist Controller reporting for duty.");
});

/**
 * Controls the Blog
 */
vtWebApp.controller('blogController', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls the Forum
 */
vtWebApp.controller('forumController', function (/* $scope, $location, $http */) {
  console.log("Forum Controller reporting for duty.");
});

/**
 * Controls the Stock Dashboard
 */
vtWebApp.controller('stockDashboardController', function (/* $scope, $location, $http */) {
  console.log("StockDashboard Controller reporting for duty.");
});

/**
 * Controls the Inbox
 */
vtWebApp.controller('inboxController', function (/* $scope, $location, $http */) {
  console.log("Inbox Controller reporting for duty.");
});

/**
 * Controls the Profile
 */
vtWebApp.controller('profileController', function (/* $scope, $location, $http */) {
  console.log("Profile Controller reporting for duty.");
});

/**
 * Controls the logout
 */
vtWebApp.controller('logoutController', function (/* $scope, $location, $http */) {
  console.log("Logout Controller reporting for duty.");
});

/**
 * Controls the 404
 */
vtWebApp.controller('404Controller', function (/* $scope, $location, $http */) {
  console.log("404 Controller reporting for duty.");
});

/**
 * Controls the 404
 */
vtWebApp.controller('performanceMarketController', function (/* $scope, $location, $http */) {
  console.log("Performance Market Controller reporting for duty.");
});



/*
  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })

});*/
