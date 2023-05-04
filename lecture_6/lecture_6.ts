// live server는 간단한 개발용이므로 parcel을 이용해서 Test진행함

// 현재 프로젝트에서만 parcel을 사용하겠다고 pacekage를 작성했기 때문에 터미널에서
// 직접적으로 parcel 명령어를 사용할 수 없음

// package.json에서 "dev": "parcel ./index.html"라고 스크립트를 작성해서 동작 가능하게 함

// 별도의 스크립트를 사용해야 터미널에서 parcel을 이용할 수 있음

// 스크립트의 이름을 dev라고 작성 했기 때문에 npm run dev 를 통해서 터미널에서 실행

// 실제 서비스를 위한 build를 할때는 json에서 스크립트를 작성할 때 "build": parcel build "./index.html"처럼
// build를 추가해야 하며, 이때는 효율성을 위해서 난독화가 진행됨

import _ from "lodash";

console.log(_.upperCase("hello-world"));

interface User {
  name: String;
  age: number;
}

const user: User = {
  name: "Ben",
  age: 26,
};
