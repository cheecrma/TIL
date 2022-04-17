```python
# n = int(input()) # 정수 한 개 입력 받기
# a, b = map(int,input().split()) # 정수 여러개 입력 받기
# lst = list(map(int, input().split())) #정수 형태를 일차원 리스트로 입력 받기
# numbers = list(map(int, list(input()))) # 띄어쓰기가 없는 정수 입력 받아서 리스트 만들기 (붙어있는 숫자나열 된걸 리스트로)

# matrix = []
# for _ in range(2):
#     row = list(map(int, input().split()))
#     matrix.append(row)

# matrix_2 = [x for x in range(10)] # 0부터 9까지 리스트
# matrix = [list(map(int, input().split())) for _ in range(2)] # 위에 matrix 와 같은 의미임
```

```python
# 얕은 복사와 깊은 복사

# lst = [1, 2, 3, 4]
# temp = []
# # temp.append(lst) # 얕은 복사가 일어나서 안되는구나!
# temp.append(lst[:])
#
# lst.pop()
# lst.insert(0, 5)
# print(temp)

# lst = [[1, 2], [3, 4]]
# temp = []
# temp.append(lst[:]) # 1차원이 아닌 2차원 3차원 등은 이런 어펜드 복사는 리스트 안의 리스트 원소 복사 안됨.
# lst[0][0] = 5
# print(temp)
```

```python
# 빈 matrix 만들기
# zeros = [[0] * 5] * 5 # 얕은 복사가 일어난다

# zeros[0][0] = 99

# print(zeros)


# zeros = []
# for _ in range(5):
#     row = [0] * 5
#     zeros.append(row)
#
# zeros[0][0] = 99
#
# for row in zeros:
#     print(row)
#
# # zero_matrix = [[0] * 5 for _ in range(5)] # 이렇게 쓸 수 도 있음.
```

```python
# 리스트 사이에 리스트 넣기
# lst = [1, 2, 3, 4]
# lst[2:2] = ["a", "b", "c"]
# print(lst)

# 리스트 변경
# lst = [1, 2, 3, 4]
# lst[1:3] = ["a", "b"]
# print(lst)
```

