### The Django Authentication System

- 필수 구성은 settings.py에 이미 포함되어 있으며 INSTALLED_APPS 설정에 나열된 아래 두 항목으로 구성
  1. django.contrib.auth
  2. django.contrib.contenttypes

1. django.contrib.auth
   - 인증 프레임워크의 핵심과 기본 모델을 포함
2. django.contrib.contenttypes
   - 사용자가 생성한 모델과 권한을 연결할 수 있음

- Django 인증 시스템은 인증(Authentication)과 권한(Authorization) 부여를 함께 제공(처리)하며, 이러한 기능이 어느 정도 결합되어 일반적으로 인증 시스템이라고 함

1. Authentication (인증)
   - 신원 확인
   - 사용자가 자신이 누구인지 확인하는 것
2. Authorization (권한, 허가)
   - 권한 부여
   - 인증된 사용자가 수행할 수 있는 작업을 결정

- auth와 관련해 Django 내부적으로 accounts라는 이름으로 사용되고 있기 때문에 되도록 해당 앱 생성 할때 accounts로 지정하는 것을 권장

  `python manage.py startapp accounts`

----

### 쿠키와 세션

- HTTP
  - Hyper Text Transfer Protocol
    - HTML 문서와 같은 리소스(자원, 데이터)들을 가져올 수 있도록 해주는 프로토콜(규칙, 규약)
    - 웹에서 이루어지는 모든 데이터 교환의 기초
    - 클라이언트 - 서버 프로토콜이기도 함
  - 특징
    - 비연결지향 (connectionless)
      - 서버는 요청에 대한 응답을 보낸 후 연결을 끊음
    - 무상태 (stateless)
      - 연결을 끊는 순간 클라이언트와 서버 간의 통신이 끝나며 상태 정보가 유지되지 않음
      - 클라이언트와 서버가 주고 받는 메시지들은 서로 완전히 독립적임
    - 클라이언트와 서버의 지속적인 관계를 유지하기 위해 쿠키와 세션이 존재
