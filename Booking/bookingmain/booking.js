// ------------Khám thường, dịch vụ----------------------
function khamThuong() {
	document.getElementById('selectKhamDichVu').style.display = "none";
	document.getElementById('selectKhamThuong').style.display = "block";

}
function khamDichVu() {
document.getElementById('selectKhamThuong').style.display = "none";
document.getElementById('selectKhamDichVu').style.display = "block";
}
// -----------------đặt lịch-----------------------------------
var booking1 = document.querySelector(".booking1");
var booking2 = document.querySelector(".booking2");

var buttonBooking1 = document.querySelector(".buttonBooking1");
var buttonBooking2 = document.querySelector(".buttonBooking2");
var form_1_next_btn = document.querySelector(".buttonBooking1 .buttonNext");
var form_2_back_btn = document.querySelector(".buttonBooking2 .buttonBack");
var form_2_next_btn = document.querySelector(".buttonBooking2 .buttonNext");

var booking2Progessbar = document.querySelector(".booking2Progessbar");

var buttonDone = document.querySelector(".buttonDone");
var notifyWrap = document.querySelector(".notifyWrap");
var notifyShadow = document.querySelector(".notifyShadow");

form_1_next_btn.addEventListener("click", function(){
	booking1.style.display = "none";
	booking2.style.display = "block";

	buttonBooking1.style.display = "none";
	buttonBooking2.style.display = "flex";

	booking2Progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	booking1.style.display = "block";
	booking2.style.display = "none";

	buttonBooking1.style.display = "flex";
	buttonBooking2.style.display = "none";

	booking2Progessbar.classList.remove("active");
});

buttonDone.addEventListener("click", function(){
	notifyWrap.classList.add("active");
})

notifyShadow.addEventListener("click", function(){
	notifyWrap.classList.remove("active");
})
// -------------Payment-----------------
var coll = document.getElementsByClassName("buttonPayment");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
;
    var listPayment = this.nextElementSibling;
    if (listPayment.style.display === "block") {
		listPayment.style.display = "none";
    } else {
		listPayment.style.display = "block";
    }
  });
}



