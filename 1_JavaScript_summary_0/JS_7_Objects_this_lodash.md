### 객체의 정의와 특징

- 객체는 속성(property)의 집합이며, 중괄호 내부에 key와 value의 쌍으로 표현
- key는 문자열 타입만 가능
  - (참고) key 이름에 띄어쓰기 등의 구분자가 있으면 따옴표로 묶어서 표현
- value는 모든 타입(함수포함) 가능
- 객체 요소 접근은 점 또는 대괄호로 가능
  - (참고) key 이름에 띄어쓰기 같은 구분자가 있으면 대괄호 접근만 가능

### 객체와 메서드

- 메서드는 객체의 속성이 참조하는 함수.
- 객체.메서드명()으로 호출 가능.
- 메서드 내부에서는 this 키워드가 객체를 의미함.

### 객체 관련 ES6 문법 익히기

- ES6에 새로 도입된 문법들로 객체 생성 및 조작에 유용하게 사용 가능
  - 속성명 축약
  - 메서드명 축약
  - 계산된 속성명 사용하기
  - 구조 분해 할당
    - (참고) 구조 분해 할당은 배열도 가능함
  - 객체 전개 구문(Spread Operator)

1. 속성명 축약
   - 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 예시와 같이 축약 가능
2. 메서드명 축약
   - 메서드 선언 시 function 키워드 생략 가능
3. 계산된 속성
   - 객체를 정의할 때 key의 이름을 표현식을 이용하여 동적으로 생성 가능
4. 구조 분해 할당
   - 배열 또는 객체를 분해하여 속성을 변수에 쉽게 할당할 수 있는 문법
5. Spread operator
   - spread operator(...)를 사용하면 객체 내부에서 객체 전개 가능.
   - ES5까지는 Object.assign() 메서드를 사용.
   - 얕은 복사에 활용 가능.

### JSON(JavaScript Object Notation)

- key-value쌍의 형태로 데이터를 표기하는 언어 독립적 표준 포맷
- 자바스크립트의 객체와 유사하게 생겼으나 실제로는 문자열 타입
  - 따라서 JS의 객체로써 조작하기 위해서는 구문 분석(parsing)이 필수
- 자바스크립트에서는 JSON을 조작하기 위한 두 가지 내장 메서드를 제공
  - JSON.parse( )
    - JSON => 자바스크립트 객체
  - JSON.stringify( )
    - 자바스크립트 객체 => JSON

----

### this 정리

- JS의 this는 실행 문맥(execution context)에 따라 다른 대상을 가리킨다.
- class 내부의 생성자(constructor)함수
  - this는 생성되는 객체를 가리킴(Python의 self)
- 메서드(객체.메서드명() 으로 호출 가능한 함수)
  - this는 해당 메서드가 소속된 객체를 가리킴
- 위의 두가지 경우를 제외하면 모두 최상위 객체(window)를 가리킴.

Summary

- 함수 내부에 this 키워드가 존재할 경우
  - 화살표 함수와 function 키워드로 선언한 함수가 다르게 동작
- 함수 내부에 this 키워드가 존재하지 않을 경우
  - 완전히 동일하게 동작

----

### lodash

- A modern JavaScript utility library
  - 모듈성, 성능 및 추가 기능을 제공하는 JavaScript 유틸리티 라이브러리
  - array, object등 자료구조를 다룰 때 사용하는 유용하고 간편한 유틸리티 함수들을 제공
  - 함수 예시
    - reverse, sortBy, range, random, cloneDeep, ...
