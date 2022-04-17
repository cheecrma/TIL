# 2935

```python
import sys

sys.stdin = open("input.txt")

A = int(input())
s = input()
B = int(input())

if s == '*':
    print(A*B)
elif s == '+':
    print(A+B)
```

# 9498

```python
import sys

sys.stdin = open("input.txt")

N = int(input())
# 90~100 : A, 80~89 : B, 70~79 : C, 60~69 : D, 나머지는 F
if 90 <= N <= 100:
    print('A')
elif 80 <= N <= 89:
    print('B')
elif 70 <= N <= 79:
    print('C')
elif 60 <= N <= 69:
    print('D')
else:
    print('F')
```

# 10817

```python
import sys

sys.stdin = open("input.txt")

A, B, C = map(int, input().split())
if A >= B >= C:
    print(B)
elif A >= C >= B:
    print(C)
elif B >= A >= C:
    print(A)
elif B >= C >= A:
    print(C)
elif C >= A >= B:
    print(A)
elif C >= B >= A:
    print(B)
```

# 11653

```python
import sys

sys.stdin = open("input.txt")

N = int(input())

i = 2
while N != 1:
    if N % i == 0:
        N = N//i
        print(i)
    else:
        i = i + 1
```

# 1789

```python
import sys

sys.stdin = open("input.txt")

# N의 최댓값을 구해야하므로 1부터 N까지 합을 이용하는게 최댓값 확인가능.

S = int(input())
N = 1
while N*(N+1)/2 <= S:
    N += 1
print(N-1)
```

# 2753

```python
import sys

sys.stdin = open("input.txt")

Y = int(input())
# 4의 배수이면서 100의 배수가 아닌거
# 400의 배수인거
# 둘 중 하나만 맞아도 1출력 아니면 0 출력
if Y % 400 == 0:
    print(1)
elif Y % 4 ==0 and Y % 100 != 0:
    print(1)
else:
    print(0)
```

# 10039

```python
import sys

sys.stdin = open("input.txt")

#  5줄 입력
M = 0
for _ in range(5):
    S = 0
    R = int(input())
    # print(R)
    if R <= 40:
        S += 40
    else:
        S += R
    # print(S)
    M += S
print(M//5)
```

# 1934

```python
# import sys
# sys.stdin = open("input.txt")
# T = int(input())
# for tc in range(1, T+1):
#     A, B = map(int, input().split())
#     M = 1 # 최소공배수 될 변수
#     while M % A != 0 or M % B != 0:
#         M += 1
#     print(M)

# import sys
# sys.stdin = open("input.txt")
# T = int(input())
# for tc in range(1, T+1):
#     A, B = map(int, input().split())
#     for i in range(max(A,B), (A*B)+1):
#         if i % A == 0 and i % B == 0:
#             print(i)
#             break

# --------위에 두개는 시간초과 나옴.--------

import sys

sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    A, B = map(int, input().split())
    a, b = A, B
    while A % B != 0: # 두개가 배수 관계가 아닌동안 반복
        A, B = B, A % B
    print(a*b//B)
    # 두 수를 곱하고 가장큰 공통인자를 구해서 나눠주면 최소공배수가 나옴.
```

# 2480

```python
import sys
sys.stdin = open("input.txt")

A, B, C = map(int, input().split())
#  1. 같은 눈 3개 : 10000 + (같은눈)*1000
#  2. 같은 눈 2개 : 1000 + (같은눈)*100
#  3. 모두 다른 눈: (가장 큰 눈)*100

if A == B == C:
    print(A*1000+10000)
elif A == B != C:
    print(A*100+1000)
elif A != B == C:
    print(B*100+1000)
elif A == C != B:
    print(C*100+1000)
else:
    if A > B and A > C:
        print(A*100)
    elif B > A and B > C:
        print(B*100)
    elif C > A and C > B:
        print(C*100)
```

# 4101

```python
import sys
sys.stdin = open("input.txt")


s = 0 # 반복문을 계속 시행할 수 있도록 변수 생성
while s == 0:
    A, B = map(int, input().split())
    if A > B :
        print('Yes') # 첫번째가 크면 예스
    else:
        if A == 0 and B == 0:
            s += 1 # A,B가 모두 0으로 같으면 종료되므로 s변수가 0이 아니도록 설정
        else:
            print('No') # 두번째가 크거나 같으면 노우
```

