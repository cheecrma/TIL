### 4828_1일차_min max

```python
import sys
sys.stdin = open("input.txt")

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    lst = list(map(int, input().split()))

    sort_lst = sorted(lst)

    print(f'#{tc} {sort_lst[-1] - sort_lst[0]}')
```

### 4831_1일차_전기버스

```python
```

