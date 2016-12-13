'use strict';

/* Filters */

angular.module('myApp.filters', []).
	filter('symphonyImageUrl', function ($sce) {
		return function( url ){
	    	return $sce.trustAsResourceUrl('http:' + url);
		}
	}).
	filter('toDollars', function(){
		return function(input) {
  		    return input / 100;
		};
	});
