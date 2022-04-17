# 1977

```python
import sys
sys.stdin = open("input.txt")

M = int(input())
N = int(input())
lst = []
for i in range(1, 101):
    if M <= i*i <= N:
        lst.append(i*i)

if lst == []:
    print(-1)
if lst != []:
    print(sum(lst))
    print(lst[0])
```

# 11098

```python
import sys
sys.stdin = open("input.txt")

n = int(input())

for tc in range(1, n+1):
    p = int(input())
    money = 0
    C_name = ''
    for tc_2 in range(1, p+1):
        M, C = map(str, input().split())
        if money < int(M):
            money = int(M) # 최대가격 확인
            C_name = C # 그때 선수 이름 확인
    print(C_name)
```

# 5635

```python
import sys
sys.stdin = open("input.txt")

n = int(input())
lst = []
for tc in range(1, n+1):
    name, D, M, Y = map(str, input().split())
    D,M,Y = map(int,(D,M,Y))
    lst.append((Y,M,D,name))
lst.sort() # 정렬 됨.
# print(lst)
print(lst[n-1][-1])
print(lst[0][-1])
```

# 1408

```python
import sys
sys.stdin = open("input.txt")

L = list(map(int, input().split(':'))) # 현재시간
N = list(map(int, input().split(':'))) # 임무시작시간
# print(L)
# print(S)
h = N[0] - L[0]
m = N[1] - L[1]
s = N[2] - L[2]
# print(h, m, s)

# 각 시간이 음수면 앞에 숫자 땡겨 오도록 하고 만약 초랑 분이 아닌 시간이 음수면 24시간 땡겨와서 양수로 표현
if s < 0:
    m -= 1
    s += 60
if m < 0:
    h -= 1
    m += 60
if h < 0:
    h += 24

# 00:00:00 으로 표현하기 위해 한자리면 앞에 0 붙임
if h <= 9:
    H = '0' + str(h)
if h > 9:
    H = h


if m <= 9:
    M = '0' + str(m)
if m > 9:
    M = m

if s <= 9:
    S = '0' + str(s)
if s > 9:
    S = s

print(f'{H}:{M}:{S}')
```

# 2741

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
s = 1
while N > 0:
    print(s)
    N -= 1
    s += 1
```

# 2742

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
while N >= 1:
    print(N)
    N -= 1
```

# 2739

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for i in range(1,10):
    print(f'{N} * {i} = {N*i}')
```

# 2438

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for i in range(1, N+1):
    print(i*'*')
```

# 2439

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for i in range(1, N+1):
    x= i*'*'
    print(x.rjust(N))
    
# 아래 풀이는 처음에 출력 형식 잘못된 거 수정 내용
import sys
sys.stdin = open("input.txt")

N = int(input())
n = N-1
for i in range(1, N+1):
    print(n*' ',end='')
    print(i*'*')
    n -= 1
```

# 2440

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
while N > 0:
    print(N*'*')
    N -= 1
```
