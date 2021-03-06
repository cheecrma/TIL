### 함수 in JavaScript

- 참조 타입 중 하나로써 function 타입에 속함
- JavaScript에서 함수를 정의하는 방법은 주로 2가지로 구분
  - 함수 선언식 (function declaration)
  - 함수 표현식 (function expression)
- (참고) JavaScript의 함수는 일급 객체(First-class citizen)에 해당
  - 일급 객체: 다음의 조건들을 만족하는 객체를 의미함
    - 변수에 할당 가능
    - 함수의 매개변수로 전달 가능
    - 함수의 반환 값으로 사용 가능

### 함수 선언식

- 함수의 이름과 함께 정의하는 방식

- 3가지 부분으로 구성

  - 함수의 이름(name)

  - 매개변수 (args)

  - 몸통 (중괄호 내부)

    ```javascript
    function name(args) {
        // do something
    }
    ```

### 함수 표현식

- 함수를 표현식 내에서 정의하는 방식

  - (참고) 표현식: 어떤 하나의 값으로 결정되는 코드의 단위

- 함수의 이름을 생략하고 익명 함수로 정의 가능

  - 익명 함수(annonymous function): 이름이 없는 함수
  - 익명 함수는 함수 표현식에서만 가능

- 3가지 부부능로 구성

  - 함수의 이름 (생략 가능)

  - 매개변수 (args)

  - 몸통 (중괄호 내부)

    ```javascript
    const name = function (args){
        //do something
    }
    ```

### 기본 인자(default arguments)

- 인자 작성 시 '='문자 뒤 기본 인자 선언 가능
- 매개변수와 인자의 개수 불일치 허용
- Rest Parameter
  - rest parameter(...)를 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받음 (python 의 args 와 유사)
  - 만약 rest parameter로 처리한 매개변수에 인자가 넘어오지 않을 경우에는 빈 배열로 처리
- Spread operator
  - spread operator(...)를 사용하면 배열 인자를 전개하여 전달 가능

----

### 함수 선언식과 표현식

함수의 타입

- 선언식 함수와 표현식 함수 모두 타입은 function으로 동일

호이스팅(hoisting) - 함수 선언식

- 함수 선언식으로 선언한 함수는 var로 정의한 변수처럼 hoisting 발생
- 함수 호출 이후에 선언 해도 동작

호이스팅(hoisting) - 함수 표현식

- 반면 함수 표현식으로 선언한 함수는 함수 정의 전에 호출 시 에러 발생
- 함수 표현식으로 정의된 함수는 변수로 평가되어 변수의 scope 규칙을 따름
- (참고) 함수 표현식을 var 키워드로 작성한 경우, 변수가 선언 전 undefined로 초기화 되어 다른 에러가 발생

----

### 화살표 함수 (Arrow Function)

- 함수를 비교적 간결하게 정의할 수 있는 문법

- function 키워드 생략 가능

- 함수의 매개변수가 단 하나 뿐이라면, '( )'도 생략 가능

- 함수 몸통이 표현식 하나라면 '{ }'과 return도 생략 가능

  ```javascript
  const arrow1 = function (name) {
      return 'hello, ${name}'
  }
  
  //1. function 키워드 삭제
  const arrow2 = (name) => {return 'hello, ${name}'}
  
  //2. 매개변수가 1개일 경우에만 ( ) 생략 가능
  const arrow3 = name => {return 'hello, ${name}'}
  
  //3. 함수 바디가 return을 포함한 표현식 1개일 경우에 { } & return 삭제 가능
  const arrow4 = name => 'hello, ${name}'
  ```
