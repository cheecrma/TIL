# 2908

```python
import sys
sys.stdin = open("input.txt")

A, B = input().split()
A = int(A[::-1])
B = int(B[::-1])

if A > B:
    print(A)
else: # 같은 값은 존재 하지 않으므로 else 써도 됨.
    print(B)
```

# 2460

```python
import sys
sys.stdin = open("input.txt")

s = 0
M = 0
rlt = 0
for i in range(10):
    A, B = map(int, input().split())
    s = -A + B
    M += s
    # print(M) # 여기서 최대 값 구하기
    if M > rlt:
        rlt = M
print(rlt)
```

# 2577

```python
import sys
sys.stdin = open("input.txt")

A = int(input())
B = int(input())
C = int(input())

# print(A*B*C)
rlt = str(A*B*C)

lst = list(map(int,rlt))
# print(lst)
arr = []
cnt = 0
for j in range(10):
    for i in range(len(lst)):
        if lst[i] == j:
            cnt += 1
    arr.append(cnt)
    cnt = 0 # 해당 배열에 해당 숫자 카운트 하고 다시 0으로 리셋해주기
# print(arr)

for i in range(10):
    print(arr[i])
```

# 2592

```python
import sys
sys.stdin = open("input.txt")

number = [int(input()) for _ in range(10)]
print(sum(number)//10) # 평균 어짜피 자연수라 했으므로 // 사용해서 float 안되게 함.

max_cnt = 0 # 카운트
num = 0 # 최빈값
for i in number:
    cnt = number.count(i)

    # 최빈값에 해당하는 수 출력
    if cnt >= max_cnt:
        max_cnt = cnt
        num = i
print(num)
```

# 2711

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N, sentence = input().split()
    # print(type(N))
    lst = []
    for i in sentence:
        lst.append(i)
    # print(lst)
    # lst의 N-1부분을 삭제시키고 출력하면 됨.
    lst.pop(int(N)-1)
    # print(lst)
    for i in lst:
        print(i,end='')
    print()
```

# 2953

```python
import sys
sys.stdin = open("input.txt")

max_rlt = 0
max_number = 0
for i in range(1,6):
    lst = map(int,input().split())
    total = sum(lst)
    if total > max_rlt:
        max_rlt = total
        max_number = i
print(max_number, max_rlt)
```

# 3052

```python
import sys
sys.stdin = open("input.txt")

lst = []
for i in range(10):
    N = int(input())
    s = N % 42
    lst.append(s)
# print(lst)
# print(set(lst))
print(len(set(lst))) # set함수는 중복을 없애주므로 set함수 사용하고 개수를 구하기위해 len함수 사용
```

# 1292

```python
import sys
sys.stdin = open("input.txt")

lst = []
A, B = map(int, input().split())
for i in range(1001):
    for j in range(i):
        lst.append(i)
print(sum(lst[A-1:B]))
```

# 3460

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    i = 0
    while N > 0:
        if N % 2 == 1:
            print(i, end=' ')
        N = N//2
        i += 1
```

# 10807

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = map(int, input().split())
V = int(input())
cnt = 0
for i in numbers:
    if V == i:
        cnt += 1
print(cnt)
```
