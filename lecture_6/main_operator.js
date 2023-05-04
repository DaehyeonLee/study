console.log("123");

// 문자열은 "" '' 가능하고 ``를 사용할 수도 있음
// `` 문자열 보다는 보관을 위해 사용함

const string1 = "HELLO";
const string2 = "hello";
const string3 = `hello ${string1} ?!`;

console.log(string3);

const number = 123;

console.log(number + 1);

// 부동소수점 오류
const a = 0.1;
const b = 0.2;
console.log(Number((a + b).toFixed(1)));

//Boolean
const T = true;
const F = false;

if (T) {
  console.log("hello");
}

let age = null;
setTimeout(function () {
  age = 85;
  console.log(age);
}, 1000);

const user = {
  name: "ben",
  age: 27,
};
console.log(user.name, user.age);

//array
const fruits = new Array("apple", "banana", "cherry");
console.log(fruits);

//object
// const userObject = new Object();
// userObject.name = "ben";
// userObject.age = 27;

// console.log(userObject);

// function userObject() {
//   this.name = "ben";
//   this.age = 27;
// }
// const userObj = new userObject();
// console.log(userObj);

const uSerA = {
  name: "ben",
  age: 27,
};
console.log(uSerA.name);

const uSerB = {
  name: "neo",
  age: 22,
  parent: uSerA,
};

console.log(uSerB.parent.name);

users = [uSerA, uSerB];

console.log(users[0], users[1]);

const aa = function () {
  console.log("A");
};

const bb = function (c) {
  console.log(c);
};
bb(1);

//형변환
const NumberA = 1;
const StringB = "1";

console.log(NumberA === StringB); //일치 연산자
console.log(NumberA == StringB); //동등 연산자(형변환)

//참과 거짓
//JS에서는 거의 대부분의 값이 참

//false만 기억하자
//1)false
//2)0
//3)null 명시적으로 아무것도 의미하지 않는 값
//4)undefined 암시적으로 아무것도 의미하지 않는 값
//5)NaN(Not a number)
//6)'' 빈 문자열
//7)0n(BigInt형)

if (true) {
  console.log("참참참");
}

const Fruits = ["apple", "banana"];

if (Fruits.length) {
  console.log("아이템 있음!");
}

//데이터 타입 확인

console.log(typeof "hello" === "string");
console.log(typeof 123 === "number");
console.log(typeof false === "boolean");
console.log(typeof undefined === "undefined");
//null,[],{}는 타입이 object로 되어있어 typeof로 확인이 어려움
console.log(typeof null === "object");
console.log(typeof [] === "object");
console.log(typeof {} === "object");
console.log(typeof function () {} === "function");

console.log([].constructor === Array); //constructor속성을 사용하면 전역함수 표현됨
console.log({}.constructor === Object);

console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

//null data 타입을 확인할 수 없기 때문에 다른 타입도 확인할 수 있는 함수 사용 추천
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));

//할당(asignment)
//const는 재할당이 불가능, 재할당이 필요한 경우에는 let 사용
let A = 3;
A += 3;
A %= 4;
console.log(A);

//동등, 일치

const cc = 1;
const dd = 3;
//동등, 동등연산자는 형변환이 일어나기때문에 일치 연산자 사용을 권장함
console.log(cc == dd);
//부등
console.log(cc != dd);
//일치
console.log(cc === dd);
//불일치
console.log(cc !== dd);

//&&연산자는 제일 먼저 만나는 false 데이터를 반환한다
//&&연산자에서 모두가 참이면 제일 마지막 피연산자를 반환한다.
console.log(1 && 2 && 0);
console.log("A" && "B" && "c");

//||연산자는 제일먼저 만나는 false 데이터를 반환한다.
//||연산자에서 모두가 거짓이면 제일 마지막 피연산자를 반환한다.
console.log(false || 0 || {});
console.log(false || 0 || NaN);

//Nullish 병합

const n = 0;
const num1 = n || 7;
console.log(num1);

//??연산자는 null과 undefined만 false처리
const num2 = n ?? 7;
console.log(num2);

console.log(null ?? 1);
console.log(undefined ?? 2);
console.log(null ?? undefined); //undefined

//삼항연산자
const threeA = 1;

// if(a<2){
//   console.log('참');
// }else{
//   console.log('거짓');
// }
//조건 ? 참 : 거짓
console.log(a < 2 ? "참" : "거짓");

function getAlert(message) {
  return message ? message : "메세지가 존재하지 않습니다";
}
console.log(getAlert("hi"));
console.log(getAlert(""));

//전개연산자(spread operator)
//대괄호만 사라지고 전개됨
const isArray1 = [1, 2, 3];
const isArray2 = [4, 5, 6];
console.log(...isArray1); // 1,2,3

const isArrayConcat = isArray1.concat(isArray2);
console.log(isArrayConcat);
// const isArrayMerge = [isArray1, isArray2];
const isArrayMerge = [...isArray1, ...isArray2];
console.log(isArrayMerge);

//객체데이터에서 전개연산자 사용
const isObj1 = { x: 1, y: 2 };
const isObj2 = { y: 3, z: 4 };
const isObjAssign = Object.assign({}, isObj1, isObj2); //assign(빈객체, 병합할인수1, 병합할인수2)
console.log(isObjAssign); //y값이 덮어쓰임

const isObj = { ...isObj1, ...isObj2 }; //전개연산자사용해서 객체 중괄호 날리고 사용가능
console.log(isObj); //y값이 덮어쓰임

function fn(x, y, z) {
  console.log(x, y, z);
}
//fn(1, 2, 3);
const aaaa = [1, 2, 3];
// fn(aaaa[0],aaaa[1],aaaa[2])
fn(...aaaa); //위처럼 각 아이템별로 줄 필요가없음

//구조 분해 할당
const arr = [1, 2, 3];
// // const aArr = arr[0];
// // const bArr = arr[1];
// const cArr = arr[2];
//배열 구조 분해 할당
// const [aArr,bArr,cArr] = arr
// console.log(aArr, bArr, cArr);
const Arr = [1, 2, 3];
const [aArr, ...rest] = Arr;
console.log(a, rest);

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// const obja = obj.a
// const objb = obj.b
// const objc = obj.c
const { a: benn, objb } = obj; //a에서 데이터를 가지고오되, 이름을 바꿀때 : 사용
const { x = 4, y: ten = 10 } = obj; //x값이 undefined 이면 4가 출력되게 기본값 지정
console.log(benn, x, ten);

//객체 구조 분해 할당
const { c, ...isRest } = obj; //전개해서 구조분해 할당 했기 때문에, obj의 c를 제외한 나머지를 가지고 있는 객체 rest로 재할당됨
console.log(c, isRest);

//선택적 체이닝(Optional Chaining)
//null에서는 .표기법을 사용할 수 없음 이떄, 선택적 체이닝을 사용함("?"사용)
const isUser = null;

console.log(isUser?.name);

const isUserA = {
  name: "ben",
  age: 27,
  address: {
    country: "korea",
    city: "seoul",
  },
};
const isUserB = {
  name: "benny",
  age: "26",
};

function getCity(user) {
  return user.address?.city || "주소가 없습니다";
} //address가 undefined일수도 있기 때문에 에러 발생을 방지하기 위해서 선택적 체이닝 사용

console.log(getCity(isUserA));
console.log(getCity(isUserB));

//continue 현재 반복을 종료하고 다음반복 수행

const isFruts = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < isFruts.length; i++) {
//   console.log(isFruts[i]);
// }
//for of 반복문
for (const rf of isFruts) {
  //of 뒤쪽에는 반복할 배열, 각각의 아이템을 담을 변수를 of 앞쪽에 선언해서 사용가능
  console.log(rf);
}

//for in 반복문
const isuser = {
  name: "ben",
  age: "27",
  isValid: true,
  email: "aaa@naver.com",
};
for (const key in isuser) {
  //배열데이터에는 of, 객체 데이터에는 in키워드 사용
  //객체의 속성은 순서를 보장하지 않기 때문에, 눈에 보이는것과 순서가 다르게 출력될 수 있음
  console.log(key);
  console.log(isuser[key]); //객체의 []표기법으로 반복하면서 출력
}
