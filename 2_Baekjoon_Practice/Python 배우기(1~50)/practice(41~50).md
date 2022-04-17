# 5086

```python
import sys
sys.stdin = open("input.txt")

c = 1
while c != 0:
    A, B = map(int, input().split())
    if A == 0:
        break

    if A % B == 0: # A가 B의 배수인 경우
        print('multiple')
    if B % A == 0: # B가 A의 배수인 경우
        print('factor')
    if A % B !=0 and B % A != 0:
        print('neither')
```

# 5717

```python
import sys
sys.stdin = open("input.txt")

c = 1
while c != 0:
    M, F = map(int, input().split())
    if M == 0 and F ==0:
        break
    print(M+F)
```

# 9610

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
q1 = 0
q2 = 0
q3 = 0
q4 = 0
axis = 0
for tc in range(1, T+1):
    x, y = map(int, input().split())
    if x > 0 and y > 0:
        q1 += 1
    if x > 0 and y < 0:
        q4 += 1
    if x < 0 and y > 0:
        q2 += 1
    if x < 0 and y < 0:
        q3 += 1
    if x == 0 or y == 0:
        axis += 1
print(f'Q1: {q1}')
print(f'Q2: {q2}')
print(f'Q3: {q3}')
print(f'Q4: {q4}')
print(f'AXIS: {axis}')
```

# 8958

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    cnt_sum = 0
    cnt = 1
    lst = list(map(str, input()))

    for i in range(len(lst)):
        if lst[i] == 'O': # 리스트를 한칸씩 옆으로 확인하는데
            cnt_sum += cnt # O이면 1점 받고
            cnt += 1 # 다음 O는 2점 받기위해 cnt += 1 증가 또 다음은 3점 이렇게 증가
        else:
            cnt = 1 # 하지만 다음에 O가 아니면 다시 cnt 는 1로 초기화

    print(cnt_sum)
```

# 9506

```python
import sys
sys.stdin = open("input.txt")

c = 0
while c == 0:
    n = int(input())
    if n == -1:
        break
    # print(n)
    lst = []
    for i in range(1,n):
        if n % i == 0:
            lst.append(i)
    # print(lst)
    # print(sum(lst))
    x = " + ".join(map(str, lst))
    # print(x)
    if n == sum(lst):
        print(f'{n} = {x}')
    else:
        print(f'{n} is NOT perfect.')
```

# 10162

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
A, B, C = 0, 0, 0
while T >= 300:
    A += 1
    T -= 300
while T >= 60:
    B += 1
    T -= 60
while T >= 10:
    C += 1
    T -= 10
if T != 0:
    print(-1)
else:
    print(A, B, C)
# A는 5분=300초, B는 1분=60초, C는 10초
```

# 10103

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
a = 100
b = 100
for tc in range(1, T+1):
    A, B = map(int, input().split())
    if A > B:
        b -= A
    if B > A:
        a -= B
print(a)
print(b)
```

# 10214

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
Y = 0 # 연세대 총합 스코어
K = 0 # 고려대 총합 스코어
for tc in range(1, T+1):
    for _ in range(9):
        Y_s, K_s = map(int, input().split())
        Y += Y_s
        K += K_s
    if Y > K:
        print('Yonsei')
    if K > Y:
        print('Korea')
    if K == Y:
        print('Draw')
```

# 11557

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    max_drink = 0
    max_name = ""
    for tc_2 in range(1, N+1):
        name, drink = map(str, input().split())
        # print(drink)
        if int(drink) > max_drink:
            max_drink = int(drink)
            max_name = name # 최대 drink 일 때 해당 name 확인
    print(max_name)
```

# 10757

```python
import sys
sys.stdin = open("input.txt")

A, B = map(int, input().split())
print(A+B)
```

