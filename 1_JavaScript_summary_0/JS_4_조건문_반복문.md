### 조건문의 종류와 특징

- ' if ' statement
  - 조건 표현식의 결과값을 Boolean 타입으로 변환 후 참/거짓을 판단
- ' switch ' statement
  - 조건 표현식의 결과값이 어느 값(case)에 해당하는지 판별
  - (참고) 주로 특정 변수의 값에 따라 조건을 분기할 때 활용
    - 조건이 많아질 경우 if문보다 가독성이 나을 수 있음

----

- ' if ' statement

  - if, else if, else

    - 조건은 소괄호(condition) 안에 작성

    - 실행할 코드는 중괄호{} 안에 작성

    - 블록 스코프 생성

    - 예시

      ```javascript
      const nation = 'Korea'
      
      if (nation === 'Korea') {
          console.log('안녕하세요!')
      } else if (nation === 'France') {
          console.log('Bonjour!')
      } else {
          console.log('Hello!')
      }
      ```

- ' switch ' statement

  - switch

    - 표현식(expression)의 결과값을 이용한 조건문

    - 표현식의 결과값과 case문의 오른쪽 값을 비교

    - break 및 default문은 [선택적]으로 사용 가능

    - break문이 없는 경우 break문을 만나거나 default문을 실행할 때까지 다음 조건문 실행

    - 블록 스코프 생성

    - 예시

      ```javascript
      const nation = 'Korea'
      
      switch(nation) {
          case 'Korea': {
              console.log('안녕하세요!')
              break
          }
          case 'France': {
              console.log('Bonjour!')
              break
          }
          default: {
              console.log('Hello!')
          }
      }
      ```

----

### 반복문의 종류와 특징

- while
- for
- for...in
  - 주로 객체(object)의 속성들을 순회할 때 사용
  - 배열도 순회 가능하지만 인덱스 순으로 순회한다는 보장이 없으므로 권장하지 않음
- for...of
  - 반복 가능한(iterable) 객체를 순회하며 값을 꺼낼 때 사용
    - 반복 가능한(iterable) 객체의 종류: Array, Map, Set, String 등

----

- while

  - 조건문이 참(true)인 동안 반복 시행

  - 조건은 소괄호 안에 작성

  - 실행할 코드는 중괄호 아넹 작성

  - 블록 스코프 생성

  - 예시

    ```javascript
    let i = 0
    
    while (i < 6) {
        console.log(i) // 0, 1, 2, 3, 4, 5
        i += 1
    }
    ```

- for

  - 세미콜론(;)으로 구분되는 세 부분으로 구성

  - initialization

    - 최초 반복문 진입 시 1회만 실행되는 부분

  - condition

    - 매 반복 시행 전 평가되는 부분

  - expression

    - 매 반복 시행 이후 평가되는 부분

  - 블록 스코프 생성

  - 예시

    ```javascript
    for (let i=0; i<6; i++) {
        console.log(i) // 0, 1, 2, 3, 4, 5
    }
    ```

- for...in

  - 객체(object)의 속성(key)들을 순회할 때 사용

  - 배열도 순회 가능하지만 권장하지 않음

  - 실행할 코드는 중괄호 안에 작성

  - 블록 스코프 생성

  - 예시

    ```javascript
    const capitals = {
        korea: 'seoul',
        france: 'paris',
        USA: 'washington D.C.'
    }
    
    for (let capital in capitals) {
        console.log(capital) // korea, france, USA
    }
    ```

- for...of

  - 반복 가능한(iterable) 객체를 순회하며 값을 꺼낼 때 사용

  - 실행할 코드는 중괄호 안에  작성

  - 블록 스코프 생성

  - 예시

    ```javascript
    const fruits = ['딸기', '바나나', '메론']
    
    for (let fruit of fruits) {
        fruit = fruit + '!'
        console.log(fruit)
    }
    
    for (const fruit of fruits) {
        // fruit 재할당 불가
        console.log(fruit)
    }
    ```

  - (참고) for...in 은 객체 순회 적합 , for...of 는 배열 순회 적합

### 조건문과 반복문 정리

| 키워드   | 종류   | 연관 키워드           | 스코프      |
| -------- | ------ | --------------------- | ----------- |
| if       | 조건문 | -                     | 블록 스코프 |
| switch   | 조건문 | case, break, default  | 블록 스코프 |
| while    | 반복문 | break, continue       | 블록 스코프 |
| for      | 반복문 | break, continue       | 블록 스코프 |
| for...in | 반복문 | 객체 순회             | 블록 스코프 |
| for...of | 반복문 | 배열 등 Iterable 순회 | 블록 스코프 |
