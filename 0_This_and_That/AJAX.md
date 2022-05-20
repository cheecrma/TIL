```javascript
console.log('Hi')

setTimeout(function ssafy () {
    console.log('SSAFY')
}, 3000)

console.log('Bye')
```

promise-style

- Modern Web APIs에서의 새로운 코드 스타일
- XMLHttpRequest 객체를 사용하는 구조보다 조금 더 현대적인 버전

----

Promise는 객체인데 3가지 상태가 있음

- pending
- fulfilled
- rejected

모든 promise의 맨처음 상태는 pending 이며 성공하면 fulfilled 상태로 실패하면 rejected 상태로 됨

----

JSON 은 데이터의 형식을 맞춘 문자열임

문자열을 자바스크립트 오브젝트로 변환해서 쓰고싶으면 파싱메소드를 사용해서 바꿔줘야함

axios에선 자동으로 오브첵트로 바꿔주는 거 까지 해줌



then메서드든 catch메서드든 항상 promise를 리턴함

1. promise 객체를 리턴하는 경우
   - 리턴하는 promise 객체와 동일한 작업 성공 결과와 상태를 갖게 됨
2. promise 객체가 아닌 값을 리턴 하는 경우
   - 숫자, 문자열, 객체 ... -> fulfilled 상태를 가짐 (성공)
3. promise 객체가 아무런 값도 리턴하지 않는 경우
   - undefined가 리턴 됨 -> fulfilled 상태를 가짐 (성공)

----

- before
  - XMLHttpRequest()

- ES6
  - fetch

- ES8
  - Async/Await
