$(document).ready(function(){
	if (hasGetUserMedia()) {
	  var errorCallback = function(e) {
		console.log('Reeeejected!', e);
	  };
	  
	  navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	  
	  var hdConstraints = { video: { mandatory: { minWidth: 1280, minHeight: 720 }}};
	  
	  // Not showing vendor prefixes.
	  navigator.getUserMedia(hdConstraints, function(localMediaStream) {
		var video = document.querySelector('video');
		video.src = window.URL.createObjectURL(localMediaStream);

		// Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
		// See crbug.com/110938.
		video.onloadedmetadata = function(e) {
		  // Ready to go. Do some stuff.
		};
	  }, errorCallback);
	} else {
	  alert('getUserMedia() is not supported in your browser');
	}
});

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}