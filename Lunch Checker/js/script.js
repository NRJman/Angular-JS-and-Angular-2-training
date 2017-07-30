(function (){
	'use strict';

	angular.module('LCApp', [])
	.controller('LCController', LCController);

	LCController.$inject = ['$scope'];

	function LCController($scope){
		$scope.name = '';
		$scope.message = '';
		$scope.messageStyle = '';
		$scope.inputStyle = '';
		$scope.comment = '*Note, that you can\'t enter the empty items, for example: \'item 1, item2,,item3\', or \'item 1, item2, ,item3\' '
		$scope.commentStyle = {
			'color': 'grey',
			'font-size': '0.9em'
		}

		$scope.showMessage = function(){
			var numberOfItems = calculate($scope.name);
			var theMessage = "";
			if (0 < numberOfItems && numberOfItems <= 3){
				theMessage = "Enjoy!";
				$scope.messageStyle = {
					'color': 'green'
				}
				$scope.inputStyle = {
					'border': '1px solid green'
				}
			} else if (numberOfItems > 3){
				theMessage = "Too much!";
				$scope.messageStyle = {
					'color': 'green'
				}
				$scope.inputStyle = {
					'border': '1px solid green'
				}
			} else {
				theMessage = "Please, enter the data first"
				$scope.messageStyle = {
					'color': 'red'
				}
				$scope.inputStyle = {
					'border': '1px solid red'
				}
			}
			$scope.message = theMessage;
		}

		var calculate = function(items){
			if (items.length > 0){
				var array = items.split(', ');
				return array.length;
			} else {
				return 0;
			}
		}
	}
})();