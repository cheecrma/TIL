### 불(bool) 자료형

- True
- False

2가지 값만 가질 수 있다.

False 인 경우 : `" ", ( ), [ ], { }, 0, None` 

```python
bool('') # False
```



### 변수

```python
a = 1
b = "python"
c = [1, 2, 3]
```

a, b, c를 변수라고 함

a 변수가 가리키는 메모리의 주소 확인은 `id(a)` 사용

```python
a = [1, 2, 3]
b = a

a[1] = 4
a # [1, 4, 3]
b # [1, 4, 3]

# a, b 모두 동일한 리스트를 가리키고 있기 때문

# b 변수를 생성할 때 a 변수의 값을 가져오면서 a와는 다른 주소를 가리키도록 만드는 방법

# 1. [:] 이용
b = a[:]
a # [1, 4, 3]
b # [1, 2, 3]

# 2. copy 모듈 이용
from copy import copy
a = [1, 2, 3]
b = copy(a) # b=a[:] 와 동일
# b = a.copy()
```

### 두 변수의 값을 바꾸는 방법

```python
a = 3
b = 5
a, b = b, a
a # 5
b # 3
```

