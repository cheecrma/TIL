### 예외 처리

try 문(statement) / except 절(clause)을 이용하여 예외 처리를 할 수 있음

- try 문
  - 오류가 발생할 가능성이 있는 코드를 실행
  - 예외가 발생되지 않으면, except 없이 실행 종료

- except 문
  - 예외가 발생하면, except 절이 실행
  - 예외 상황을 처리하는 코드를 받아서 적절한 조치를 취함



### 작성 방법

```python
try:
    try 명령문
except 예외그룹-1 as 변수-1 :
    예외처리 명령문 1
except 예외그룹-2 as 변수-2 :
    예외처리 명령문 2
finally :    #선택사항
    finally명령문
    
# 주의사항 : try문은 반드시 한 개 이상의 except문이 필요함.
```

