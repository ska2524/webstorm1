/**
 * Created by JSK on 2017-04-07.
 */

function outer() {

    var outernum = 10;

    function inner() {

        var innernum = 100;

        return innernum;
    }

    inner();

    var result = inner();

    console.log(outernum + ":" + result);

}


// 자바스크립트의 함수를 따라간다.
// //일단 읽은 다음에 문->식이 처리과정
//
// function doA(check) {
//
//     var value1 = "AAA";
//
//     if(check){
//         var value2 = "BBB";
//     }
//
//     console.log(value1 +" : "+ value2);
//
// }
// doA(true)
// doA(false)

