## Axios의 모든 것

- 브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리

##### Axios 란?

- Axios는 node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 임. 동형임. (동일한 코드베이스로 브라우저와 node.js에서 실행할 수 있음.) 서버 사이드에서는 네이티브 node.js의 http 모듈을 사용하고, 클라이언트(브라우저)에서는 XMLHttpRequests를 사용함.

#### 특징

- 브라우저를 위한 XMLHttpRequests 생성

- node.js를 위해 http 요청 생성

- Promise API를 지원

- 요청 및 응답 인터셉트

- 요청 및 응답 데이터 변환

- 요청 취소

- JSON 데이터 자동 변환

- XSRF를 막기위한 클라이언트 사이드 지원
