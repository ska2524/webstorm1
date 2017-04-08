/**
 * Created by JSK on 2017-04-07.
 */

console.log("hello");

var arr = ["A", "B", "C", "D", "E", "F", "G"];

var target = "C";

var idx = arr.indexOf(target); //인덱스 꺼내기

arr.splice(idx, 1); //번쨰, 갯수

console.log(arr.join(" , "));