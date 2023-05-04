//함수선언문
//function hello() {}
//함수표현식
//const hello = function () {}

//호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상을 말함
hello();

function hello() {
  console.log("hello");
} //호이스팅으로 인해서 선언부가 유효범위 최상단으로 올라감, 선언문 형태만 가능하고 표현식이면 호이스팅 발생이 안됨

//반환 및 종료
function Hello() {
  return "Hello";
}
console.log(Hello());

//매개변수
function sum(a, b = 0) {
  //매개변수로 들어올 인수가 없을때(undefined), b기본값을 0으로 지정
  return a + b;
}
console.log(sum(1, 2));
console.log(sum(7));

//구조 분해 할당
const user = {
  name: "ben",
  age: "27",
  email: "ggg@gmail.com",
};
function getName({ name }) {
  //구조분해할당을 통한 반환
  //const { name } = user;
  return name;
  //   return user.name;
}
function getEmail({ email = " no e-mail " }) {
  //email이 객체에 없는경우, 기본값 설정
  return email;
}
console.log(getName(user));
console.log(getEmail(user));

const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5, 6, 7];
//배열 구조 분해 할당
function getSecondItem([, b]) {
  return b;
  //   return array[1];
}
console.log(getSecondItem(fruits));
console.log(getSecondItem(numbers));

//나머지 매개변수(전개연산자 사용, 모든 인수를 배열로 받음)
function sum(...rest) {
  console.log(rest);
  console.log(arguments); //arguments = > 유사배열, 배열데이터는 아님

  return rest.reduce(function (acc, cur) {
    //callback함수
    return acc + cur;
  }, 0);
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//화살표함수
// const arrow = () => {}

// function sum(a,b){
//     return a+ b
// }
//화살표함수와 기존 함수의 차이점
//return으로 로직이 시작되는 경우, return과 {}를 생략할 수 있음
const arrowSum = (a, b) => a + b;
console.log(arrowSum(1, 2));
console.log(arrowSum(10, 20));

//화살표함수 특성
const a = () => {}; //변수에 할당 해야함
const b = (x) => {}; //매개변수가 1개이면 소괄호 생략 가능
const c = (x, y) => {};
const d = (x) => {
  return x * x;
};
const e = (x) => x * x; //return으로 시작하면 중괄호, return 생략 가능
const f = (x) => {
  console.log(x);
  return x * x;
}; //return으로 시작하지 않기 때문에, 중괄호와 return을 생략할 수 없음
const g = () => {
  return { a: 1 };
};
const h = () => ({ a: 1 }); //객체를 return하는 경우에는 return과 동일하기 때문에, ()로 묶어주어야함
const i = () => {
  return [1, 2, 3];
};
const j = () => [1, 2, 3]; //배열은 []를 사용하기 때문에 return, 중괄호 생략가능

//즉시 실햄 함수(IIFE, Immediately-Invoked Function Expression)
const aa = 7;
const double = () => {
  console.log(aa * 2);
};

double();

//별도의 호출없이 함수 사용
(() => {
  console.log(aa * 2);
})();

//즉시실행함수 사용 패턴
(() => {})(); //(F)()
(function () {})(); //(F)()
(function () {})()(); //(F())
!(function () {})(); //!F()
+(function () {})(); //+F()
