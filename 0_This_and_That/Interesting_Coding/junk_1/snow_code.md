```python
import random
from time import sleep

# while문은 조건식이 참인 경우 반복적으로 코드를 실행함.
# 종료조건 없어서 계속해서 실행됨.
while True:
    snow = '*'
    for i in range(78):
        if random.randint(0, 1):
            snow += '*'
        else:
            snow += ' '
    print(snow)
    sleep(1)    
```

```python
# 만약 정신나간 폭설을 보고 싶다면 아래 코드를 실행.
import random

while True:
    snow = '*'
    for i in range(78):
        if random.randint(0, 1):
            snow += '*'
        else:
            snow += ' '
    print(snow)
# 시간 지정을 안해서 걍 미친듯이 실행됨.
```

