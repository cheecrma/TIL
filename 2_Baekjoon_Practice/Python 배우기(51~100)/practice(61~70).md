# 2441

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = 0
while N > 0:
    print(s*' ', end='')
    print(N*'*')
    N -= 1
    s += 1
```

# 8393

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
S = 0
while N > 0:
    S += N
    N -= 1
print(S)
```

# 2609

```python
import sys
sys.stdin = open("input.txt")

A, B = map(int, input().split())
a, b = A, B
while b != 0:
    a = a % b
    a, b = b,a
print(a)
print(A*B//a)
```

# 2748

```python
import sys
sys.stdin = open("input.txt")

n = int(input())
lst = [0]*(n+1)
lst[0] = 0
lst[1] = 1
for i in range(2, n+1):
    x = lst[i-2] + lst[i-1]
    lst[i] = x
# print(lst)
print(lst[n])
```

# 5565

```python
import sys
sys.stdin = open("input.txt")

total = int(input())
money_sum = 0
for _ in range(9):
    money = int(input())
    money_sum += money
print(total - money_sum)
```

# 10950

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    A, B = map(int, input().split())
    print(A+B)
```

# 10952

```python
import sys
sys.stdin = open("input.txt")

c = 1 # 계속해서 반복할 수 있도록 변수 생성
while c != 0:
    A, B = map(int, input().split())
    if A == 0: # 문제에서 A,B는 둘다 0 초과이므로 하나만 0이 나오는지 확인해도 됨.
        c -= 1
        break
    print(A + B)
```

# 10984

```python
import sys
sys.stdin = open("input.txt")

T = int(input())

for tc in range(1, T+1):
    total = 0 # 총 학점
    point = 0 # 들은 학점
    N = int(input())
    for tc_2 in range(1, N+1):
        C, G = map(float, input().split())
        total += C*G
        point += C
    print(int(point), f'{(total/ point):.1f}')
```

# 10833

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
total = 0
for tc in range(1, T+1):
    student, apple = map(int, input().split())
    total += (apple % student)
print(total)
```

# 2442

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s= N-1
for i in range(1,N+1):
    print(s*' ',end='')
    print((2*i-1)*'*')
    s -= 1
```
