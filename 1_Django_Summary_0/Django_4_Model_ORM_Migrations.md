### Django Model

- Model
  - 단일한 데이터에 대한 정보를 가짐
    - 사용자가 저장하는 데이터들의 필수적인 필드들과 동작들을 포함
  - 저장된 데이터베이스의 구조(layout)
  - Django는 model을 통해 데이터에 접속하고 관리
- Database
  - 데이터베이스(DB)
    - 체계화된 데이터의 모임
  - 쿼리(Query)
    - 데이터를 조회하기 위한 명령어
    - 조건에 맞는 데이터를 추출하거나 조작하는 명령어
    - "Query를 날린다." -> DB를 조작한다.
  - 기본 구조
    - 스키마(Schema)
      - 데이터베이스에서 자료의 구조, 표현방법, 관계 등을 정의한 구조 (structure)
    - 테이블(Table)
      - 열(column) : 필드(field) or 속성
      - 행(row) : 레코드(record) or 튜플
        - PK(기본키) : 각 행의 고유값으로 Primary Key로 불린다. 반드시 설정하여야하며, 데이터베이스 관리 및 관계 설정시 주요하게 활용된다.

----

### ORM

- Object-Relational-Mapping
- 객체 지향 프로그래밍 언어를 사용하여 호환되지 않는 유형의 시스템 간에(Django -SQL)데이터를 변환하는 프로그래밍 기술
- Django는 내장 Django ORM을 사용함
- 현대 웹 프레임워크의 요점은 웹 개발의 속도를 높이는 것.(생산성)
- 우리는 DB를 객체(object)로 조작하기 위해 ORM을 사용한다.

### Migrations

1. makemigrations
   - model을 변경한 것에 기반한 새로운 마이그레이션(like 설계도)을 만들 때 사용
   - `python manage.py makemigrations`
2. migrate
   - 마이그레이션을 DB에 반영하기 위해 사용
   - 설계도를 실제 DB에 반영하는 과정
   - 모델에서의 변경 사항들과 DB의 스키마가 동기화를 이룸
   - `python manage.py migrate`

### 반드시 기억해야 할 migration 3단계

1. models.py
   - model 변경사항 발생 시
2. `python manage.py makemigrations`
   - migrations 파일 생성
3. `python manage.py migrate`
   - DB 반영 (모델과 DB의 동기화)
