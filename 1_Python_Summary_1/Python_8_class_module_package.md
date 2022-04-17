### 클래스가 필요한 이유

```python
result1 = 0
result2 = 0

def add1(num):
    global result1
    result1 += num
    return result1

def add2(num):
    global result2
    result2 += num
    return result2

print(add1(3))
print(add1(4))
print(add2(3))
print(add2(7))
```

```python
class Calculator:
    def __init__(self):
        self.result = 0

    def add(self, num):
        self.result += num
        return self.result

cal1 = Calculator()
cal2 = Calculator()

print(cal1.add(3))
print(cal1.add(4))
print(cal2.add(3))
print(cal2.add(7))
```

객체가 많아질수록 클래스는 객체를 생성만 하면 되기 때문에 함수를 사용하는 경우와 달리 매우 간단해진다.

만약 빼기 기능을 더하려면 Calculator 클래스에 다음과 같은 빼기 기능 함수를 추가해 주면 된다.

```python
    def sub(self, num):
        self.result -= num
        return self.result
```

### 클래스와 객체

- 과자 틀 : 클래스(class)
- 과자 틀에 의해서 만들어진 과자 : 객체(object)

### 사칙연산 클래스 만들기

- setdata 메서드

```python
class FourCal:
    def setdata(self, first, second):
        self.first = first
        self.second = second
    def add(self):
        result = self.first + self.second
        return result
    def mul(self):
        result = self.first * self.second
        return result
    def sub(self):
        result = self.first - self.second
        return result
    def div(self):
        result = self.first / self.second
        return result
    
a = FourCal()
b = FourCal()
a.setdata(4, 2)
b.setdata(3, 8)
a.add() # 6
a.mul() # 8
a.sub() # 2
a.div() # 2
b.add() # 11
b.mul() # 24
b.sub() # -5
b.div() # 0.375
```

### 생성자

```python
def __init__(self, first, second):
    self.first = first
    self.second = second
```

`__init__`

```python
a = FourCal(4, 2)
print(a.first) # 4
print(a.second) # 2
a.add() # 6
a.div() # 2.0
```

### 상속

클래스를 상속하기 위해서는 클래스 이름 뒤 괄호 안에 상속할 클래스 이름을 넣어주면 됨.

```python
class MoreFourCal(FourCal):
    pass
```

`MoreFourCal`클래스는 `FourCal`클래스를 상속했으므로 ~FourCal`클래스의 모든 기능을 사용할 수 있다.

- 기존 클래스가 라이브러리 형태로 제공되거나 수정이 허용되지 않는 상황이라면 상속을 사용해 기존 클래스를 변경하지 않고 기능을 추가하거나 기존 기능을 변경하기 위해 사용한다.

a의 b제곱을 계산

```python
class MoreFourCal(FourCal):
    def pow(self):
        result = self.first ** self.second
        return result

a = MoreFourCal(4, 2)
a.pow() # 16
```

### 메서드 오버라이딩

```python
class SafeFourCal(FourCal):
    def div(self):
        if self.second == 0:  # 나누는 값이 0인 경우 0을 리턴하도록 수정
            return 0
        else:
            return self.first / self.second
```

safeFourCal 클래스는 FourCal 클래스에 있는 div 메서드를 동일한 이름으로 다시 작성하였다. 이렇게 부모클래스(상속한 클래스)에 있는 메서드를 동일한 이름으로 다시 만드는 것을 __메서드 오버라이딩__이라고 한다.



### 모듈

`import 모듈이름`

모듈 이름 없이 함수 이름만 쓰고 싶은 경우 : `from 모듈이름 import 모듈함수` 

모듈 이름 없이 모든 함수 쓰고 싶은 경우 : `from 모듈이름 import *`

`if__name__=="__main__"` 을 사용하면 파일을 실행했을 때는 참이 되어 if문 다음 문장이 수행됨.



1. `import sys` : sys모듈을 불러옴.
2. sys 모듈을 사용하면 파이썬 라이브러리가 설치되어 있는 디렉터리 확인 가능. sys.path
3. sys.path.append(모듈을 저장한 디렉터리) 하고
4. `import 모듈이름` 해서 사용 가능.



### 패키지

가상의 game 패키지 예

```gitbash
game/
    __init__.py
    sound/
        __init__.py
        echo.py
        wav.py
    graphic/
        __init__.py
        screen.py
        render.py
    play/
        __init__.py
        run.py
        test.py
```
