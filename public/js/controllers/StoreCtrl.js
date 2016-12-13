'use strict';

angular.module('myApp.controllers').
    controller('StoreCtrl', ['$scope', '$http', function ($scope, $http) {
        var productsUrl = "/api/products";
        $http({ method: 'GET', url: productsUrl }).
        then(function successCallback(response) {
            // console.log('response data: '+ response.data);
            $scope.feeds = response.data;

        }, function errorCallback(response) {
            console.log('response status: ' + response.status);
            noty({text: 'Something went wrong; we are working to fix the issue.', timeout: 4000, type: 'error'});
        });

        $scope.filterByPrice = function(under20='false', between20and30='false', above30='false'){
            return function(item){
                var answer;
                if (under20 == true){
                    answer = item['defaultPriceInCents'] < 2000;
                    if (between20and30 == true && above30 == true){
                        answer = item;
                    } else if (between20and30 == true){
                        answer = item['defaultPriceInCents'] <= 3000;
                    } else if (above30 == true){
                        answer = item['defaultPriceInCents'] < 2000 || item['defaultPriceInCents'] >= 3000;
                    }
                } else if (between20and30 == true){
                    answer = item['defaultPriceInCents'] >= 2000 && item['defaultPriceInCents'] <= 3000;
                    if (under20 == true && above30 == true){
                        answer = item;
                    } else if (under20 == true){
                        answer = item['defaultPriceInCents'] <= 3000;
                    } else if (above30 == true){
                        answer = item['defaultPriceInCents'] >= 2000;
                    }
                } else 
                if (above30 == true){
                    answer = item['defaultPriceInCents'] >= 3000;
                    if (under20 == true && between20and30 == true){
                        answer = item;
                    }
                    else if (between20and30 == true){
                        answer = item['defaultPriceInCents'] >= 2000;
                    } else if (under20 == true){
                        answer = item['defaultPriceInCents'] < 2000 || item['defaultPriceInCents'] >= 3000;
                    }
                } else {
                    answer = item;
                }
                return answer;
            }
        };

    }]).
    config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);
