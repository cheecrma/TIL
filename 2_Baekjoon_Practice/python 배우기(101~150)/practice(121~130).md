# 9076

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    lst = list(map(int, input().split()))
    new_lst = sorted(lst)
    # print(new_lst)
    new_lst.pop(0)
    new_lst.pop(-1)
    # print(new_lst)
    if abs(new_lst[0] - new_lst[-1]) >= 4:
        print("KIN")
    else:
        print(sum(new_lst))
```

# 2693

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    lst = sorted(map(int, input().split()))
    print(lst[-3])
```

# 5176

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    P, M = map(int, input().split())
    lst = []
    for i in range(P):
        lst.append(int(input()))
    # print(lst)
    # print(set(lst))
    print(P - len(set(lst)))
```

# 10773

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
lst = []
for tc in range(1, T+1):
    N = int(input())
    if N != 0:
        lst.append(N)
    if N == 0:
        lst.pop(-1)
print(sum(lst))
```

# 3040

```python
import sys
sys.stdin = open("input.txt")

lst = []
for i in range(9):
    N = int(input())
    lst.append(N)
# print(lst)

for i in range(9):
    for j in range(9):
        if i != j:
            if sum(lst) - lst[i] - lst[j] == 100:
                A = i
                B = j
lst.pop(A)
lst.pop(B)
# print(lst)
for i in range(7):
    print(lst[i])
```

# 10809

```python
import sys
sys.stdin = open("input.txt")

S = input()
alpha = 'abcdefghijklmnopqrstuvwxyz'
for i in alpha:
    if i in S:
        print(S.index(i), end=' ')
    else:
        print(-1, end=' ')
```

# 3058

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    numbers = map(int, input().split())
    lst = []
    for i in numbers:
        if i % 2 == 0:
            lst.append(i)
    # print(sorted(lst))
    new_lst = sorted(lst)
    print(sum(new_lst), end=' ')
    print(new_lst[0])
```

# 5800

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    lst = list(map(int, input().split()))
    # new_lst = sorted(lst)
    # print(lst)
    N = lst[0]
    # print(N)
    new_lst = lst[1:]
    # print(new_lst)
    sort_lst = sorted(new_lst)
    # print(sort_lst)

    total = 0
    for i in range(N-1):
        if abs(sort_lst[i] - sort_lst[i+1]) > total:
            total = abs(sort_lst[i] - sort_lst[i+1])

    print(f'Class {tc}')
    print(f'Max {sort_lst[-1]}, Min {sort_lst[0]}, Largest gap {total}')

    # 처음엔 lst 받은 거 맨앞 학생수 구분안해줬는데 생각해보니
    # 구분안하고 바로 sorted 하면 학생수보다 낮은 성적을 받은 점수가 더 앞으로 올 수 있었음.
```

# 10870

```python
import sys
sys.stdin = open("input.txt")

N = int(input())

lst = [0, 1]
if N == 0:
    print(0)
else:
    for i in range(N-1):
        lst.append(lst[i]+lst[i+1])
    # print(lst)
    print(lst[-1])
```

# 5576

```python
import sys
sys.stdin = open("input.txt")

lst_w = [int(input()) for _ in range(10)]
# print(lst_w)
lst_k = [int(input()) for _ in range(10)]
# print(lst_k)
W_sort = sorted(lst_w)
K_sort = sorted(lst_k)
# print(W_sort)
# print(W_sort[-1:-4:-1])
print(sum(W_sort[-1:-4:-1]), sum(K_sort[-1:-4:-1]))
```
