(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);

	function FoundItems() {
		var ddo = {
			templateUrl: "items.html",
			scope: {
				items: "<",
				onRemove: "&"
			}
		}

		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;
		ctrl.searchTerm = "";
		ctrl.message = "Nothing found";
		ctrl.messageFlag = false;

		ctrl.filterItems = function() {
			if (ctrl.searchTerm !== ""){
				var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

				promise.then(function(response) {
					ctrl.found = response;
					if (ctrl.found.length === 0) {
						ctrl.messageFlag = true;
					} else {
						ctrl.messageFlag = false;
					}
				})
				.catch(function (error) {
		          console.log("Something went terribly wrong.");
		        });
			} else {
				ctrl.messageFlag = true;
			}
		}

		ctrl.removeItem = function(itemIndex) {
			ctrl.found.splice(itemIndex, 1);
			if (ctrl.found.length === 0) {
				ctrl.messageFlag = true;
			}
		}
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method: 'GET',
				url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			}).then(
			
			function(result) {
				var foundItems = [];

				for (var i = 0; i < result.data.menu_items.length; i++){
					if (result.data.menu_items[i].description.indexOf(searchTerm) !== -1) {
						foundItems.push(result.data.menu_items[i])
					}
				}

				return foundItems;
			});
		}
	}
})();