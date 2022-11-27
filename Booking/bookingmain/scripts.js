// ------------Khám thường, dịch vụ----------------------
function khamThuong() {
	document.getElementById('selectKhamDichVu').style.display = "none";
	document.getElementById('selectKhamThuong').style.display = "block";

}
function khamDichVu() {
document.getElementById('selectKhamThuong').style.display = "none";
document.getElementById('selectKhamDichVu').style.display = "block";
}

// function getValue() {
// var datetime = document.getElementById("mydatetime").value;
// alert(datetime);
// }

var booking1 = document.querySelector(".booking1");
var booking2 = document.querySelector(".booking2");
// var form_3 = document.querySelector(".form_3");


var buttonBooking1 = document.querySelector(".buttonBooking1");
var form_2_btns = document.querySelector(".form_2_btns");
// var form_3_btns = document.querySelector(".form_3_btns");
var form_1_next_btn = document.querySelector(".buttonBooking1 .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
// var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var booking2Progessbar = document.querySelector(".booking2Progessbar");
// var booking3Progessbar = document.querySelector(".booking3Progessbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	booking1.style.display = "none";
	booking2.style.display = "block";

	buttonBooking1.style.display = "none";
	form_2_btns.style.display = "flex";

	booking2Progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	booking1.style.display = "block";
	booking2.style.display = "none";

	buttonBooking1.style.display = "flex";
	form_2_btns.style.display = "none";

	booking2Progessbar.classList.remove("active");
});

// form_2_next_btn.addEventListener("click", function(){
// 	booking2.style.display = "none";
// 	// form_3.style.display = "block";

// 	// form_3_btns.style.display = "flex";
// 	form_2_btns.style.display = "none";

// 	// booking3Progessbar.classList.add("active");
// });

// form_3_back_btn.addEventListener("click", function(){
// 	booking2.style.display = "block";
// 	form_3.style.display = "none";

// 	form_3_btns.style.display = "none";
// 	form_2_btns.style.display = "flex";

// 	booking3Progessbar.classList.remove("active");
// });

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
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
