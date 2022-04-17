# 9295

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for x in range(1, T+1):
    A, B = map(int, input().split())
    total = A + B

    print(f'Case {x}: {total}')
```

# 10569

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for i in range(1, T+1):
    V, E = map(int,input().split())
    print(2+E-V)
```

# 2921

```python
import sys
sys.stdin = open("input.txt")

T = int(input())

# 아래 위 : d, u
#--------------- : (0*1) + (0)
# 0일때 0
#--------------- : (1*2) + (0+1)
# 1일때 0
# 1일때 1
#--------------- : (2*3) + (0+1+2)
# 2일때 0
# 2일때 1
# 2일때 2
#--------------- : (3*4) + (0+1+2+3)
# 3일때 0
# 3일때 1
# 3일때 2
# 3일때 3

d = 0
u = 0
for i in range(1, T+1):
    d += i*(i+1)
    for j in range(i+1):
        u += j
print(d+u)
```

# 10995

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for i in range(1, T+1):
    if i % 2 != 0:
        print(T*'* ')
    if i % 2 == 0:
        print(T*' *')
```

# 10991

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
s = T-1
for i in range(1, T+1):
    print(s*' ', end='')
    print(i*'* ')
    s -= 1
```

# 10871

```python
import sys
sys.stdin = open("input.txt")

N, X = map(int, input().split())
s = []
lst = list(map(int, input().split()))
for i in range(N):
    if lst[i] < X:
        print(lst[i], end=' ')
```

# 10872

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
lst=[0]*N
if N == 0:
    print(1)
else:
    total = 1
    for i in range(1,N+1):
        total *= i
    print(total)
```

# 1978

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = map(int, input().split())
cnt = 0 # 소수 갯수 찾기
for i in numbers: # 각 숫자들 하나씩 대입
    x = 0
    if i > 1: # 1보다 큰 수 확인 , 1은 소수가 아니므로
        for j in range(2, i): # 2부터 해당 숫자까지 중에 나눠떨어지는 게 있는지 확인
            if i % j == 0: # 이게 있으면 소수가 아니라는 뜻
                x += 1
        if x == 0:
            cnt += 1
print(cnt)
```

# 2581

```python
import sys
sys.stdin = open("input.txt")

M = int(input())
N = int(input())

lst = []
for i in range(M,N+1):
    s = 0
    if i > 1: # 1은 소수가 아니므로
        for j in range(2, i):
            if i % j == 0:
                s += 1
                break # break 안 걸어주면 s 추가 되서 이미 소수 아닌데도 계속 for문 돌아서 시간초과 됨..
        if s == 0: # 소수인 경우 리스트에 추가
            lst.append(i)
if len(lst) > 0:
    print(sum(lst)) # 리스트 합
    print(min(lst)) # 리스트 최소
else:
    print(-1) # 리스트에 아무것도 없는 경우. 즉 소수가 없는 경우
```

# 2501

```python
import sys
sys.stdin = open("input.txt")

N, K = map(int,input().split())
cnt = 0
for i in range(1,N+1):
    if N % i == 0:
        # print(i)
        cnt += 1
        if cnt == K: # 약수 중에서 K번째 인 약수 i 출력
            print(i)
if cnt < K: # 만약 약수 개수 보다 찾을려는 K번째가 더 크면 0을 출력
    print(0)
```

