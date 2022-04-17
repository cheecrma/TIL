```python
import random

computer = random.randint(0,1)
choice = int(input("홀짝?(숫자를 입력하세요.) 0:홀, 1:짝 "))

# 현재는 맞추더라도 연속으로 3번까지 진행하면 끝나게 되는 if 속에 if 속에 if문이지만
# 반복문을 통해 끝날때까지 계속 할 수 있도록 변경하기!! 
# 또는 반복문에서 카운트를 세서 몇번까지 하면 끝나도록 설정도 할 수 있으니 그렇게 코드 수정하기!
if computer == choice:
    print("한번더!!")
    computer = random.randint(0,1)
    choice = int(input("홀짝?(숫자를 입력하세요.) 0:홀, 1:짝"))
    if computer == choice:
        print("한번더!!")
        computer = random.randint(0,1)
        choice = int(input("홀짝?(숫자를 입력하세요.) 0:홀, 1:짝"))
        if computer == choice:
            print("당신은 행운아!!")            
        else:
            print("끝났습니다.")
    else:
        print("끝났습니다.")
else:
    print("끝났습니다.")
```
