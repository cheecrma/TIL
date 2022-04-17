### 파이썬 함수의 구조

```python
def 함수명(매개변수):
    수행할 문장1
    #...
```

```python
def add(a, b):
    return a + b
a = 3
b = 4
c = add(a, b)
print(c)
```

### 입력값이 없는 함수

```python
def say():
    return 'Hi'
a = say()
print(a) # Hi
```

### 결괏값이 없는 함수

```python
def add(a, b):
    print("%d, %d의 합은 %d입니다." % (a, b, a+b))
add(3, 4) # 3, 4의 합은 7입니다.
```

- 결괏값은 오직 return 명령어로만 돌려받을 수 있다. 
- print문은 함수의 구성 요소 중 하나인 `수행할 문장`에 해당하는 부분일 뿐이다.

### 입력값도 결괏값도 없는 함수

```python
def say():
    print('Hi')
    
say() # Hi
```

### 입력값이 몇 개가 될지 모를 때

```python
def 함수이름 (*매개변수):
    수행할 문장
```

```python
def add_mul(choice, *args): 
    if choice == "add": 
        result = 0 
        for i in args: 
            result = result + i 
    elif choice == "mul": 
        result = 1 
        for i in args: 
            result = result * i 
    return result
#args는 arguments의 약자로 관례적으로 사용
```

```python
result = add_mul('add', 1,2,3,4,5)
print(result) # 15

result = add_mul('mul', 1,2,3,4,5)
print(result) # 120
```

### 키워드 파라미터 kwargs

```python
def print_kwargs(**kwargs):
    print(kwargs)
print_kwargs(a=1) # {'a': 1}
# kwargs는 keyword arguments의 약자로 관례적으로 사용
```

- 함수의 결괏값은 언제나 하나이다.
- 함수는 return문을 만나는 순간 결괏값을 돌려준 다음 함수를 빠져나가게 된다.

### return의 또 다른 쓰임새

특별한 상황일 때 함수를 빠져나가고 싶다면 return을 단독으로 써서 함수를 즉시 빠져나갈 수 있다.

```python
def say_nick(nick):
    if nick == "바보":
        return
    print(f"나의 별명은 {nick} 입니다.")
say_nick('야호') # 나의 별명은 야호 입니다.
say_nick('바보') # 
```



### 함수 안에서 선언한 변수의 효력 범위 

```python
a = 1
def vartest(a):
    a = a +1

vartest(a)
print(a) # 1
```

``` python
def vartest(a):
    a = a + 1

vartest(3)
print(a) # a를 찾을수 없으므로 오류발생
# 함수 안에서만 사용하는 변수이지 함수 밖의 변수는 아니다.
```

### 함수 안에서 함수 밖의 변수를 변경하는 방법

1. return 사용하기

   ```python
   a = 1 
   def vartest(a): 
       a = a +1 
       return a
   
   a = vartest(a) 
   print(a)
   ```

2. global 명령어 사용하기

   ```python
   a = 1 
   def vartest(): 
       global a 
       a = a+1
   
   vartest() 
   print(a)
   ```

### lambda

lambda는 함수를 생성할 때 사용하는 예약어로 def와 동일한 역할을 한다.

```python
add = lambda a, b: a+b
result = add(3, 4)
print(result) # 7
# lambda 예약어로 만든 함수는 return 명령어가 없어도 결괏값을 돌려준다.
```

def를 사용해야 할 정도로 복잡하지 않거나 def를 사용할 수 없는 곳에 주로 쓰인다.



### input의 사용

input은 입력되는 모든 것을 문자열로 취급한다.

```python
number = input("숫자를 입력하세요: ") # 숫자를 입력하세요: 3
pritn(number) # 3
type(number) # <class 'str'>
```

### print 사용

따옴표로 둘러싸인 문자열은 + 연산과 동일하다

```python
print("life" "is" "too short") #lifeistoo short
print("life", "is", "too short") # life is too short
# 문자열 띄어쓰기는 콤마로 한다
```

한 줄에 결괏값 출력하기

```python
for i in range(10):
    print(i, end=' ') # 0 1 2 3 4 5 6 7 8 9
# 매개변수 end를 사용해 끝 문자를 지정해야 한다.
```



### 파일 생성하기

```python
f = open("새파일.txt", 'w')
f.close()
# 프로그램 실행한 디렉터리에 새로운 파일이 생성됨
```

`파일 객체 = open(파일 이름, 파일 열기 모드)`

파일열기모드

- r : 읽기모드
- w : 쓰기모드
- a : 추가모드-파일의 마지막에 새로운 내용을 추가 시킬 때 사용

파일을 쓰기 모드로 열면 해당 파일이 이미 존재할 경우 원래 있던 내용이 모두 사라지고, 해당파일이 존재하지 않으면 새로운 파일이 생성된다.

프로그램 출력값을 파일에 직접 써 보기

```python
f = open("새파일.txt", 'w')
for i in range(1, 11):
    data = "%d번째 줄입니다.\n" % i
    f.write(data)
f.close()
```

readline 함수 이용해 첫 번째 줄 읽어 출력하는 경우

```python
f = open("새파일.txt", 'r')
line = f.readline()
print(line)
f.close() # 1번째 줄입니다.
```

모든 줄을 읽어 화면에 출력하는 방법

```python
f = open("새파일.txt", 'r')
while True:
    line = f.readline()
    if not line: break
    print(line)
f.close()
```

readlines 함수 사용하기

```python
f = open("새파일.txt", 'r')
lines = f.readlines()
for line in lines:
    print(line)
f.close()
```

줄 바꿈(\n) 문자 제거하기

```python
f = open("새파일.txt", 'r')
lines = f.readlines()
for line in lines:
    line = line.strip()  # 줄 끝의 줄 바꿈 문자를 제거한다.
    print(line)
f.close()
```

read 함수 사용하기

```python
f = open("새파일.txt", 'r')
data = f.read()
print(data)
f.close()
```

파일에 새로운 내용 추가하기

```python
f = open("새파일.txt",'a')
for i in range(11, 20):
    data = "%d번째 줄입니다.\n" % i
    f.write(data)
f.close()
```

with문 사용하면 파일을 열고 닫는 것을 자동으로 처리 해준다.

```python
f = open("foo.txt", 'w')
f.write("Life is too short, you need python")
f.close()
```

```python
with open("foo.txt", "w") as f:
    f.write("Life is too short, you need python")
```

새파일.txt파일을 `C://test` 디렉터리에 생성하고 싶다면

```python
f = open("C:/test/새파일.txt", 'w')
f.close()
```
