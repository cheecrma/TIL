### Hook 사용 위치

```javascript
const Example = (props) =>{
    //여기서 Hook을 사용할 수 있음.
    return <div />;
}
```

```javascript
function Example(props) {
    //여기서 Hook을 사용할 수 있음.
    return <div />;
}
```

---

- Hook은 클래스 안에서 동작하지 않음.

---

### useState

- `useState`는 state를 함수 컴포넌트 안에서 사용할 수 있게 해줌.

- `useState()` Hook의 인자로 넘겨주는 값은 state의 초기 값임.

- 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있음.

- useState는 state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환 함. 이것이 바로 `const [count, setCount] = useState()`라고 쓰는 이유.

---

### useEffect

- Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있음.

- 데이터 가져오기, 구독 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 sdie effects임.

- React 컴포넌트에는 일반적으로 두 종류의 side effects가 있음. 정리(clean-up)가 필요한 것과 그렇지 않은 것.

---

### 정리(Clean-up)를 이용하지 않는 Effects

- React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있음.
  
  - 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들임. 이러한 예들은 실행 이후 신경 쓸 것이 없기 때문.

- useEffect Hook을 이용하여 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말함. React는 우리가 넘긴 함수를 기억했다가 (이 함수를 'effect`라고 부름) DOM 업데이트를 수행한 이후에 불러낼 것임.

- `useEffect`를 컴포넌트 내부에 둠으로써 effect를 통해 `count` state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 됨. 함수 범위 안에 존재하기 때문에 특별한 API없이도 값을 얻을 수 있는 것임.

- useEffect는 첫 번째 렌더링과 이후의 모든 업데이트에서 수행됨. React는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장함.

---

### 정리(clean-up)를 이용하는 Effects

- 외부 데이터에 구독을 설정해야 하는 경우. 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요함.

- effect에서 함수를 반환하는 이유는 effect를 위한 추가적인 정리(clean-up) 메커니즘임. 모든 effect는 정리를 위한 함수를 반환할 수 있음.

- effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됨.

- React가 다음 차례의 effect를 실행하기 전에 이전의 렌더링에서 파생된 effect 또한 정리하는 이유가 바로 이 때문.

- `useEffect`가 컴포넌트의 렌더링 이후에 다양한 side effects를 표현할 수 있음을 위에서 배움. effect에 정리(clean-up)가 필요한 경우에는 함수를 반환함. 정리(clean-up)가 필요없는 경우에는 어떤 것도 반환하지 않음.

---

### 팁 : 관심사를 구분하려고 한다면 Multiple Effect를 사용함.

- State Hook을 여러 번 사용할 수 있는 것처럼 effect 또한 여러 번 사용할 수 있음. Effect를 이용하여 서로 관련이 없는 로직들을 갈라놓을 수 있음.

- Hook을 이용하면 생명주기 메서드에 따라서가 아니라 코드가 무엇을 하는지에 따라 나눌 수가 있음.

### 팁 : Effect를 건너뛰어 성능 최적화하기

- 모든 렌더링 이후에 effect를 정리(clean-up)하거나 적용하는 것이 때때로 성능 저하를 발생시키는 경우도 있음.








