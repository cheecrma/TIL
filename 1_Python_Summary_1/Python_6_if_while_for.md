### if문

```python
if 조건문 :
    수행할 문장1
    #...
elif:
    수행할 문장ㄱ
    #...
else:
    수행할 문장A
    #...
```

if 조건문에서 "조건문"이란 참과 거짓을 판단하는 문장

비교연산자

- == : 같다
- != : 같지 않다
- x \>= y : x가 y보다 크거나 같다

----

- x or y : x와 y 둘다 False 여야 False
- x and y : x와 y 둘다 True 여야 True
- not x : x가 False 이면 True
- x in list : list안에 x가 있으면 True
- x not in list : list안에 x가 있으면 False

조건문에서 아무 일도 하지 않게 설정 : `pass` 사용

### 조건부 표현식

```python
if score >= 60:
    message = "success"
else:
    message = "failure"
```

```python
message = "success" if score >= 60 else "failure"
```

`조건문이 참인 경우` if `조건문` else `조건문이 거짓인 경우`



### while문

```python
while 조건문:
    수행할 문장1
    #...
```

while문은 조건문이 참인 동안 계속해서 while문 안의 내용을 반복적으로 수행.

break문 : 강제로 멈추게 하는 것

```python
coffee = 10
money = 300
while money:
     print("돈을 받았으니 커피를 줍니다.")
     coffee = coffee -1
     print("남은 커피의 양은 %d개입니다." % coffee)
     if coffee == 0:
         print("커피가 다 떨어졌습니다. 판매를 중지합니다.")
         break
```

```python
coffee = 10
while True:
    money = int(input("돈을 넣어 주세요: "))
    if money == 300:
        print("커피를 줍니다.")
        coffee = coffee -1
    elif money > 300:
        print("거스름돈 %d를 주고 커피를 줍니다." % (money -300))
        coffee = coffee -1
    else:
        print("돈을 다시 돌려주고 커피를 주지 않습니다.")
        print("남은 커피의 양은 %d개 입니다." % coffee)
    if coffee == 0:
        print("커피가 다 떨어졌습니다. 판매를 중지 합니다.")
        break
```

continue문 : while문의 맨 처음(조건문)으로 다시 돌아가게 만들고 싶은 경우

```python
a = 0
while a < 10:
    a = a + 1
    if a % 2 == 0:
        continue
    print(a)
```



### for문

```python
for 변수 in 리스트(또는 튜플, 문자열):
    수행할 문장1
    #...
```

```python
a = [(1,2), (3,4), (5,6)]
for (first, last) in a:
     print(first + last)
# 3
# 7
# 11
```

```python
marks = [90, 25, 67, 45, 80]

number = 0 
for mark in marks: 
    number = number +1 
    if mark >= 60: 
        print("%d번 학생은 합격입니다." % number)
    else: 
        print("%d번 학생은 불합격입니다." % number)
# 1번 학생은 합격입니다.
# 2번 학생은 불합격입니다.
# 3번 학생은 합격입니다.
# 4번 학생은 불합격입니다.
# 5번 학생은 합격입니다.
```

```python
marks = [90, 25, 67, 45, 80]

number = 0 
for mark in marks: 
    number = number +1 
    if mark < 60:
        continue 
    print("%d번 학생 축하합니다. 합격입니다. " % number)
# 1번 학생 축하합니다. 합격입니다.
# 3번 학생 축하합니다. 합격입니다.
# 5번 학생 축하합니다. 합격입니다.
```

```python
marks = [90, 25, 67, 45, 80]
for number in range(len(marks)):
    if marks[number] < 60: 
        continue
    print("%d번 학생 축하합니다. 합격입니다." % (number+1))
# 1번 학생 축하합니다. 합격입니다.
# 3번 학생 축하합니다. 합격입니다.
# 5번 학생 축하합니다. 합격입니다.
```

### for와 range를 이용한 구구단

```python
for i in range(2,10):        
     for j in range(1, 10):   
         print(i*j, end=" ") 
     print('') 
 
# 2 4 6 8 10 12 14 16 18 
# 3 6 9 12 15 18 21 24 27 
# 4 8 12 16 20 24 28 32 36
# 5 10 15 20 25 30 35 40 45
# 6 12 18 24 30 36 42 48 54 
# 7 14 21 28 35 42 49 56 63 
# 8 16 24 32 40 48 56 64 72 
# 9 18 27 36 45 54 63 72 81
```

### list 내표 사용하기

```python
a = [1,2,3,4]
result = []
for num in a:
     result.append(num*3)

print(result) # [3, 6, 9, 12]
```

```python
a = [1,2,3,4]
result = [num * 3 for num in a]
print(result) # [3, 6, 9, 12]
```

만약 짝수에만 3을 곱하여 담고 싶다면 리스트 내포안에 "if 조건" 사용

```python
a = [1,2,3,4]
result = [num * 3 for num in a if num % 2 == 0]
print(result) # [6, 12]
```

```python
[표현식 for 항목 in 반복가능객체 if 조건문]
```
