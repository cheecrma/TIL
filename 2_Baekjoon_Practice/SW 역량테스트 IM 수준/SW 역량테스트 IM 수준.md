# 13300

```python
import sys
sys.stdin = open("input.txt")

N, K = map(int, input().split())
room = [0]*12
for i in range(N):
    lst = list(map(int, input().split())) # lst[0]는 0은 여성 1은 남성, lst[1]는 학년
    # print(lst)

    if lst[0] == 0: # 여성
        for i in range(1,7): # 1학년 ~ 6학년
            if lst[1] == i:
                room[i-1] += 1
    if lst[0] == 1: # 남성
        for j in range(1,7): # 1학년 ~ 6학년
            if lst[1] == j:
                room[j+5] += 1
# print(room)
# 우선적으로 같은 학년 같은 성별 room에 넣어 놨음.

cnt = 0
for i in range(12):
    k = room[i]
    if k == 0:
        cnt += 0
    while k > K: # 같은방에 K명이상 있는 경우 쪼개서 방 개수 카운트 해주기
        cnt += 1
        k -= K
    if 1<= k <= K : # K명이하와 1명 이상인 경우
        cnt += 1
print(cnt)
```

# 2309

```python
import sys
sys.stdin = open("input.txt")

lst = []
for i in range(9):
    lst.append(int(input()))
# print(lst)

# 두개 빼내고 합이 100이기 위해서 두개 위치 찾기
for a in range(9):
    for b in range(9):
        if a != b:
            if sum(lst) - lst[a] -lst[b] == 100:
                x1 = a
                x2 = b
# print(x1)
# print(x2)
arr = []
for i in range(9):
    if i == x1:
        continue
    if i == x2:
        continue
    arr.append(lst[i])
# print(arr)

# 두개 빼내고 오름차순 정렬
for _ in range(7):
    for i in range(6):
        if arr[i] > arr[i+1]:
            arr[i],arr[i+1] = arr[i+1],arr[i]

for i in range(7): # 오름차순으로 출력하도록 하기
    print(arr[i])
```

# 2605

```python
import sys
sys.stdin = open("input.txt")

n = int(input())
lst = list(map(int, input().split()))

arr = []
for i in range(1, n+1):
    s = lst[i-1]
    # print(s)
    arr.insert(i-s-1, i) # i-s-1부분에 i를 대입하는 insert함수 사용!

# print(arr)
for j in range(n):
    print(arr[j], end=' ')
```

# 2669

```python
import sys
sys.stdin = open("input.txt")

lst = [[0]*100 for _ in range(100)]
for _ in range(4):
    x1, y1, x2, y2 = map(int,input().split())
    for i in range(x1, x2):
        for j in range(y1, y2):
            lst[i][j] = 1

cnt = 0
for i in lst:
    cnt += sum(i)
print(cnt)
```

# 10163

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
box = [[0]*1001 for _ in range(1001)] # 색종이가 놓일 수 있는 공간
for i in range(1,N+1): # N장의 색종이
    x1,y1,x2,y2 = map(int, input().split())
    for y in range(y1,y1+y2):
        box[y][x1:x1+x2] = [i]*x2
for i in range(1, N+1):
    rlt = 0
    for j in range(1001):
        rlt += box[j].count(i)
    print(rlt)


# N = int(input())
# box = [[0]*1001 for _ in range(1001)] # 색종이가 놓일 수 있는 공간
# for i in range(1,N+1): # N장의 색종이
#     x1,y1,x2,y2 = list(map(int, input().split()))
#     for j in range(x1,x1+x2):
#         for k in range(y1,y1+y2):
#             box[j][k] = i # 해당 번호의 색종이가 차지하는 범위를 공간에 해당 번호 표시
# # for i in range(1,N+1) 이 돌면서 결국 다음 해당 번호의 색종이가 box[j][k] = i 로 겹치는 부분은 새롭게 다시 표기 된다.
#
# for i in range(1,N+1):
#     cnt = 0
#     for z in box: # 박스에서 표기 된 숫자 부분들 개수 확인
#         cnt += z.count(i)
#     print(cnt)
# 위에 주석은 시간초과..
```

# 14696

```python
import sys
sys.stdin = open("input.txt")

# 우선 순위 별, 동그라미, 네모, 세모 (4, 3, 2, 1)
# 각 해당 모양 개수 비교하고 전부 같으면 무승부
N = int(input())
for tc in range(1, N+1):
    a = list(map(int, input().split())) # 맨앞은 개수 나옴
    b = list(map(int, input().split()))
    A = a[1:] # 카드 문양만 있음.
    B = b[1:]

    # 큰 수부터 차례로 나옴 그러니 각 자리 비교하기
    check_A = []
    check_B = []
    for i in range(1, 5):
        check_A.append(A.count(i))
        check_B.append(B.count(i))
    # print(check_A) # 0번 인덱스는 1숫자 개수... 3번 인덱스는 4숫자 개수
    # print(check_B)

    # 4숫자 해당하는 인덱스의 수 비교 같으면 3, 2, 1 순차적으로 다같으면 D출력

    for j in range(4):
        if check_A[-j-1] > check_B[-j-1]:
            print('A')
            break
        if check_A[-j-1] < check_B[-j-1]:
            print('B')
            break
        if check_A[:] == check_B[:]: # 모든 인덱스 부분이 같으면 무승부
            print('D')
            break
```

# 2563

```python
import sys
sys.stdin = open("input.txt")

N = int(input())

arr = [[0]*101 for _ in range(101)]
# print(arr) 0번째 가로세로 줄은 비어있음.

for tc in range(1, N+1):
    x, y = map(int, input().split())
    for i in range(x, 10+x):
        for j in range(y, 10+y):
            arr[i][j] += 1
# print(arr)

cnt = 0
for a in range(101):
    for b in range(101):
        if arr[a][b] == 0:
            cnt += 1

print(101*101 - cnt)
# 전체 0의 판에서 cnt 는 0의 개수들을 구해줬으므로 그걸 빼주면
# 색종이들이 있는 넓이가 나옴
```

# 2628

```python
import sys
sys.stdin = open("input.txt")

X, Y = map(int, input().split())
N = int(input())
X_lst = [0, Y] # 0부터 구간 나눠 넓이 구하기 위해 0을 넣어줌
Y_lst = [0, X]
for tc in range(1, N+1):
    A, B = map(int, input().split())
    # A는 가로세로 판단, B는 그 해당 번호 번째 자르기
    if A == 0:
        X_lst.append(B)
    else:
        Y_lst.append(B)

X_lst.sort()
Y_lst.sort()

large_X = 0
for i in range(1, len(X_lst)):
    if X_lst[i] - X_lst[i-1] > large_X:
        large_X = X_lst[i] - X_lst[i-1]
# print(large_X)

large_Y = 0
for j in range(1, len(Y_lst)):
    if Y_lst[j] - Y_lst[j-1] > large_Y:
        large_Y = Y_lst[j] - Y_lst[j-1]

print(large_X * large_Y)
```

# 2578

```python
import sys
sys.stdin = open("input.txt")

arr = []
for _ in range(5):
    arr.append(list(map(int, input().split())))

lst = list(map(int, input().split()))
for _ in range(4):
    lst += list(map(int, input().split()))
# print(lst) # 부를 번호 일직선 나열

check = [0] * 12 # 0부터4는 가로 5부터9는 세로 10,11은 대각선
cnt = 0
flag = False
for k in range(25): # 부르는 번호 순회
    if flag == True:
        break
    for i in range(5): # 빙고판 순회
        if flag == True:
            break
        for j in range(5):
            if flag == True:
                break
            if lst[k] == arr[i][j]:
                arr[i][j] = 0 # 0으로 바꿔줌
                check[i] += 1 # 행 체크
                check[j+5] += 1 # 열 체크
                if i == j: # 대각
                    check[10] += 1
                if i + j == 4: #반대각
                    check[11] += 1
                for c in range(12):
                    if check[c] == 5:
                        check[c] = 0
                        cnt += 1
                        if cnt == 3:
                            flag = True
                            break
print(k)
```

# 1244

```python
import sys
sys.stdin = open("input.txt")

N = int(input()) # 스위치 총 개수
lst = list(map(int, input().split()))
students = int(input()) # 학생 수


for student in range(students): # 각 학생들 확인
    gender, number = map(int, input().split())

    if gender == 1:
        for i in range(1, N//number +1): # 남자, 나온 숫자들 배수 체크
            if lst[(number*i) -1] == 0:
                lst[(number*i) -1] = 1
            elif lst[(number*i) -1] == 1:
                lst[(number*i) -1] = 0
    if gender == 2: #여자, 나온 숫자 대칭 체크
        if lst[(number - 1)] == 0:
            lst[(number-1)] = 1
        elif lst[(number-1)] == 1:
            lst[(number-1)] = 0
        L = number - 2
        R = number
        while L >= 0 and R < N and lst[L] == lst[R]:
            if lst[L] == 0:
                lst[L], lst[R] = 1, 1

            elif lst[L] == 1:
                lst[L], lst[R] = 0, 0
            L -= 1
            R += 1
            if L < 0 or R >= N:
                break

# 20개씩 출력
cnt = 0
ans = ''
for j in range(N):
    ans += (str(lst[j]) + ' ')
    cnt += 1
    if cnt == 20:
        print(ans)
        ans = ''
        cnt = 0
        
if len(ans) != 0:
    print(ans)
```

# 2477

```python
import sys
sys.stdin = open("input.txt")

G = int(input()) # 1m^2의 넓이에 자라는 참외 개수
# 6각형이므로 6개의 입력 값이 주어질 거임
# 4(북쪽) 으로 가는 값이랑 3(남쪽)의 각각 합은 같을 거고
# 1(동쪽) 과 2(서쪽) 의 각각 합은 같을 거임

# 전체 사각형에서 6각형으로 만드는 작은 사각형을 빼줄 거임

new_lst = []
for _ in range(6):
    lst = list(map(int, input().split()))
    new_lst.append(lst)
# print(new_lst)

# 가로 세로 길이 변수 설정
R = 0
C = 0
for i in range(6):
    if new_lst[i][0] == 1:
        # 동쪽 변이 두개든 한개든 다 더하면 결국 전체 가로 길이 나옴
        # 1이 아니라 서쪽 2여도 상관없음
        R += new_lst[i][1]
    if new_lst[i][0] == 3: # 남쪽 전체 길이
        C += new_lst[i][1]

# print(R)
# print(C)

# 6번의 동서남북이 나오는데 육각형으로 들어갈려면 그 방향은 2번씩 나오게 됨.
# 그리고 그 들어간 부분의 빼야하는 사각형은 반복되는 부분의 가운데 임
for i in range(3):
    if new_lst[i][0] == new_lst[i+2][0]:
        if new_lst[i+1][0] == new_lst[i+3][0]: # 시작지점부터 2개씩 나오는게 4개인경우
            empty_S = new_lst[i+1][1]*new_lst[i+2][1]

        if new_lst[i+1][0] == new_lst[i-1][0]: # 3개인 경우
            empty_S = new_lst[i][1]*new_lst[i+1][1]
            break
    if new_lst[0][0] == new_lst[-2][0]: # 2개인 경우
        if new_lst[1][0] == new_lst[-1][0]:
            empty_S = new_lst[i][1]*new_lst[-1][1]
            break
        if new_lst[-1][0] == new_lst[-3][0]:
            empty_S = new_lst[-1][1]*new_lst[-2][1]
            break


print((R*C - empty_S)*G)
```

# 10157

```python
import sys
sys.stdin = open("input.txt")

C, R = map(int, input().split())
num = int(input())

box = [[0 for _ in range(C)] for _ in range(R)]
if num > C*R:
    print(0)
    exit()

cnt = 1
dir = 0
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
new_R = R - 1
new_C = 0
while True:
    if cnt == num:
        print((new_C+1), (R-new_R))
        break
    box[new_R][new_C] = cnt
    nR = new_R + dx[dir]
    nC = new_C + dy[dir]
    if nR < 0 or nC < 0 or nR >= R or nC >= C or box[nR][nC] != 0:
        dir = (dir+1) % 4 # 방향전환
        nR = new_R + dx[dir]
        nC = new_C + dy[dir]
    new_R = nR
    new_C = nC
    cnt += 1
```

# 10158

```python
import sys
sys.stdin = open("input.txt")

w, h = map(int, input().split()) # 사각형 전체 사이즈
p, q = map(int, input().split()) # 초기 개미 위치
t = int(input()) # 움직인 시간

a = (p + t) // w
if a % 2 == 0:
    x = (p+t) % w
else:
    x = w - (p+t) % w

b = (q + t) // h
if b % 2 == 0:
    y = (q+t) % h
else:
    y = h - (q+t) % h
print(x, y)
```

# 2559

```python
import sys
sys.stdin = open("input.txt")

# N, K = map(int, input().split())
# lst = list(map(int, input().split()))
#
# # check = []
# rlt = 0
# for i in range(N-K+1):
#     if sum(lst[i:K+i]) > rlt:
#         rlt = sum(lst[i:K+i])
#     # check.append(sum(lst[i:K+i]))
# # print(max(check))
# print(rlt)
#
# # 주석은 시간 초과

N, K = map(int, input().split())
arr = list(map(int, input().split()))

lst = sum(arr[:K])
rlt = lst
for i in range(K,N):
    lst += arr[i] - arr[i-K]
    rlt = max(rlt, lst)
print(rlt)
```

# 2491

```python
import sys
sys.stdin = open("input.txt")

N = int(input())
lst = list(map(int, input().split()))

cnt = 1
rlt = 1 # 최소 2는 나옴 연속된 수는
for i in range(N-1):
    if lst[i] >= lst[i+1]:
        cnt += 1
    else:
        cnt = 1
    if rlt < cnt:
        rlt = cnt
# print(rlt)

cnt = 1
for j in range(N-1):
    if lst[j] <= lst[j+1]:
        cnt += 1
    else:
        cnt = 1
    if rlt < cnt:
        # rlt는 위에 for문에서 부터 이어 오고 있는 거니까
        # 자연스럽게 최대값 계속 비교 가능
        rlt = cnt
print(rlt)
```

# 2527

```python
import sys
sys.stdin = open("input.txt")

for _ in range(4):
    x1, y1, p1, q1, x2, y2, p2, q2 = map(int, input().split())


    # 아예 안만나는 경우
    if x1 > p2 or p1 < x2 or y2 > q1 or y1 > q2:
        print('d')

    # 꼭지점 만나는 경우
    elif x1 == p2 or x2 == p1:
        if q1 == y2 or q2 == y1:
            print('c')
        else:
            print('b')

    elif q1 == y2 or q2 == y1:
        print('b')

    else:
        print('a')
```

# 2564

```python
import sys
sys.stdin = open("input.txt")

x, y = map(int, input().split())
array = []
n = int(input()) # 상점 개수
for _ in range(n+1):
    position, value = map(int, input().split())
    if position == 1:
        array.append(y + value)
    elif position == 2:
        array.append(-value)
    elif position == 3:
        array.append(y-value)
    else:
        array.append(-x-y+value)

total = 2*x + 2*y
cnt = 0
for i in range(n):
    val = array[n] - array[i]
    if val < 0:
        val *= -1
    if total - val > val:
        cnt += val
    else:
        cnt += (total - val)
print(cnt)
```

