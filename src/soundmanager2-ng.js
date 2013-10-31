angular.module('sgw.soundmanager', [])
// Sound Manager 2
.config([function() {
}])
.directive('sgwSoundPlayer', function() {
	return {
		restrict : 'A',
		replace : false,
		scope : {
			'state': '=?',
			'href': '='
		},
		controller : ["$scope", function($scope) {
			$scope.state = 'stop';
			var sound = undefined;
			this.nextState = function() {
				if (sound == undefined) {
					sound = soundManager.createSound({
						url: $scope.href,
						volume: 50,
						autoLoad: true,
						autoPlay: false,
						onload: function() {
							console.log('sound loaded');
						},
						onfinish: function() {
							console.log('sound finished');
							$scope.state = 'stop';
						}
					});					
				}
				if ($scope.state == 'stop') {
					sound.play();
					$scope.state = 'play';
				} else if ($scope.state == 'play') {
					sound.pause();
					$scope.state = 'pause';
				} else if ($scope.state == 'pause') {
					sound.resume();
					$scope.state = 'play';
				}
			};
		}],
		link : function(scope, element, attrs, controller) {
			// Set the audioUrl from the href
//			scope.audioUrl = attrs['href'];
			
			element.bind('click', function(e) {
				e.preventDefault();
				scope.$apply(function() {
					controller.nextState();
				});
			});
		}
	};
});
