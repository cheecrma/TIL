### Django 시작하기

1.  Django 설치 전 가상환경 생성 및 활성화

2. Django 설치

   `pip install django==3.2.12`

3. 프로젝트 생성

   `django-admin startproject <프로젝트명> .`

   프로젝트명  쓰고 뒤에 닷 찍어주기!

4. Django 서버 시작하기(활성화)

   `python manage.py runserver`

----

[참고] LTS

- Long Term Support (장기 지원 버전)
- 일반적인 경우보다 장기간에 걸쳐 지원하도록 고안된 소프트웨어의 버전

----

### Application 생성

- 일반적으로 Application명은 복수형으로 하는 것을 권장

  `python manage.py start app articles`

### 앱 등록

- 프로젝트에서 앱을 사용하기 위해서는 반드시 INSTALLED_APPS 리스트에 추가해야 함
- INSTALLED_APPS
  - Django installation에 활성화 된 모든 앱을 지정하는 문자열 목록
  - settings.py 에 위치함
- 앱 생성 시 주의 사항
  - "반드시 생성 후 등록 !"
  - INSTALLED_APPS에 먼저 작성(등록)하고 생성하려면 앱이 생성되지 않음
