var currentTab = 0; // Tab hiện tại được đặt thành tab đầu tiên (0)
showTab(currentTab); //Hiển thị tab hiện tại

function showTab(n) {
  // Hàm này sẽ hiển thị tab được chỉ định của biểu mẫu...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... và sửa lỗi Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Hoàn tất";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... và chạy một chức năng sẽ hiển thị chỉ báo bước chính xác:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // Chức năng này sẽ tìm ra tab nào sẽ hiển thị
  var x = document.getElementsByClassName("tab");
  // Thoát chức năng nếu bất kỳ trường nào trong tab hiện tại không hợp lệ:
  if (n == 1 && !validateForm()) return false;
  // Ẩn tab hiện tại:
  x[currentTab].style.display = "none";
  // Tăng hoặc giảm tab hiện tại thêm 1:
  currentTab = currentTab + n;
  // nếu bạn đã đến cuối biểu mẫu ...
  if (currentTab >= x.length) {
    // ...  biểu mẫu được gửi:
    document.getElementById("regForm").submit();
    return false;
  }
  // Nếu không, hãy hiển thị đúng tab:
  showTab(currentTab);
}

function validateForm() {
  // Hàm này liên quan đến việc xác thực các trường biểu mẫu
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Một vòng lặp kiểm tra mọi trường đầu vào trong tab hiện tại:
  for (i = 0; i < y.length; i++) {
    // Nếu một trường trống ...
    if (y[i].value == "") {
      // thêm một lớp "không hợp lệ" vào trường:
      y[i].className += " invalid";
      // và đặt trạng thái hợp lệ hiện tại thành false
      valid = false;
    }
  }
  // Nếu trạng thái hợp lệ là đúng, hãy đánh dấu bước là đã hoàn thành và hợp lệ:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; //trả lại trạng thái hợp lệ
}

function fixStepIndicator(n) {
  // Hàm này loại bỏ lớp "hoạt động" của tất cả các bước...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... và thêm lớp "hoạt động" vào bước hiện tại:
  x[n].className += " active";
}



// ------------Khám thường, dịch vụ----------------------
function khamThuong() {
	document.getElementById('selectKhamDichVu').style.display = "none";
	document.getElementById('selectKhamThuong').style.display = "block";

}
function khamDichVu() {
document.getElementById('selectKhamThuong').style.display = "none";
document.getElementById('selectKhamDichVu').style.display = "block";
}
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
// ----------------------done--------
// var buttonDone = document.querySelector(".buttonDone");
// var notifyWrap = document.querySelector(".notifyWrap");
// var notifyShadow = document.querySelector(".notifyShadow");

// buttonDone.addEventListener("click", function(){
// 	notifyWrap.classList.add("active");
// })

// notifyShadow.addEventListener("click", function(){
// 	notifyWrap.classList.remove("active");
// })
