# 2557

```python
print("Hello World!")
```

# 1000

```python
A, B = input().split() 
#.split([chars])은 문자열 변경 메소드로 공백이나 특정 문자를 기준으로 분리해줌.
A = int(A)
B = int(B)
print(A+B)
```

# 10998

```python
A, B = input().split() 
#.split([chars])은 문자열 변경 메소드로 공백이나 특정 문자를 기준으로 분리해줌.
A = int(A)
B = int(B)
print(A*B)
```

# 1001

```python
A, B = input().split() 
#.split([chars])은 문자열 변경 메소드로 공백이나 특정 문자를 기준으로 분리해줌.
A = int(A)
B = int(B)
print(A-B)
```

# 1008

```python
A, B = input().split() 
#.split([chars])은 문자열 변경 메소드로 공백이나 특정 문자를 기준으로 분리해줌.
A = int(A)
B = int(B)
print(A/B)
```

# 10869

```python
A, B = input().split() 
A = int(A)
B = int(B)
print(A+B)
print(A-B)
print(A*B)
print(int(A/B))
print(A%B)
```

# 10430

```python
A, B, C = input().split() 
A = int(A)
B = int(B)
C = int(C)
print((A + B) % C)
print(((A % C) + (B % C)) % C)
print((A * B) % C)
print( ((A % C) * (B % C)) % C)
```

# 2558

```python
A = int(input())
B = int(input())
print(A + B)
```

# 2588

```python
A = int(input())
B = int(input())

# a = (B - (B//10)*10) # B의 일의 자리 구하는 방법
# (B - (B//100)*100) # B의 십의 자리와 일의자리 같이 나옴
# (B - (B//100)*100) - a # B의 십의 자리 나옴
# (B//100)*100 # B의 백의 자리

a = (B - (B//10)*10)
print(A*((B - (B//10)*10)))
print(int((A*((B - (B//100)*100) - a))/10)) # 나누기 10 해줘야함. 그림처럼 일의자리가 십부터 시작
print(int((A*((B//100)*100))/100)) # 마찬가지로 일의자리가 백부터 시작이라 100 나눠줘야함.
#그리고 int로 바꿔줘야함ㅋㅋ 나눠서 float으로 나옴
print(A*B)
```

# 3046

```python
R1, S = input().split()
R1 = int(R1)
S = int(S)
R2 = 2*S - R1
print(R2)
```

