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
  
- 쿠키(Cookie)
  - 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각
  
  - 사용자가 웹사이트를 방문할 경우 해당 웹사이트의 서버를 통해 사용자의 컴퓨터에 설치(placed-on)되는 작은 기록 정보 파일
    - 브라우저(클라이언트)는 쿠키를 로컬에 KEY-VALUE의 데이터 형식으로 저장
    - 이렇게 쿠키를 저장해 놓았다가, 동일한 서버에 재 요청 시 저장된 쿠키를 함께 전송
    
  - [참고] 소프트웨어가 아니기 때문에 프로그램처럼 실행 될 수 없으며 악성코드를 설치 할 수 없지만, 사용자의 행동을 추적하거나 쿠키를 훔쳐서 해당 사용자의 계정 접근 권한을 획들 할 수도 있음
  
  - HTTP 쿠키는 상태가 있는 세션을 만들어 줌
  
  - 쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용
  
    - 이를 이용해 사용자의 로그인 상태를 유지할 수 있음
    - 상태가 없는(stateless) HTTP 프로토콜에서 상태 정보를 기억 시켜주기 때문
  
    > 웹 페이지에 접속하면 요청한 웹 페이지를 받으며 쿠키를 저장하고, 클라이언트가 같으 넛버에 재 요청 시 요청과 함께 쿠키도 함께 전송

- 쿠키의 사용 목적
  1. 세션 관리 (Session management)
     - 로그인, 아이디 자동 완성, 공지 하루 안보기, 팝업 체크, 장바구니 등의 정보 관리
  2. 개인화 (Personalization)
     - 사용자 선호, 테마 등의 설정
  3. 트래킹 (Tracking)
     - 사용자 행동을 기록 및 분석
  
- 세션(Session)

  - 사이트와 특정 브라우저 사이의 "상태(state)"를 유지시키는 것
  - 클라이언트가 서버에 접속하면 서버가 특정 session id를 발급하고, 클라이언트는 발급 받은 session id를 쿠키에 저장
    - 클라이언트가 다시 서버에 접속하면 요청과 함께 쿠키(session id가 저장된)를 서버에 전달
    - 쿠키는 요청 때마다 서버에 함께 전송되므로 서버에서 session id를 확인해 알맞은 로직을 처리
  - ID는 세션을 구별하기 위해 필요하며, 쿠키에는 ID만 저장함

- 쿠키 lifetime (수명)

  - 쿠키의 수명은 두 가지 방법으로 정의할 수 있음
    1. Session cookies
       - 현재 세션이 종료되면 삭제됨
       - 브라우저가 "현재 세션(current session)"이 종료되는 시기를 정의
         - [참고] 일부 브라우저는 다시 시작할 때 세션 복원(session restoring)을 사용해 세션 쿠키가 오래 지속 될 수 있도록 함
    2. Persistent cookies (or Permanent cookies)
       - Expires 속성에 지정된 날짜 혹은 Max-Age 속성에 지정된 기간이 지나면 삭제

- Session in Django

  - Django의 세션은 미들웨어를 통해 구현됨
  - Django는 database-backed sessions 저장 방식을 기본 값으로 사용
  - Django는 특정 session id를 포함하는 쿠키를 사용해서 각각의 브라우저와 사이트가 연결된 세션을 알아냄
  - 모든 것을 세션으로 사용하려고 하면 사용자가 많을 때 서버에 부하가 걸릴 수 있음

- [참고] MIDDLEWARE (미들웨어)

  - HTTP 요청과 응답 처리 증간에서 작동하는 시스템(hooks)
  - Django는 HTTP 요청이 들어오면 미들웨어를 거쳐 해당 URL에 등록되어 있는 view로 연결해주고, HTTP 응답 역시 미들웨어를 거쳐서 내보냄
  - 주로 데이터 관리, 애플리케이션 서비스, 메시징, 인증 및 API 관리를 담당
