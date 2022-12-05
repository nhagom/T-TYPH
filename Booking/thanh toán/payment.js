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
	// -----------
	function openModel() {
		document.getElementById('modalBox').style.display="block";
	}
	function closeModel() {
		document.getElementById('modalBox').style.display='none';
	}
// -------------------------


	// --------------
	// Get the modal
var modal = document.getElementById('modalBox');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



