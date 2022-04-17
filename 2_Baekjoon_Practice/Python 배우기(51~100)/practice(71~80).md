# 2443

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = 0
k = 2*N-1
for i in range(1,N+1):
    print(s*' ',end='')
    print((k)*'*')
    s += 1
    k -= 2
```

# 2444

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = 0
k = 2*N-1
ss = N-1
for i in range(1, N):
    print(ss*' ',end='')
    print((2*i-1)*'*')
    ss -= 1

for i in range(1,N+1):
    print(s*' ',end='')
    print((k)*'*')
    s += 1
    k -= 2
```

# 2522

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = N-1
for i in range(1,N):
    print(s*' ',end='')
    print(i*'*')
    s -= 1
ss = 0
k = N
for j in range(1,N+1):
    print(ss*' ',end='')
    print(k*'*')
    ss += 1
    k -= 1
```

# 2523

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for i in range(1,N):
    print(i*'*')
k = N
for j in range(1,N+1):
    print(k*'*')
    k -= 1
```

# 9325

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for i in range(1, T+1):
    total = 0
    s = int(input()) # 자동차 가격
    option = int(input()) # 다른 옵션 갯수
    for j in range(1, option+1):
        cnt, price = map(int, input().split()) # cnt는 해당옵션의 사야할 수량, price는 그 옵션 한개의 가격
        total += cnt*price
    print(total+s)
```

# 2445

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = N-1
for i in range(1, N):
    print(i*'*',end='')
    print((2*s)*' ',end='')
    print(i*'*')
    s -= 1
ss = 0
k = N
for j in range(1, N+1):
    print(k*'*', end = '')
    print((2*ss)*' ',end='')
    print(k*'*')
    ss += 1
    k -= 1
```

# 2446

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
k = N
s = 0
for i in range(1, N):
    print(s*' ',end='')
    print((2*k-1)*'*')
    s += 1
    k -= 1
ss = N-1
for i in range(1, N + 1):
    print(ss * ' ', end='')
    print((2 * i - 1) * '*')
    ss -= 1
```

# 2010

```python
# import sys
# sys.stdin = open("input.txt")

# N = int(input())
# total = 0
# for i in range(1, N+1):
#     S = int(input())
#     total += S
# print(total -(N-1))

# N = int(input())
# c = 0
# t = N
# while t > 0:
#     S = int(input())
#     t -= 1
#     c += S
# print(c-N+1)

# 위에 두개 방법은 전부 시간초과가 나온다. input()으로 입력받으면 안된다고 한다;;

import sys
n = int(sys.stdin.readline())
s = 0
for i in range(n):
    s += int(sys.stdin.readline())
print(s -(n - 1))
```

# 5522

```python
import sys
sys.stdin = open("input.txt")

s = 0
for _ in range(5):
    N = int(input())
    s += N
print(s)
```

# 10178

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    c, v = map(int, input().split())
    d = c//v # 자식들이 받는 사탕 수
    # print(d)
    e = c%v # 아버지가 받는 사탕 수
    # print(e)
    print(f'You get {d} piece(s) and your dad gets {e} piece(s).')
```
