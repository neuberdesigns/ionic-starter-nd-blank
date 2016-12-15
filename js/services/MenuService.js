angular.module('starter.services')
.directive('shareApp', function($cordovaSocialSharing) {
	return {
		link: function($scope, element) {
			element.on('click', function() {
				$message = 'Your share text here';
				$cordovaSocialSharing.share($message/*, image, link*/);
			});
		}
	};
})

.directive('rateApp', function($cordovaInAppBrowser) {
	return {
		link: function($scope, element) {
			element.on('click', function() {
				var url;
				if($scope.isDroid)
					url = 'market://details?id=APP.BUNDLE.ID';
				else
					url = 'itms-apps://itunes.apple.com/app/APP_ID';
				
				$cordovaInAppBrowser.open(url, '_system').then(function(event) {
				//$cordovaInAppBrowser.open('https://play.google.com/store/apps/details?id=com.dopaminamob.palavrasdosenhor').then(function(event) {
			        // success
			        console.log(event);
				})
				.catch(function(event) {
					// error
			        console.log(event);
				});
			});
		}
	};
})
