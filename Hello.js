/**
 * Created by JSK on 2017-04-06.
 */

// for(var i=0; i<10; i++){
//     console.log("value: " + i);
// }

    //---------2단계
// var target = document.getElementById("sample");
//
// console.log(target);
// console.dir(target);
//
// target.innerText="Good Bye";
var a = (Math.random() * 5) + 1
var btnOBJ = document.getElementById("btn");
var img = document.getElementById("img");
//이벤트가 나타나면 실행해주세요
if (a = 3) {
    btnOBJ.addEventListener("click", function () {


        alert("clicked ");
        img = "aaaa.jpg";


    });
}

function fn() {

    console.log(a)

}
fn();