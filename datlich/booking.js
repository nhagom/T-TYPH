function khamThuong() {
        document.getElementById('selectKhamDichVu').style.display = "none";
        document.getElementById('selectKhamThuong').style.display = "block";
    
}
function khamDichVu() {
    document.getElementById('selectKhamThuong').style.display = "none";
    document.getElementById('selectKhamDichVu').style.display = "block";
}
function getValue() {
    var datetime = document.getElementById("mydatetime").value;
    alert(datetime);
}