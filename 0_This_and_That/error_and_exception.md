# 에러와 예외

__문법 에러(Syntax Error)__

SyntaxError가 발생하면, 파이썬 프로그램은 실행이 되지 않음.

- Invalid syntax
- assign to literal
- EOL (End of Line)
- EOF (End of File)

__예외(Exception)__

실행 도중 예상치 못한 상황을 맞이하면, 프로그램 실행을 멈춤.

- ZeroDivisionError : 0으로 나누고자 할 때 발생
- NameError : namespace 상에 이름이 없는 경우
- TypeError : 타입 불일치, argument 누락, argument 개수 초과, argument type 불일치
- ValueError : 타입은 올바르나 값이 적절하지 않거나 없는 경우
- IndexError : 인덱스가 존재하지 않거나 범위를 벗어나는 경우
- KeyError : 해당 키가 존재하지 않는 경우
- ModuleNotFoundError : 존재하지 않는 모듈을 import 하는 경우
- ImportError : Module은 있으나 존재하지않는 클래스/함수를 가져오는 경우
- KeyboardInterrupt : 임의로 프로그램을 종료하였을 때
- IndentationError : Indentation이 적절하지 않는 경우
