# 11721

```python
import sys
sys.stdin = open("input.txt")

sentence = input()

cnt = 0
for i in sentence:
    print(i, end='')
    cnt += 1
    if cnt >= 10:
        print()
        cnt = 0
```

# 10821

```python
import sys
sys.stdin = open("input.txt")

# 콤마가 연속해서 주어지지도 않으니
# 그냥 콤마 갯수 세고 +1 하면 된다고 판단

S = input()
print(S.count(',')+1)
```

# 10808

```python
import sys
sys.stdin = open("input.txt")

S = input()
lst = 'abcdefghijklmnopqrstuvwxyz'
new_cnt = [0]*26
for i in range(26):
    for j in S:
        if lst[i] == j:
            new_cnt[i] += 1
    print(new_cnt[i], end=' ')
```

# 1157

```python
import sys
sys.stdin = open("input.txt")

S = input()
# print(S.upper())
new_S = S.upper()
# print(sorted(new_S))
lst = sorted(new_S)
# print(lst)
alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

new_lst = []
for i in alpha:
    new_lst.append(lst.count(i))
# print(new_lst)

# 만약 최대값이 2개이상이면 ? 출력
cnt = 0
for i in range(26):
    if new_lst[i] == max(new_lst):
        cnt += 1
        k = i
if cnt >= 2:
    print('?')

else:
    print(alpha[k])
```

# 5218

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
num = [i for i in range(1,27)]
# print(num)

dic = {name: value for name, value in zip(alpha, num)}
# print(dic)

for tc in range(1, T+1):
    x, y = map(str, input().split())
    check_x = []
    check_y = []

    for i in range(len(x)):
        check_x.append(dic[x[i]])

    for j in range(len(y)):
        check_y.append(dic[y[j]])

    # print(check_x)
    # print(check_y)

    rlt = []
    for i in range(len(x)):

        if check_x[i] <= check_y[i]:
            rlt.append(check_y[i] - check_x[i])
        else:
            rlt.append(check_y[i] - check_x[i] + 26)

    # print(rlt)
    print(f'Distances:', end=' ')
    for i in range(len(x)):
        print(rlt[i], end=' ')
    print()
```

# 9086

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    S = input()
    print(S[0], end='')
    print(S[-1])
```

# 11365

```python
import sys
sys.stdin = open("input.txt")

c = 0
while c == 0:
    S = input()
    if S != 'END':
        # print(S)
        for i in range(len(S)):
            print(S[-i-1], end='')
        print()
    if S == 'END':
        c += 1
```

# 11170

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    lst = []
    for i in range(N,M+1):
        lst.append(str(i))

    # print(lst)

    new_lst = [s for s in lst if '0' in s]
    # print(new_lst)

    total = 0
    for i in range(len(new_lst)):
        total += (new_lst[i].count('0'))
    print(total)
```

# 11655

```python
import sys
sys.stdin = open("input.txt")

lst_A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lst_a = 'abcdefghijklmnopqrstuvwxyz'

S = list(input())
# print(S)
for i in S:
    for j in range(26):
        if lst_A[j] == i:
            if j <= 12:
                print(lst_A[j+13], end='')
            else:
                print(lst_A[j-13], end='')
        if lst_a[j] == i:
            if j <= 12:
                print(lst_a[j+13], end='')
            else:
                print(lst_a[j-13], end='')
        if i == ' ':
            print('',end=' ')
            break
    for k in range(10):
        if i == str(k):
            print(i, end='')
```

# 1676

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
total = 1
while N > 0:
    total *= N
    N -= 1
# print(total)

lst = list(str(total))
new_lst = list(map(int, lst))
# print(new_lst)
new_lst.reverse()
# print(new_lst)

cnt = 0
for i in range(len(new_lst)):
    if new_lst[i] == 0:
        cnt += 1
    else:
        break
print(cnt)
```
