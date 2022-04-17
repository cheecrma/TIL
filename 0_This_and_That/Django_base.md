### Model

- Django는 model을 통해 데이터에 접속하고 관리

### Database

- 데이터베이스(DB)
  - 체계화된 데이터의 모임
- 쿼리(Query)
  - 데이터를 조회하기 위한 명령어

### Database의 기본 구조

- 스키마
  - 데이터베이스에서 자료의 구조, 표현방법, 관계 등을 정의한 구조
- 테이블
  - 열: 필드
  - 행: 레코드

----

### ORM

- Object-Relational-Mapping
- 객체 지향 프로그래밍 언어를 사용하여 호환되지 않는 유형의 시스템 간에(Django - SQL) 데이터를 변환하는 프로그래밍 기술



### Migrations Commands

`makemigrations` 

- model을 변경한 것에 기반한 새로운 마이그레이션(like 설계도)을 만들 때 사용

`migrate`

- 마이그레이션을 DB에 반영하기 위해 사용
- 설계도를 실제 DB에 반영하는 과정

----

마이그레이션스

`python manage.py makemigrations`

마이그레이트

`python manage.py migrate`

----

반드시 기억해야할 마이그레이션 3단계

1. models.py
   - model 변경사항 발생 시
2. `python manage.py makemigrations`
   - migrations 파일 생성
3. `python manage.py migrate`
   - DB에 반영

----

DB API 구문 : Article.objects.all()

DB API

- Manager
  - Django 모델에 데이터베이스 query 작업이 제공되는 인터페이스
- QuerySet
  - 데이터베이스로부터 전달받은 객체 목록

----

### CRUD

----



모델폼이 쉽게 해주는 것

1. 모델 필드 속성에 맞는 html element를 만들어주고
2. 이를 통해 받은 데이터를 view 함수에서 유효성 검사를 할 수 있도록 함



정리하기

1. HTML Form
2. Form Class
3. Model Form
