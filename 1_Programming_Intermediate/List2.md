# 01 2차원 List

- 1차원 List를 묶어놓은 List
- 2차원 List의 선언: 세로길이(행의 개수), 가로길이(열의 개수)를 필요로 함

### 2차원 List 입력 받기

```input.txt
3 4
0 1 0 0
0 0 0 0
0 0 1 0
```

```python
n, m = map(int, input().split())
mylist = [0 for _ in range(n)]
# mylist = [0]*n

for i in range(n):
    mylist[i] = list(map(int, input().split()))
```

```python
n, m = map(int, input().split())
mylist = []
for i in range(n):
    mylist.append(list(map(int, input().split())))
```

```python
n, m = map(int, input().split())
mylist = [list(map(int, input().split())) for _ in range(n)]
```

## 델타를 이용한 2차 List 탐색

1. 2차 List의 한 좌표에서 네 방향의 인접 List 요소를 탐색할 때 사용하는 방법
2. 델타 값은 한 좌표에서 네 방향의 좌표와 x,y의 차이를 저장한 List로 구현
3. 델타 값을 이용하여 특정 원소의 상하좌우에 위치한 원소에 접근할 수 있음

- 이차원 List의 가장자리 원소들은 상하좌우 네 방향에 원소가 존재하지 않을 경우가 있으므로, Index를 체크하거나 Index의 범위를 제한해야 함

```python
# arr[0...n-1][0...n-1] : 2차원 List
dx = [0, 0, -1, 1] # 상하좌우
dy = [-1, 1, 0, 0]

for x in range(len(arr)):
    for y in range(len(arr[x])):
        for i in range(4):
            testX = x + dx[i]
            testY = y + dy[i]
            print(arr[testX][testY])
```



### 전치 행렬

```python
for i in range(n):
    for j in range(n):
        if i < j:
            arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
```

# 02 부분 집합

## 부분 집합의 합 문제

- 유한 개의 정수로 이루어진 집합이 있을 때, 이 집합의 부분 집합 중에서 그 집합의 원소를 모두 더한 값이 0이 되는 경우가 있는지를 알아내는 문제

### 부분 집합 문제 알고리즘1

```python
bit = [0, 0, 0, 0]
for i in range(2):
    bit[0] = i	# 0번째 원소
    for j in range(2):
        bit[1] = j	# 1번째 원소
        for k in range(2):
            bit[2] = k	# 2번째 원소
            for l in range(2):
                bit[3] = l	# 3번째 원소
                print(bit)
```

### 부분 집합 문제 알고리즘2

- 비트 연산자
  - 0과 1로 이루어진 이진수에 대한 연산을 수행하는 연산자

- 비트연산자 종류
  - & : 비트 단위로 AND 연산을 함
  - | : 비트 단위로 OR 연산을 함
  - << : 피연산자의 비트 열을 왼쪽으로 이동시킴
  - \>> : 피연산자의 비트 열을 오른쪽으로 이동시킴

```python
arr = [3, 6, 7, 1, 5, 4]
n = len(arr) # n: 원소의 개수

for i in range(1<<n): # 1<<n : 부분집합의 개수
    for j in range(n): # 원소의 수만큼 비트를 비교함 (원소의 포함 여부 판단이 가능함)
        if i & (1<<j): # i의 j번째 비트가 1이면 j번째 원소 출력
            print(arr[j], end=" ")
    print()
```

# 03 검색

- 저장되어 있는 자료 중에서 원하는 항목을 찾는 작업
  - 원하는 항목 : 목적하는 탐색키를 가진 항목
    - 탐색키(Search key) : 자료를 구별하여 인식할 수 있는 키

- 검색의 종류
  1. 순차 검색 (Sequential Search)
  2. 이진 검색 (Binary Search)
  3. 인덱싱 (Indexing)

### 순차 검색

- 일렬로 되어 있는 자료를 순서대로 검색하는 방법
- List나 연결 List 등 순차구조로 구현된 자료구조에서 유용함
- 구현이 쉽지만, 검색 대상이 많은 경우 수행시간의 증가로 비효율적임

### 이진 검색

- 효율적인 검색 방법

- 자료의 가운데 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속하는 방법

- 이진 검색을 하기 위해서는 자료가 정렬된 상태여야 함

- 이진 검색의 검색 과정

  1. 자료의 중앙에 있는 원소를 선택

  2. 중앙 원소의 값과 찾고자 하는 목표값을 비교

  3. 목표값 < 중앙 원소 값 : 자료의 왼쪽 반에 대해서 새로 검색을 수행

     목표값 > 중앙 원소 값 : 자료의 오른쪽 반에 대해서 새로 검색을 수해

  4. 찾고자 하는 값을 찾을 때까지 [ 1 ~ 3 ]의 과정을 반복

### 인덱스

- 데이터베이스(Database)에서 유래, 테이블에 대한 동작 속도를 높임
- 룩 업 테이블(Look up table) 등의 용어로 사용함
- 인덱스를 저장하는데 필요한 디스크 공간은 보통 테이블 저장에 필요한 디스크 공간보다 작음
- List를 사용한 인덱스

# 04 정렬

### 셀렉션 알고리즘 의미

- 저장되어 있는 자료로부터 k번째로 큰 혹은 작은 원소를 찾는 방법
- 최소값, 최대값 혹은 중간값을 찾는 알고리즘을 의미하기도 함

### 선택 정렬 

- 선택 정렬 의미
  - 주어진 자료들 중 가장 작은 값의 원소부터 차례대로 선택하여 위치를 교환하는 방식
  - 셀렉션 알고리즘을 전체 자료에 적용한 것
- 정렬 과정
  - 주어진 List 중에서 최소값을 찾음
  - 그 값을 List의 맨 앞에 위치한 값과 교환
  - 맨 처음 위치를 제외한 나머지 List를 대상으로 위의 과정을 반복
