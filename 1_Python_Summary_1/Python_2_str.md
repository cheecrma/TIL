### 문자열 포매팅

- 문자열 안에 어떤 값을 삽입하는 방법

```python
number = 10
day = "three"
"I ate %d apples. so I was sick for %s days." % (number, day)
# 'I ate 10 apples. so I was sick for three days.'
```

- 문자열 포맷 코드
  - %s : 문자열
  - %c : 문자 1개
  - %d : 정수
  - %f : 부동소수
  - %o : 8진수
  - %x : 16진수
  - %% : Literal % (문자 % 자체)
- 포맷 코드와 숫자 함께 사용하기
  - 정렬과 공백
    - %10s 는 전체 길이가 10개인 문자열 공간에서 대입되는 값을 오른쪽으로 정렬하고 그 앞의 나머지는 공백으로 남겨 두라는 의미
    - %-10s 는 반대쪽인 왼쪽 정렬
  - 소수점 표현하기
    - %0.4f 에서 '.'의 의미는 소수점 포인트를 말하고 그 뒤의 숫자 4는 소수점 뒤에 나올 숫자의 개수를 말함
    - %10.4f 는 전체 길이가 10개인 문자열 공간에서 오른쪽으로 정렬하는 경우.



### format 함수를 사용한 포매팅

```python
# 2개 이상의 값 넣기
number = 10
day ="three"
"I ate {0} apples. so I was sick for {1} days.".format(number, day)
# 'I ate 10 apples. so I was sick for three days.'

# 이름으로 넣기
"I ate {number} apples. so I was sick for {day} days.".format(number=10, day=3)
# 'I ate 10 apples. so I was sick for 3 days.'
```

- 왼쪽 정렬 `"{0:<10}".format("hi") # 'hi        '`
- 오른쪽 정렬 `:>` 화살표 방향만 바꿔 주면 됨.
- 가운데 정렬 `:^` 기호를 사용하면 됨.
- 공백 채우기 `"{0:=^10}".format("hi") # '====hi===='` , `"{0: !<10}".format("hi") # 'hi!!!!!!!!'`
- 소수점 표현하기 `y = 3.42134234` , `"{0:0.4f}".format(y) #3.4213` 
- {} 문자 표현하기 `"{{ and }}".format() # '{ and }'`



### f 문자열 포매팅

```python
name = '홍길동'
age = 27
f'나의 이름은 {name}입니다. 내년이면 {age+1}살이 됩니다.'
# '나의 이름은 홍길동입니다. 내년이면 28살이 됩니다.'
```

```python
dict = {'name':홍길동, 'age':27}
f'나의 이름은 {dict["name"]}입니다. 나이는 {dict["age"]}입니다.'
# '나의 이름은 홍길동입니다. 나이는 27입니다.'
```

- 왼쪽 정렬 `f'{"hi":<10}'` , 오른쪽 정렬, 가운데 정렬 생략.
- 공백 채우기 `f'{"hi":=^10}' #'====hi===='`
- 소수점 표현하기 `y=3.42134234` , `f'{y:0.4f}'`
- {} 문자 표현하기 `f'{{ and }}' # '{ and }'`



### 문자열 관련 함수들

- 문자 개수 세기(count)

  ```python
  a = "hobby"
  a.count('b') # 2
  ```

- 위치 알려주기_1(find)

  ```python
  a = "Python is the best choice"
  a.find('b') # 14 문자열 중 문자 b가 처음으로 나온 위치를 반환
  a.find('k') # -1 존재하지 않는다면 -1을 반환
  ```

- 위치 알려주기_2(index)

  ```python
  a = "Life is too short"
  a.index('t') # 8 문자열 중 문자 t가 맨 처음으로 나온 위치를 반환
  # 만약 찾는 문자나 문자열이 존재하지 않는다면 오류를 발생
  # 앞의 find함수와 다른 점은 문자열 안에 존재하지 않는 문자를 찾으면 오류가 발생한다는 점
  ```

- 문자열 삽입(join)

  ```python
  ",".join('abcd') # 'a,b,c,d'
  ```

- 소문자를 대문자로 바꾸기(upper)

  ```python
  a = "hi"
  a.upper() # 'HI' 만약 문자열이 이미 대문자라면 아무 변화도 일어나지 않음
  ```

- 대문자를 소문자로 바꾸기(lower)

- 왼쪽 공백 지우기(lstrip)

- 오른쪽 공백 지우기(rstrip)

- 양쪽 공백 지우기(strip)

  ```python
  a = "  hi  "
  a.strip() # hi
  ```

- 문자열 바꾸기(replace)

  ```python
  a = "Life is too short"
  a.replace("Life", "Your leg") # 'Your leg is too short'
  ```

- 문자열 나누기(split)

  ```python
  a = "Life is too short"
  a.split() # ['Life', 'is', 'too', 'short']
  
  b = "a:b:c:d"
  b.split(':') # ['a','b','c','d']
  ```

  split함수는 `a.split()`처럼 괄호 안에 아무 값도 넣어 주지 않으면 공백(스페이스, 탭, 엔터 등)을 기준으로 문자열을 나누어 준다.
