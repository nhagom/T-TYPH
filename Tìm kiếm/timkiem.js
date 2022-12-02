function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}









// let products = {
//   data: [
//     {
//       productName: "Đau lưng bên phải là bệnh gì? Triệu chứng, chẩn đoán và điều trị",
//       image: "./timkiem/đau bụng.png",
//       link: "../Tintuc/dau_L.html"
//     },
//     {
//       productName: "6 mẹo hay giảm ngay sôi bụng",
//       image: "./timkiem/sôi bụng.jpg",
//     },
//     {
//       productName: "Sporty SmartWatch",
//       image: "sporty-smartwatch.jpg",
//     },
//     {
//       productName: "Basic Knitted Top",
//       image: "knitted-top.jpg",
//     },
//     {
//       productName: "Black Leather Jacket",
//       image: "black-leather-jacket.jpg",
//     },
//     {
//       productName: "Stylish Pink Trousers",
//       image: "pink-trousers.jpg",
//     },
//   ],
// };
// //nhấn enter
// var input = document.getElementById("search-input");
// input.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("search").click();
//   }
// });

// // ---------------link---------------------------------------------
// for (let i of products.data) {
//   //Tạo thẻ
//   let card = document.createElement("div");
//   //Thẻ phải có danh mục và ban đầu sẽ được ẩn
//   card.classList.add("card", i.category, "hide");
//   //image div
//   let imgContainer = document.createElement("div");
//   imgContainer.classList.add("image-container");
//   //img tag
//   let image = document.createElement("img");
//   image.setAttribute("src", i.image);
//   imgContainer.appendChild(image);
//   card.appendChild(imgContainer);
//   //container
//   let container = document.createElement("div");
//   container.classList.add("container");
//   //product name
//   let name = document.createElement("h5");
//   name.classList.add("product-name");
//   name.innerText = i.productName.toUpperCase();
//   container.appendChild(name);
//   card.appendChild(container);
//   document.getElementById("products").appendChild(card);
// }

// // tham số được truyền từ nút (Tham số giống với danh mục)
// function filterProduct(value) {
//   //chọn tất cả các thẻ
//   let elements = document.querySelectorAll(".card");
//   //lặp qua tất cả các thẻ
//   elements.forEach((element) => {
//     //hiển thị tất cả các thẻ khi nhấp vào nút 'tất cả'
//     if (value == "all") {
//       element.classList.remove("hide");
//     } else {
//       //Kiểm tra xem phần tử có chứa lớp danh mục không
//       if (element.classList.contains(value)) {
//         //phần tử hiển thị dựa trên danh mục
//         element.classList.remove("hide");
//       } else {
//         //ẩn các yếu tố khác
//         element.classList.add("hide");
//       }
//     }
//   });
// }

// //Search button click
// document.getElementById("search").addEventListener("click", () => {
//   //khởi tạo
//   let searchInput = document.getElementById("search-input").value;
//   let elements = document.querySelectorAll(".product-name");
//   let cards = document.querySelectorAll(".card");
//   //lặp qua tất cả các phần tử
//   elements.forEach((element, index) => {
//     //kiểm tra xem văn bản có bao gồm giá trị tìm kiếm không
//     if (element.innerText.includes(searchInput.toUpperCase())) {
//       //hiển thị thẻ phù hợp
//       cards[index].classList.remove("hide");
//     } else {
//       //hide others
//       cards[index].classList.add("hide");
//     }
//   });
// });

// //Ban đầu hiển thị tất cả các sản phẩm
// window.onload = () => {
//   filterProduct("all");
// };

// function load() {
//   fetch("./products.json")
//     .then(function (data) {
//       let html = "";
//       for (let link of data) {
//         html += "<div>";
//         html +=
//           "<a href='../Tintuc/dau_L.html'> <image class='img' src='./timkiem/đau bụng.png" +
//         link.thumb +
//           " '/> </a> <br/>";
//         html += link.productName;
//         html += "</div>";
//       }
//       document.getElementById("content").innerHTML = html;
//     })
// }


