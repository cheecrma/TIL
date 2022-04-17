### 오류 예외 처리 기법

- try, except문

  ```python
  try :
      #...
  except [발생 오류[as 오류 메시지 변수]]:
      #...
  ```

  try 블록 수행 중 오류가 발생하면 except 블록 수행

  ```python
  try :
      #...
  except 발생 오류:
      #...
  finally:
      #...
  # 이 경우는 오류 종류에 상관없이 오류가 발생하면 except 블록을 수행
  # try문에는 finally절을 사용할 수 있으며 finally는 예외 발생 여부와 상관없이 수행
  ```

- try문에 else절 사용하기

  ```python
  try:
      age=int(input('나이를 입력하세요: '))
  except:
      print('입력이 정확하지 않습니다.')
  else:
      if age <= 18:
          print('미성년자는 출입금지입니다.')
      else:
          print('환영합니다.')
  ```

### 오류회피하기

```python
try:
    f = open("나없는파일", 'r')
except FileNotFoundError:
    pass
```

### 오류 일부러 발생시키기

`raise 명령어`를사용해 오류를 강제로 발생시킬 수 있음.

### 예외만들기

```python
class MyError(Exception):
    def __str__(self):
        return "허용되지 않는 별명입니다."    

def say_nick(nick):
    if nick == '바보':
        raise MyError()
    print(nick)

try:
    say_nick("천사")
    say_nick("바보")
except MyError as e:
    print(e)
```

----

### 내장 함수

- abs(x)는 어떤 숫자를 입력받았을 때, 그 숫자의 절댓값

- all(x)는 반복 가능한 자료형 x를 입력 인수로 받으며 이 x의 요소가 모두 참이면 True, 거짓이 하나라도 있으면 False

  반복 가능한 자료형이란 for문으로 그 값을 출력할 수 있는 것을 의미

  - 리스트, 튜플, 문자열, 딕셔너리, 집합 등

- any(x)는 반복 가능한 자료형 x를 입력 인수로 받으며 이 x의 요소 중 하나라도 참이 있으면 True, 모두 거짓일 때만 False

- chr(i)는 유니코드 값을 입력받아 그 코드에 해당하는 문자를 출력

  `chr(97) #'a'`

- dir은 객체가 자체적으로 가지고 있는 변수나 함수를 보여줌.

- divmod(a,b)는 2개의 숫자를 입력. a를b로 나눈 몫과 나머지를 튜플 형태로 돌려줌

- enumerate는 열거하다 뜻으로 순서가 있는 자료형(리스트, 튜플, 문자열)을 입력으로 받아 인덱스 값을 포함하는 enumerate 객체를 돌려줌

- eval(expression)은 실행 가능한 문자열을 입력으로 받아 문자열을 실행한 결괏값을 돌려주는 함수

  `eval('1+2') # 3,  eval(" 'hi'+'a' ") # 'hia'`

- filter는 첫 번째 인수로 함수 이름을,  두 번째 인수로 그 함수에 차례로 들어갈 반복 가능형 자료형을 받는다.

  ```python
  def positive(l): 
      result = [] 
      for i in l: 
          if i > 0: 
              result.append(i) 
      return result
  
  print(positive([1,-3,2,0,-5,6])) # [1, 2, 6]
  ```

  ```python
  def positive(x):
      return x > 0
  
  print(list(filter(positive, [1, -3, 2, 0, -5, 6]))) # [1, 2, 6]
  ```

  ```python
  list(filter(lambda x: x > 0, [1, -3, 2, 0, -5, 6])) # [1, 2, 6]
  ```

- hex(x)는 정수 값을 입력받아 16진수(hexadecimal)로 변환하여 돌려주는 함수

- id(object)는 객체를 입력받아 객체의 고유 주소 값(레퍼런스)을 돌려주는 함수

- input([prompt])은 사용자 입력을 받는 함수

- int(x)는 문자열 형태의 숫자나 소수점이 있는 숫자 등을 정수 형태로 돌려주는 함수

- isinstance(object, class)는 첫 번째 인수로 인스턴스, 두 번째 인수로 클래스 이름을 받는다. 입력으로 받은 인스턴스가 그 클래스의 인스턴스인지를 판단하여 참이면 True, 거짓이면 False를 돌려줌.

- len(s)은 입력값 s의 길이(요소의 전체 개수)를 돌려주는 함수

- list(s)는 반복 가능한 자료형 s를 입력받아 리스트로 만들어 돌려주는 함수

- map(f, iterable)은 함수(f)와 반복 가능한(iterable) 자료형을 입력으로 받는다. map은 입력받은 자료형의 각 요소를 함수 f가 수행한 결과를 묶어서 돌려주는 함수이다.

  ```python
  def two_times(numberList):
      result = [ ]
      for number in numberList:
          result.append(number*2)
      return result
  
  result = two_times([1, 2, 3, 4])
  print(result) # [2, 4, 6, 8]
  ```

  ```python
  def two_times(x): 
      return x*2
  list(map(two_times, [1, 2, 3, 4])) # [2, 4, 6, 8]
  ```

  ```python
  list(map(lambda a: a*2, [1, 2, 3, 4])) # [2, 4, 6, 8]
  ```

- max(iterable)는 인수로 반복 가능한 자료형을 입력받아 그 최댓값을 돌려주는 함수

- min(iterable)은 인수로 반복 가능한 자료형을 입력받아 그 최솟값을 돌려주는 함수

- oct(x)는 정수 형태의 숫자를 8진수 문자열로 바꾸어 돌려주는 함수

- open(filename, [mode])은 '파일 이름'과 '읽기 방법'을 입력받아 파일 객체를 돌려주는 함수. 읽기 방법을 생략하면 기본값인 읽기 전용 모드(r)로 파일 객체를 만들어 돌려준다. 

- ord(c)는 문자의 유니코드 값을 돌려주는 함수 (ord 함수는 chr함수와 반대이다.)

- pow(x, y)는 x의 y 제곱한 결괏값을 돌려주는 함수

- range([start,] stop [,step])는 for문과 함께 자주 사용하는 함수.

  ```python
  list(range(1, 10, 2))
  [1, 3, 5, 7, 9]
  ```

- round(number [,ndigits])함수는 숫자를 입력받아 반올림해 주는 함수 ([, ndigits]는 ndigits가 있을 수도 있고 없을 수도 있다는 의미)

  ```python
  round(5.678, 2) # 5.68
  ```

- sorted(iterable)함수는 입력값을 정렬한 후 그 결과를 리스트로 돌려주는 함수

  (리스트 자료형의 sort 함수는 리스트 객체 그 자체를 정렬만 할 뿐 정렬된 결과를 돌려주지는 않음.)

- str(object)은 문자열 형태로 객체를 변환하여 돌려주는 함수

- sum(iterable)은 입력받은 리스트나 튜플의 모든 요소의 합을 돌려주는 함수

- tuple(iterable)은 반복 가능한 자료형을 입력받아 튜플 형태로 바꾸어 돌려주는 함수

- type(object)은 입력값의 자료형이 무엇인지 알려 주는 함수

- zip(*iterable)은 동일한 개수로 이루어진 자료형을 묶어 주는 역할을 하는 함수 (\*iterable은 반복 가능(iterable)한 자료형 여러 개를 입력할 수 있다는 의미)

  ```python
  list(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]))
  [(1, 4, 7), (2, 5, 8), (3, 6, 9)]
  ```

### 라이브러리

- import time
- import calender
- import random
- import webbrowser
