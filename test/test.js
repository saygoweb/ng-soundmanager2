'use strict';

// Declare app level module which depends on filters, and services
angular.module('sgw.test.soundmanager', 
		[
		 'sgw.soundmanager'
		])
.config([function() {
	soundManager.setup({
		url : '../src/lib/js/sm2/',
		flashVersion : 9, // optional: shiny features (default = 8)
		// optional: ignore Flash where possible, use 100% HTML5 mode
		//preferFlash : false,
		onready : function() {
			// Ready to use; soundManager.createSound() etc. can now be called.
		}
	});	
	
}])
.controller('MainCtrl', ['$scope', function($scope) {
	$scope.soundIcon = function() {
		var map = {
			'stop': 'icon-play',
			'play': 'icon-pause',
			'pause': 'icon-play'
		};
		return map[$scope.state];
	};
}])
;
