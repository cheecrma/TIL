```python
# 큐브 모양
lst = [[1,2,3],[4,5,6],[7,8,9]] 
for i in lst:
    print(i)
    
print('\n-----\n')

# lst를 왼쪽아래가 우측위로 뒤집힌 코드 (transpose / 전치)
lst2 = zip(*lst) 
for i in lst2:
    print(i)
    
print('\n-----\n')

# lst를 좌측으로 90도 회전된 코드 (90도 회전 시계 반대 방향)
lst3 = list(zip(*lst))[::-1] 
for i in lst3:
    print(i)
    
print('\n-----\n')

# lst를 우측으로 90도 회전된 코드 (90도 회전 시계 방향)
lst4 = zip(*lst[::-1]) 
for i in lst4:
    print(i)
```
