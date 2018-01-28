(function () {
    'use strict';
 
    angular
        .module('advApp')
        .controller('homeController', homeController);
 
    homeController.$inject = ['$scope', '$timeout']; 

    function homeController($scope, $timeout) { 

        $scope.advertisementAssets = [];
        $scope.isLoading = true;

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.mcmakler.de/v1/advertisements"; // site that doesn’t send Access-Control-*

        var getData = fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements
        .then(response => response.json())
        .then(function(results) {

            //Get the data
            results = results.data;
            var allDataLenght = results.length;

            for (var i = 0; i < 11 && i < allDataLenght; i++) {

                var allAdvertisementsData = results[i];

                $scope.advertisementAssets.push({
                    id: allAdvertisementsData.additionalId,
                    imgUrl: allAdvertisementsData.advertisementAssets["0"].advertisementThumbnails.inventory_m.url,
                    title: allAdvertisementsData.title,
                    advertisementPrice: {
                        baseRent: allAdvertisementsData.advertisementPrice.baseRent,
                        sellPrice: allAdvertisementsData.advertisementPrice.sellPrice,
                    },
                    realestateSummary: {
                        address: {
                            postalCode: allAdvertisementsData.realestateSummary.address.postalCode,
                            city: allAdvertisementsData.realestateSummary.address.city, //sinn
                            street: allAdvertisementsData.realestateSummary.address.street, //Fleisbach
                        },
                        numberOfRooms: allAdvertisementsData.realestateSummary.numberOfRooms,
                        space: Math.round(allAdvertisementsData.realestateSummary.space) // Rounds space number to the nearest integer
                    }
                });
            };

            if($scope.advertisementAssets.length) {
                $scope.isLoading = false;
                $timeout( function(){
                }, 1 );
            } else {
                $scope.isLoading = true;
            }

            return $scope.advertisementAssets;
        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }

})();