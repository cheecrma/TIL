## 함수를 사용하는 이유

- Decomposition

  기능을 분해하고

  재사용 가능하게 만들고

- Abstraction

  복잡한 내용을 모르더라도 사용할 수 있도록(블랙박스)

  재사용성과 가독성, 생산성



함수(Function)

- 특정한 기능을 하는 코드의 조각(묶음)
- 특정 명령을 수행하는 코드를 매번 다시 작성하지 않고, 필요 시에만 호출하여 간편히 사용



사용자 함수(Custom Function)

- 구현되어 있는 함수가 없는 경우 사용자가 직접 함수를 작성 가능



함수 기본 구조

​	선언과 호출(define & call)

​	입력(Input)

​	문서화(Doc-String)

​	범위(Scope)

​	결과값(Output)

## 1. 선언과 호출(define & call)

함수는 __함수명( )__ 으로 호출

- parameter가 있는 경우, 함수명 (값1, 값2, ...)로 호출

함수를 위에서 아래로 읽어 나갈 때 첨엔 정의를 먼저 볼 필요 없음!



정의부분 구조

def 함수( ) :

​	return

## 2. 함수의 결과값(Output)

- Void function

  명시적인 return 값이 없는 경우, None을 반환하고 종료

- Value returning function

  함수 실행 후, return문을 통해 값 반환

  return을 하게 되면, 값 반환 후 함수가 바로 종료



__return 은 하나의 객체를 반환함!__

## 3. 함수의 입력(Input)

- parameter : 내가 지어주는 '이름'

- Argument : 호출할 때 넘어오는 '값'

  필수 Argument

  선택 Argument

키워드로 지정하는 순간 위치가 이미 의미가 없어짐.

하지만 위치 지정한 다음 키워드 하면 됨.

필수와 선택이 같이 있을 때! 사용하기도 함.
