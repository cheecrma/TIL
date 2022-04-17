# 10156

```python
import sys
sys.stdin = open("input.txt")


K, N, M = map(int, input().split()) # K는 과자 한개 가격, N 은 과재 개수, M은 가진돈
if K*N > M:
    print(K*N - M)
elif K*N <= M:
    print(0)
```

# 3009

```python
import sys
sys.stdin = open("input.txt")

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
x3, y3 = map(int, input().split())
if x1 == x2:
    x4 = x3
elif x1 == x3:
    x4 = x2
elif x2 == x3:
    x4 = x1

if y1 == y2:
    y4 = y3
elif y1 == y3:
    y4 = y2
elif y2 == y3:
    y4 = y1

print(x4, y4)
```

# 2476

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
M = 0 # 최댓값 넣을 변수 설정
for _ in range(1, N+1):
    A, B, C = map(int, input().split())
    if A != B != C:
        if A > B and A > C:
            m = A*100
        elif B > A and B > C:
            m = B*100
        elif C > A and C > B:
            m = C*100

    if A == B and B != C:
        m = A*100+1000
    if A != B and B == C:
        m = B*100+1000
    if A == C and C != B:
        m = C*100+1000

    if A == B == C:
        m = A*1000+10000

    if m > M:
        M = m
print(M)
```

# 2754

```python
import sys
sys.stdin = open("input.txt")

N = input()
if N == 'A+':
    print(4.3)
if N == 'A0':
    print(4.0)
if N == 'A-':
    print(3.7)
if N == 'B+':
    print(3.3)
if N == 'B0':
    print(3.0)
if N == 'B-':
    print(2.7)
if N == 'C+':
    print(2.3)
if N == 'C0':
    print(2.0)
if N == 'C-':
    print(1.7)
if N == 'D+':
    print(1.3)
if N == 'D0':
    print(1.0)
if N == 'D-':
    print(0.7)
if N == 'F':
    print(0.0)
```

# 2884

```python
import sys
sys.stdin = open("input.txt")

H, M = map(int, input().split())
if M - 45 >= 0:
    print(H, M - 45)
elif M -45 < 0:
    H -= 1
    M += 15
    if H >= 0:
        print(H, M)
    elif H < 0:
        H += 24
        print(H, M)
```

# 7567

```python
import sys
sys.stdin = open("input.txt")

lst = list(map(str,input()))
L = 10 # 처음 접시 높이
for i in range(len(lst)-1):
    if lst[i] == lst[i+1]:
        L += 5 # 접시가 같으면 +5
    else:
        L += 10 # 접시가 다른방향이면 +10
print(L)
```

# 5063

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for _ in range(N):
    r, e, c = map(int, input().split()) # r: 광고 안했을때 수익, e: 광고했을때 수익, c:광고비용
    if r + c == e:
        print('does not matter')
    if r + c > e:
        print('do not advertise')
    if r + c < e:
        print('advertise')
```

# 10102

```python
import sys
sys.stdin = open("input.txt")

V = int(input())
N = list(map(str,input()))

a = 0
b = 0
for i in range(V):
    if N[i] == 'A':
        a += 1
    if N[i] == 'B':
        b += 1

if a > b:
    print('A')
if a < b:
    print('B')
if a == b:
    print('Tie')
```

# 10886

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
cute = 0
for _ in range(N):
    V = int(input())
    if V == 1:
        cute += 1
    if V == 0:
        cute -= 1
# print(cute)
# 투표하는 사람이 홀수라 표가 같을 경우는 신경 안써도 됨.
if cute < 0:
    print("Junhee is not cute!")
else:
    print("Junhee is cute!")
```

# 10988

```python
import sys
sys.stdin = open("input.txt")

lst = list(map(str, input()))
# print(lst)
cnt = 0
for i in range(len(lst)//2): # 구간 절반만 확인해서 앞부분이 뒷부분과 같은지 확인
    if lst[i] == lst[-i-1]:
        cnt += 1
    else:
        cnt = 0
if cnt == len(lst)//2: # 결국 앞부분 뒷부분 같은 횟수만큼 카운트 되니까 같으면 팰린드롬이고 1출력
    print(1)
else: # 앞부분 뒷부분 다른 경우 카운팅이 안되서 확인을 진행한 횟수랑 카운트 횟수가 달라질 거임 그럼 팰린드롬 아니므로 0출력
    print(0)
```

