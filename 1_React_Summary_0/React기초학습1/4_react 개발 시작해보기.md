### React로 Front-End 개발 시작해보기

----

### 목차

- Why ~ How

- CRA

- useState

- component

- DataGrid

----

### Why?

- 눈에 안들어오는 코드의 난해함
  
  - vue랑 비교했을 때 vue는 template부분, script부분 등 잘 구별이 되어있지만 React는 함수라는 큰 덩어리 안에 리턴값에 html 같은 게 들어가는데 이게 JSX 문법이 쓰임.

### How?

- CRA (Create React App)
  
  - 커스터마이징 하긴 까다로움.
  
  - 접근성 키우기 위한 툴로 default값이 많이 있음.
  
  - babel, webpack 라이브러리가 들어 있음.
  
  - 실무에선 안 쓰일 가능성이 있음. 왜냐하면 실무에서는 직접 처음부터 커스터마이징을 하기 위해 작업하지 default가 많이 되어있는 걸 선호하진 않음.

----

### 설치 및 시작

- Nodejs 설치

- CRA 설치
  
  - 설치 희망 path 이동
  
  - `npx create-react-app testpjt`
    
    - 맨 뒷 부분은 project name 들어감
  
  - npx는 npm이 버젼 업돼서 쓰인 명령어로 크게 신경쓸 필요 없음.

- `npm start`를 통해 잘 실행 되는지 확인

----

### 파일 유형

- 실제 필요한 부분만 injection을 통해 제공
  
  - 렌더링시에 깜빡이는 거나 그런거 없이 진행 됨.

### 테이블 생성 & 데이터 적용

- React 문법
  
  - 대부분의 Object 표현 방식 -> 중괄호 사용!! `{ }`

----

### React의 대표적인 hook 기능

- useState
  
  - 이거 엄청 많이 쓰임!
  
  - 객체, 대체값
  
  - import 해줘야 함.

----

### 컴포넌트

- 별도 파일로도 분리할 수 있지만

- function으로 구분할 수도 있음

- props 개념 필요
  
  - 컴포넌트 이용할 때 props 이용

#### MUI 설치해서 DataGrid 이용??

- import해줘야 함.

- DataGrid는 구현되어있는 컴포넌트로 필요하면 이용하기

- 체크박스 등도 있음.

- 이 부분은 관리자페이지에 적용되도 좋을 거 같음.


