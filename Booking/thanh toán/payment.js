	var count = 180;
	var redirect = "../bookingmain/booking.html";
	function countDown(){
		var timer = document.getElementById("timer");
		if(count > 0){
			count--;
			timer.innerHTML = "Hết hạn thanh toán trong <b>"+count+"</b> giây.";
			setTimeout("countDown()", 1000);
		}else{
			window.location.assign('../bookingmain/booking.html');
		}
	}



