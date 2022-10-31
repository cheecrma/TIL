## Hook 소개

- Hook은 React 버전 16.8부터 React 요소로 새로 추가되었음.

- Hook은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줌.

- Hook을 통해 서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용할 수 있음. (구독 설정 및 데이터를 불러오는 것과 같은 로직)

---

## Hook 개요

`useState`는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공함.

이 함수를 이벤트 핸들러나 다른 곳에서 호출할수 있음.

`useState`는 인자로 초기 state 값을 하나 받음.

---

#### 여러 state 변수 선언하기

하나의 컴포넌트 내에서 State Hook을 여러 개 사용할 수 있음.

---

### Effect Hook

- `useEffect`는 함수 컴포넌트 내에서 side effects를 수행할 수 있게 해줌

- `useEffect`를 사용하면, React는 DOM을 바꾼 뒤에 "effect" 함수를 실행할 것임. Effects는 컴포넌트 안에 선언되어있기 때문에 props와 state에 접근할 수 있음.
  
  - 기본적으로 React는 매 렌더링 이후에 effects를 실행 함.

- `useState`와 마찬가지로 컴포넌트 내에서 여러 개의 effect를 사용할 수 있음.

---

### Hook 사용 규칙

- 최상위(at the top level)에서만 Hook을 호출해야 함. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하면 안됨.

- React 함수 컴포넌트 내에서만 Hook을 호출해야 함. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됨.(Hook을 호출할 수 있는 곳이 딱 한군데 더 있음. 바로 직접 작성한 custom Hook 내임.)

- 이 규칙들을 강제하기 위해서 `linter plugin`을 제공하고 있음. Hook이 제대로 동작하기 위해서 필수적인 조건임.

### 나만의 Hook 만들기

- 개발을 하다 보면 가끔 상태 관련 로직을 컴포넌트 간에 재사용하고 싶은 경우가 생김. 이 문제를 해결하기 위해 Custom Hook을 활용.

- `useState`와 `useEffect` Hook을 사용한 컴포넌트 로직을 다른 컴포넌트에서도 재사용한다면 우선 custom Hook으로 뽑아냄.

- 이 Hook은 해당 인자로 받아서 상태를 반환해줌.

- 각 컴포넌트의 state는 완전히 독립적임. Hook은 state 그 자체가 아니라, 상태 관련 로직을 재사용하는 방법임. 실제로 각각의 Hook 호출은 완전히 독립된 state를 가짐. 그래서 심지어는 한 컴포넌트 안에서 같은  custom Hook을 두 번 쓸 수도 있음.

- Custom Hook은 기능이라기보다는 컨벤션(convention)에 가까움.
  
  - 이름이 "use"로 시작하고, 안에서 다른 Hook을 호출한다면 그 함수를 custom Hook이라고 부를 수 있음. `useSomething`이라는 네이밍 컨벤션은 linter 플러그인이 Hook을 인식하고 버그를 찾을 수 있게 해줌.

- 폼 핸들링, 애니메이션, 선언적 구독(declarative subscriptions), 타이머 등 많은 경우에 custom Hook을 사용할 수 있음.

---

### 다른 내장 Hook

- `useContext`는 컴포넌트를 중첩하지 않고도 React context를 구독할 수 있게 해줌.

- `useReducer`는 복잡한 컴포넌트들의 state를 reducer로 관리할 수 있게 해줌.
