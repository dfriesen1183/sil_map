function init() {

	var can = document.getElementById("canvas");
	var ctx = can.getContext("2d");

	// var mapObj = document.querySelector('.map');
	// var sbarObj = document.querySelector('.sidebar');

	// toggle sidebar visibility
	// document.querySelector('.toggleSidebar').onclick = function(evt) {
	// 	if (sbarObj.style.visibility === "visible") {
	// 		sbarObj.style.visibility = "hidden";
	// 		var bars = document.getElementsByClassName('bar');
	// 		for (var i = 0; i < 3; i++) {
	// 			bars[i].style.backgroundColor = "#DCDCDC";
	// 			bars[i].querySelector('div').style.backgroundColor = "#232323";
	// 		}
	// 	} else {
	// 		sbarObj.style.visibility = "visible";
	// 		var bars = document.getElementsByClassName('bar');
	// 		for (var i = 0; i < 3; i++) {
	// 			bars[i].style.backgroundColor = "#232323";
	// 			bars[i].querySelector('div').style.backgroundColor = "#DCDCDC";
	// 		}
	// 	}
	// };

	//http://stackoverflow.com/a/3150139
	var addEvent = function(object, type, callback) {
	    if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {
	        object.addEventListener(type, callback, false);
	    } else if (object.attachEvent) {
	        object.attachEvent("on" + type, callback);
	    } else {
	        object["on"+type] = callback;
	    }
	};
	var fixSidebar = function() {
		sbarObj.style.right = window.innerWidth/window.getComputedStyle(document.querySelector('html'), null).getPropertyValue('font-size').match(/^[^A-Za-z]*/) - 20 +"em";
	};

	// ctx.strokeStyle = "#339966";
	// ctx.lineWidth = '3';
	// ctx.fillStyle = '#000000';
	// ctx.beginPath();
	// ctx.arc(200,200,100,Math.PI*0.5,Math.PI*2);

	// ctx.beginPath();
	// ctx.fillStyle = '#339966';
	// ctx.strokeStyle = '#000000'
	// ctx.lineWidth = '3';
	// ctx.arc(0, 0, 30, 0, Math.PI*2)
	// ctx.stroke();
	// ctx.arc(0, 0, 36, 0, Math.PI*2)
	// ctx.fill("evenodd");
	// ctx.closePath();

	// ctx.strokeStyle = "#000000";
	// ctx.lineWidth = "3";
	//
	// ctx.fillStyle = "rgba(0,255,0,1)";
	// ctx.beginPath();
	// ctx.arc(400, 250, 50, 0, Math.PI*2);
	// ctx.moveTo(440, 250);
	// ctx.arc(400, 250, 40, 0, Math.PI*2);
	// ctx.fill("evenodd");
	// ctx.closePath();
	// ctx.stroke();


	// addEvent(window, "resize", fixSidebar);
	// fixSidebar();

	var main = new Main();

	// console.log(JSON.stringify({x: 100, y: 200}) === JSON.stringify({x: 100, y: 200}));

	/*var david = new Mon("Defed");
	david.segeHal();*/
}
