# 10818

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = map(int, input().split())


max_number = 0
min_number = 1000000 # 입력 범위 백만 이하이므로
for j in numbers:
    if j < min_number:
        min_number = j
    if j > max_number:
        max_number = j

print(min_number, end=' ')
print(max_number)
```

# 5054

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    visit = int(input())
    store = map(int, input().split())
    total = 0
    # 결국 주차한 곳에서 다른 상점까지 왔다갔다 해야하므로
    # 최소 위치의 상점과 최대 위치의 상점의 두 거리의 차 의 2배를 하면 값이 나온다.
    # 어디다 주차를 하냐는 중요하지 않음.

    max_store = 0
    min_store = 100 # 상점위치는 99이하이므로
    for i in store:
        if i > max_store:
            max_store = i
        if i < min_store:
            min_store = i
    print((max_store - min_store)*2)
```

# 2822

```python
import sys
sys.stdin = open("input.txt")

lst = [int(input()) for _ in range(8)]
# print(lst)
# print(sorted(lst))
new_lst = sorted(lst)
print(sum(new_lst[3:8]))

# 0 20 30 33 48 50 64 66
# print(new_lst)
# print(lst)
for i in range(8):
    if lst[i] == new_lst[3]:
        print(i+1, end=' ')
    if lst[i] == new_lst[4]:
        print(i+1, end=' ')
    if lst[i] == new_lst[5]:
        print(i+1, end=' ')
    if lst[i] == new_lst[6]:
        print(i+1, end=' ')
    if lst[i] == new_lst[7]:
        print(i+1, end=' ')
```

# 2750

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
lst = []
for tc in range(1, N+1):
    lst.append(int(input()))
# print(lst)
# print(sorted(lst))
new_lst = sorted(lst)
for i in range(N):
    print(new_lst[i])
```

# 2752

```python
import sys
sys.stdin = open("input.txt")

numbers = map(int, input().split())
lst = sorted(numbers)
for i in range(len(lst)):
    print(lst[i], end=' ')
```

# 1037

```python
import sys
sys.stdin = open("input.txt")

A_cnt = int(input()) # 진짜 약수의 개수
A_lst = list(map(int, input().split())) # 진짜 약수들

new_lst = sorted(A_lst)
if len(new_lst) == 1: # 진짜 약수 개수가 1개인 경우 그거 2배하면 됨.
    print(new_lst[0]**2)
else:
    print(new_lst[0]*new_lst[-1]) # 아닌 경우 정렬했으므로 양 끝값 곱하면 됨.
```

# 5543

```python
import sys
sys.stdin = open("input.txt")

bugger = [int(input()) for _ in range(3)]
# print(bugger)
# print(min(bugger))
drink = [int(input()) for _ in range(2)]
# print(drink)
# print(min(drink))
print(min(bugger)+min(drink)-50)
```

# 2587

```python
import sys
sys.stdin = open("input.txt")

number = [int(input()) for _ in range(5)]
lst = sorted(number)
print(sum(lst)//5) # 자연수라 했으므로 // 해도 괜찮음.
print(lst[2])
```

# 1427

```python
import sys
sys.stdin = open("input.txt")

lst = list(input())
for j in range(len(lst)-1):
    for i in range(len(lst)-1):
        if lst[i] < lst[i+1]:
            lst[i], lst[i+1] = lst[i+1], lst[i]

for z in range(len(lst)):
    print(lst[z], end='')
```

# 2309

```python
# 이전에 풀었던 적 있음. 다시 풀어봄.
import sys
sys.stdin = open("input.txt")

lst = [int(input()) for _ in range(9)]

for i in range(9):
    for j in range(9):
        if i != j:
            if sum(lst) - lst[i] - lst[j] == 100:
                a = i
                b = j
# print(a)
# print(b)
lst.remove(lst[a])
lst.remove(lst[b])
# print(lst)
# print(sorted(lst))
new_lst = sorted(lst)
for i in range(7):
    print(new_lst[i])
```
