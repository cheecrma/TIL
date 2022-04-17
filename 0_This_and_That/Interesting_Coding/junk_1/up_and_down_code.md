```python
import random

# 1부터 100사이 랜덤 숫자 지정
rand = random.randrange(1, 101)
num = 0
cnt = 0

# rand 와 num이 같지 않으면 계속 실행됨.
while rand != num:
    num = int(input("1 ~ 100 사이 정수를 입력하시오 : "))
    if num > rand :
        print("Down")
    elif num < rand :
        print("Up")
    cnt += 1
print(cnt, "번 만에 맞췄습니다.")
```
