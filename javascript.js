//29.Removing array item by index
let indexForRemoval = 3;
let numArray = [1,4,9,16,25];
numArray.splice(indexForRemoval,1);
console.log(numArray);

//30.Inserting item at specific position
function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;
    arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();

//9.Array spreading
const arr1=[1,2,3,4];
const arr2=[5,6,7,8,];
const combine=[...arr1,...arr2];
console.log(combine);

//32.Longest String in an array
let arr = [
    "I am a fullstack developer",
    "I am learning java",
    "I am learning html"
];
function longestString() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());



//33.Array rotation
let Arr = ['a','b','c','d'];
function arrayRotate(arr) {
	arr.unshift(arr.pop());
	return arr;
}
function alpha() {
	let rotateArr = arrayRotate(Arr);
	console.log(rotateArr);
}
alpha();
