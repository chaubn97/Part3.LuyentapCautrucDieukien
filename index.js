//bai 1
var a = parseInt(prompt("nhap so a")) ;
var b = parseInt(prompt("nhap so b")) ;

if(a%b==0){
    console.log("a chia het cho b") ;
}else{
    console.log("a khong chia het cho b")
}

//bai 2 :

var age = prompt("Nhap tuoi cua hoc sinh") ;
if(age<10){
    console.log("Hoc sinh CHUA du dieu kien di hoc")
}else {
    console.log("Hoc sinh du dieu kien di hocj")
}

//bai 3

var int = prompt("Nhap 1 so nguyen") ;
if(a>=0){
    console.log("Day la 1 so duong")
}else{
    console.log("Day la 1 so am")
}

// bai 4
var a = prompt();
var b = prompt();
var c = prompt();
var max ;
function findMax(x,y) {
    if(x >y){
        max = x ;
    }else{
        max = y ;
    }
    return max ;
}

findMax(a,b) ;
findMax(max,c) ;

// bai 5

var dauki= parseInt(prompt(" diem dau ki")) ;
var giuaki = parseInt(prompt("diem giua ki"));
var cuoiki = parseInt(prompt("Diem cuoi ki"));

var ave = (dauki + giuaki + cuoiki)/3 ;

if(ave>0 && ave < 5){
    console.log("Hoc luc yeu")
}else if(ave>=5 && ave < 8 ){
    console.log("Hoc luc trung binh")
}else if(ave>=8&& ave<=10){
    console.log("hoc luc gioi")
}else{
    console.log("Nhap sai diem")
}

//bai 6

var kh1 = parseInt(prompt("Doanh so kh 1"));
var kh2 = parseInt(prompt("Doanh so kh 2"));
var kh3 = parseInt(prompt("Doanh so kh 3"));

var sum =(kh1+kh2 +kh3 );

var prosvision = sum * 15/100 ;
console.log("your provision is " + prosvision);

//bai 7
var eConsumtion = parseInt(prompt("Nhap so dien")) ;
var tongSoTien = 0 ;

if(eConsumtion>0 && eConsumtion<= 1000){
    tongSoTien = tongSoTien+ eConsumtion*2000 ;
}else if(eConsumtion>1000 && eConsumtion<= 2000){
    tongSoTien = tongSoTien+ eConsumtion*2500 ;
}else if(eConsumtion>2000 ){
    tongSoTien = tongSoTien+ eConsumtion*3000 ;
}else{console.log("Nhap 1 so duong")}

console.log("Tong so tien"+ tongSoTien) ;