# 2562

```python
import sys
sys.stdin = open("input.txt")

cnt = 0
number_max = 0
for _ in range(9):
    cnt += 1
    A = int(input())
    if A > number_max:
        number_max = A
        s = cnt
print(number_max)
print(s)
```

# 2475

```python
import sys
sys.stdin = open("input.txt")

numbers = map(int, input().split())
total = 0
for number in numbers:
    total += number**2
print(total % 10)
```

# 2747

```python
import sys
sys.stdin = open("input.txt")

n = int(input())
lst = [0]*(n+1)
lst[0] = 0
lst[1] = 1
if n == 1:
    print(1)
else:
    for i in range(1,n):
        lst[i+1] = lst[i] + lst[i-1]
    print(lst[i+1])
```

# 2576

```python
import sys
sys.stdin = open("input.txt")

s = 0
cnt = 0
min_number = 100 # 입력값에 100보다 작은 자연수가 주어지므로 처음 변수 100으로 줌
for _ in range(7):
    a = int(input())
    if a % 2 == 1:
        s += a
        cnt += 1
        if a < min_number:
            min_number = a
if cnt == 0: # 홀수가 없는 경우
    print(-1)
else:
    print(s)
    print(min_number)
```

# 9085

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))
    print(sum(lst)) # 파이썬 sum 내장함수를 이용하면 편하게 구할 수 있다ㅎㅎ
```

# 2490

```python
import sys
sys.stdin = open("input.txt")

for _ in range(3):
    rlt = list(map(int, input().split()))
    if sum(rlt) == 4:
        print('E')
    if sum(rlt) == 3:
        print('A')
    if sum(rlt) == 2:
        print('B')
    if sum(rlt) == 1:
        print('C')
    if sum(rlt) == 0:
        print('D')
```

# 10797

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = map(int, input().split())

cnt = 0
for i in numbers:
    if N == i:
        cnt += 1
print(cnt)
```

# 2506

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = map(int, input().split())

cnt = 0
k = 1
for i in numbers:
    if i == 1:
        cnt += k
    if i == 0:
        cnt += 0
        k = 0
    k += 1
print(cnt)
```

# 1546

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
lst = list(map(int, input().split()))

# print(max(lst))

total = 0
for i in range(N):
    total += (lst[i] / max(lst))*100
print(total/N)
```

# 2455

```python
import sys
sys.stdin = open("input.txt")

s = 0
max_number = 0
for _ in range(4):
    lst = list(map(int, input().split()))
    rlt = -lst[0]+lst[1]
    s += rlt
    if s > max_number:
        max_number = s
print(max_number)
```

