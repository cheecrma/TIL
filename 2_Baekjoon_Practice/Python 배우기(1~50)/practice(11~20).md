# 2163

```python
N, M = input().split()
N = int(N)
M = int(M)

print((N-1)+N*(M-1))
```

# 11021

```python
x = int(input())

for i in range(1,x+1,1):
    A, B = input().split()
    A = int(A)
    B = int(B)
    print('Case #',end='')
    print(i,end='')
    print(':',A+B)
```

# 11022

```python
x = int(input())

for i in range(1,x+1,1):
    A, B = input().split()
    A = int(A)
    B = int(B)
    print('Case #',end='')
    print(i,end='')
    print(':',A, '+', B, '=',A+B)
```

# 10699

```python
import datetime
print(str(datetime.datetime.now())[:10])
# 10번째 자리 까지 출력하게 하기
# 그러기위해 문자열로 변환해줌!
# import datetime을 이용해 현재 시간 알기!
```

# 7287

```python
print(15)
print('cheecrma')
```

# 2525

```python
A, B = map(int, input().split()) # A는 시(0~23), B는 분(0~59)
C = int(input()) # C는 필요한 시간을 분 단위(0~1000)

B = B + C
cnt = 0
cnt2 = 0

while B >= 60:
    B = B - 60
    cnt += 1

while A+cnt >= 24:
    A = A + cnt2 - 24
    cnt2 += 1

print(A + cnt, B)
```

# 2530

```python
import sys

sys.stdin = open("input.txt")

h, m, s = map(int, input().split())
# h, m, s는 시 분 초
# 주어지는 건 초
# 만약 23시 59분 59초에서 1초 지나면 0시 0분 0초 됨.
x = int(input())  # 주어지는 시간 초로 주어짐

if x >= 3600:  # x = 3600 은 1시간 의미
    h += (x // 3600)  # 시간에 그만큼 더하기
    if (x % 3600) >= 60:  # x 에서 시간 부분빼고 분 을 확인
        m += ((x % 3600) // 60)
        if (x % 60) < 60:
            s += (x % 60)
    elif (x % 60) < 60:
        s += (x % 60)

elif (x % 3600) >= 60:  # x 에서 시간 부분빼고 1분 을 확인
    m += ((x % 3600) // 60)
    if (x % 60) < 60:
        s += (x % 60)

elif (x % 60) < 60:
    s += (x % 60)

while s >= 60:
    m += 1
    s -= 60

while m >= 60:
    h += 1
    m -= 60

while h >= 24:
    h = h % 24

print(h, m, s)
```

# 2914

```python
import sys

sys.stdin = open("input.txt")

# 평균값은 (멜로디개수) / (수록된 곡 개수) 에서 올림해서 정수
#  N는 수록된 곡 개수 A는 평균값 일때
#  적어도 멜로디 개수 몇개인지 구하기

N, A = map(int, input().split())
# 멜로디 개수를 M이라 지정 하면  M/N 하고 올림하면 A 나옴
print(N*A-N+1)
```

# 5355

```python
import sys

sys.stdin = open("input.txt")

#  @ 는 3을 곱하고 % 는 5를 더하며 # 는 7을 빼는 연산자
T = int(input())
for tc in range(1,T+1):
    lst = list(map(str, input().split()))
    # print(lst)
    # print(float(lst[0]))
    s = 0
    for i in range(len(lst)):
        if i == 0:
            s += float(lst[i])
        else:
            if lst[i] == '@':
                s *= 3
            elif lst[i] == '%':
                s += 5
            elif lst[i] == '#':
                s -= 7
    print(f"{s:.2f}")
```

# 2675

```python
import sys

sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    R, S = map(str, input().split())
    # print(S)
    for i in range(len(S)):
        for j in range(int(R)):
            print(S[i], end='')
    print()
```

