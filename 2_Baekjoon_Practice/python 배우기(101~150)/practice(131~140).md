# 11047

```python
import sys
sys.stdin = open("input.txt")

N, K = map(int, input().split())
lst = []
for i in range(N):
    lst.append(int(input()))
# print(lst)

# cnt = 0
# while K != 0:
#     for i in range(N-1):
#         if lst[i] <= K < lst[i+1]:
#             K -= lst[i]
#             cnt += 1
#             break
#         if lst[N-1] <= K:
#             K -= lst[N-1]
#             cnt += 1
#             break
#
# print(cnt)

# 위에 식은 시간초과가 나온다.

cnt = 0
for i in range(N-1,-1,-1): # 역순으로 리스트 배치시킴
    if K == 0:
        break
    if lst[i] > K:
        continue
    cnt += K // lst[i] # 역순으로 진행하므로 액수를 나눈 몫을 카운트값으로 본다.
    K %= lst[i] # 나머지를 저장
print(cnt)
```

# 2743

```python
import sys
sys.stdin = open("input.txt")

N = list(input())
print(len(N))
```

# 2744

```python
import sys
sys.stdin = open("input.txt")

N = input()
for i in N:
    if i.isupper():
        print(i.lower(), end='')
    if i.islower():
        print(i.upper(), end='')
```

# 10953

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    A, B = map(int, input().split(","))
    print(A+B)
```

# 2902

```python
import sys
sys.stdin = open("input.txt")

sentence = input()
for i in sentence:
    if i.isupper():
        print(i, end='')
```

# 1357

```python
import sys
sys.stdin = open("input.txt")

A, B = map(int, input().split())

def REV(X):
    return int(str(X)[::-1])

print(REV(REV(A) + REV(B)))
```

# 10987

```python
import sys
sys.stdin = open("input.txt")

name = input()
cnt = 0
for i in name:
    if i == 'a' or i =='e' or i=='i' or i=='o' or i=='u':
        cnt += 1
print(cnt)
```

# 4458

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
for tc in range(1, N+1):
    sentence = input()
    # print(sentence[0])
    if sentence[0].isupper():
        print(sentence)
    if sentence[0].islower():
        print(sentence[0].upper(), end='')
        print(sentence[1:])
```

# 11654

```python
import sys
sys.stdin = open("input.txt")

N = input()
lst_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lst_2 = 'abcdefghijklmnopqrstuvwxyz'
lst_3 = '0123456789'

for i in range(26):
    if lst_1[i] == N: # 대문자인 경우
        print(i+65)

    if lst_2[i] == N: # 소문자인 경우
        print(i+97)

for j in range(10):
    if lst_3[j] == N: # 숫자인 경우
        print(j+48)
```

# 11720

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
lst = list(input())
# print(lst)
total = 0
for i in range(N):
    total += int(lst[i])
print(total)
```
