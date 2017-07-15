var moveToTopLibrary = function(idOfButton, time, frequency){
	var moveToTopButton = document.getElementById(idOfButton);
	var intervalId;

	window.addEventListener('wheel', function(event){
		if(intervalId!=null && event.deltaY > 0){
			clearInterval(intervalId);
		}
	});

	var moveToTop = function(event){
		console.log(this);
		console.log("moveToTop was called");


		var currentY = window.scrollY;


		var delta = currentY / (time/frequency);
		if(intervalId != null){
			clearInterval(intervalId);
		}
		intervalId = setInterval(function(){

			window.scrollTo(window.scrollX, window.scrollY - delta);

			if(window.scrollY == 0){
				clearInterval(intervalId);
			}

		},frequency);

	};
	moveToTopButton.addEventListener('click', moveToTop);
};

moveToTopLibrary('moveToTop', 2000, 10);

function currentYPos() {
    if (self.pageYOffset) {
    	return self.pageYOffset;
    }
    return 0;
}


function sectionPosition(eID) {
    var el = document.getElementById(eID);
    var pos = el.offsetTop;
    var node = el;
    while(node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        pos += node.offsetTop;
    } 
    return pos;
}


function smoothScroll(eID) {
    var startY = currentYPos();
    var endY = sectionPosition(eID);
    var distance = endY - startY;
    var speed = 20;
    var step = distance/250;
    var jumpY = startY + step;
    var timer = 0;
    if(endY > startY) {
        for(var i=startY; i<endY; i+=step) {
            setTimeout("window.scrollTo(0, "+jumpY+")", timer * speed);
            jumpY += step; 
            if(jumpY > endY) {
            	jumpY = endY;
           	}
           	timer++;
        } 
    }
}




