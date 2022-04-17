## 제어문

- 조건문

- 반복문

  위에서 아래로 그리고 우측 결과를 좌측에 할당

제어문은 순서도(flow chart)로 표현이 가능

__조건문__

조건문은 참/거짓을 판단할 수 있는 조건식과 함께 사용

기본 형식

if < > :

​	#Run this Code block

else :

​	#Run this Code block

​	4칸 들여쓰기! Tab한번 누르면 됨.

----

num = input('숫자를 입력해주세요 : ')

print(num)



if num % 2 == 1 :

​	print('홀수입니다.')

else :

​	print('짝수입니다.')



이러면 오류가 남. 왜냐고? input에 나오는 건 __문자형__임!!!

즉 5가 숫자가 아니라 문자형임

해결을 위해

num =int(input('숫자를 입력해주세요:')) 이렇게 감싸줘야함!!

if num % 2: 이렇게 해도 됨. 0은 False 이고 1은 True 니까!

----

__복수 조건문__
if <> :

​	#Code block

elif <> :

​	#Code block

else :

​	#Code block

여기서 else는 마지막 나머지 모두를 하므로 조건이 들어가지 않음!!



dust = 100

if dust > 150 :

​	print("매우 나쁨")

elif dust > 80 :

​	print("나쁨")

elif dust > 30 :

​	print("보통")

else :

​	print("좋음")

두번 째 elif dust > 80 and dust <= 150 이렇게 할 필요가 없음.

왜냐하면 이미 위에 if에서 dust > 150 끝났으므로 밑에는 걸러진겨!!

__SyntaxError__는 문법오류라는 거!



__중첩 조건문__

조건 표현식

value == num if num >= 0 else -num

절댓값을 저장하기 위한 코드임



__반복문__

- while 문
- for 문
- 반복 제어



__While 문__은 조건식이 참인 경우 반복적으로 코드를 실행

종료조건이 반드시 필요



__pythontutor__라는 사이트

사용하면 흐름을 볼 수 있음!



__For 문__

시퀀스를 포함한 순회가능한 객체요소를 모두 순회함



딕셔너리 순회

key를 순회함.

튜플들의 리스트, 유사리스트



enumerate 순회

인덱스를 같이 돌리고 싶은 순간에!



__반복문 제어__

- Break
- Continue
- Pass



pass 가 없으면 에러가 남.

새로운 로직 작성하기 전에 임시 작성 잡아놓기 위해 사용함!

----

if 문 :

​	if

​	elif

​	else

조건 표현식으로 가능.



__For vs While__

for 문은 반복 가능한 애들을 하나씩 꺼내준다.

while 문은 조건이 참일 때 실행, 종료 조건(거짓) 필요

결과 변수 초기화
