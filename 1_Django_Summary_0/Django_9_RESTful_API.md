### HTTP

- HyperText Transfer Protocol
- 웹 상에서 컨텐츠를 전송하기 위한 약속
- HTML 문서와 같은 리소스들을 가져올 수 있도록 하는 프로토콜(규칙, 약속)
- 웹에서 이루어지는 모든 데이터 교환의 기초
  - 요청(request)
    - 클라이언트에 의해 전송되는 메시지
  - 응답(response)
    - 서버에서 응답으로 전송되는 메시지
- 기본 특성
  - Stateless
  - Connectionless
- 쿠키와 세션을 통해 서버 상태를 요청과 연결하도록 함

### HTTP request methods

- 자원에 대한 행위(수행하고자 하는 동작)을 정의
- 주어진 리소스(자원)에 수행하길 원하는 행동을 나타냄
- HTTP Method 예시
  - GET, POST, PUT, DELETE

### HTTP response status codes

- 특정 HTTP 요청이 성공적으로 완료되었는지 여부를 나타냄
- 응답은 5개의 그룹으로 나뉘어짐
  1. Informational responses (1xx)
  2. Successful responses (2xx)
  3. Redirection messages (3xx)
  4. Client error responses (4xx)
  5. Server error responses (5xx)

### 웹에서의 리소스 식별

- HTTP 요청의 대상을 리소스(resource, 자원)라고 함
- 리소스는 문서, 사진 또는 기타 어떤 것이든 될 수 있음
- 각 리소스는 리소스 식별을 위해 HTTP 전체에서 사용되는 URI(Uniform Resource Identifier)로 식별됨
  - URI는 크게 URL 과 URN으로 나눌 수 있지만, URN을 사용하는 비중이 매우 적기때문에 일반적으로 URL은 URI와 같은 의미처럼 사용하기도 함
  - URL(Uniform Resource Locator)
    - 통합 자원 위치
    - 네트워크 상에 자원이 어디 있는지 알려주기 위한 약속
    - 과거에는 실제 자원의 위치를 나타냈지만 현재는 추상화된 의미론적인 구성
    - '웹 주소', '링크'라고도 불림

### URI의 구조

- Scheme (protocol) : ex. http(s)
- Host (Domain name) : 요청을 받는 웹 서버의 이름
- Port : 웹 서버 상의 리소스에 접근하는데 사용되는 기술적인 '문(gate)'
- Path : 웹 서버 상의 리소스 경로
- Query (Identifier) : 웹 서버에 제공되는 추가적인 매개 변수
- Fragment : 브라우저에게 해당 문서(HTML)의 특정 부분을 보여주기 위한 방법

----

### API

- Application Programming Interface
- 프로그래밍 언어가 제공하는 기능을 수행할 수 있게 만든 인터페이스
- Web API
  - 현재 웹 개발은 모든 것을 직접 개발하기보다 여러 Open API를 활용하는 추세
- 응답 데이터 타입
  - HTML, XML, JSON 등

### REST

- REpresentational State Transfer
- API Server를 개발하기 위한 일종의 소프트웨어 설계 방법론
  - 2000년 로이 필딩의 박사학위 논문에서 처음으로 소개 된 후 네트워킹 문화에 널리 퍼짐
- 네트워크 구조(Network Architecture)원리의 모음
- REST 원리를 따르는 시스템을 RESTful 이란 용어로 지칭함
- REST의 자원과 주소의 지정 방법
  1. 자원
     - URI
  2. 행위
     - HTTP Method
  3. 표현
     - 자원과 행위를 통해 궁극적으로 표현되는 (추상화된) 결과물
     - JSON으로 표현된 데이터를 제공
- REST의 핵심 규칙
  1. '정보'는 URI로 표현
  2. 자원에 대한 '행위'는 HTTP Method로 표현(GET, POST, PUT, DELETE)

### JSON

- JavaScript Object Notation
- JavaScript의 표기법을 따른 단순 문자열
- 특징
  - 사람이 읽거나 쓰기 쉽고 기계가 파싱(해석,분석)하고 만들어내기 쉬움
  - 파이썬의 dictionary, 자바스크립트의 object처럼 C 계열의 언어가 갖고 있는 자료구조로 쉽게 변화할 수 있는 key-value 형태의 구조를 갖고 있음

### RESTful API

- REST 원리를 따라 설계한 API
- RESTful services, 혹은 simply REST services라고도 부름
- 프로그래밍을 통해 클라이언트의 요청에 JSON을 응답하는 서버를 구성

----

### Serialization

- "직렬화" (한글이 더 어려움; 그냥 Serialization으로 말하기)
- 데이터 구조나 객체 상태를 동일하거나 다른 컴퓨터 환경에 저장하고, 나중에 재구성할 수 있는 포맷으로 변환하는 과정
- Serializers in Django
  - Queryset 및 Model Instance와 같은 복잡한 데이터를 JSON, XML 등의 유형으로 쉽게 변환 할 수 있는 Python 데이터 타입으로 만들어 줌\

### Django REST Framework (DRF)

- Web API 구축을 위한 강력한 Toolkit을 제공하는 라이브러리
- DRF의 Serializer는 Django의 Form 및 ModelForm 클래스와 매우 유사하게 구성되고 작동함

> Web API는 웹 애플리케이션 개발에서 다른 서비스에 요청을 보내고 응답을 받기 위해 정의된 명세

### DRF with Single Model

- 단일 모델의 data를 직렬화(serialization)하여 JSON으로 변환하는 방법에 대한 학습
- 단일 모델을 두고 CRUD 로직을 수행 가능하도록 설계
- API 개발을 위한 핵심 기능을 제공하는 도구 활용
  - Postman
    - API를 구축하고 사용하기 위해 여러 도구를 제공하는 API 플랫폼
    - 설계, 테스트, 문서화 등의 도구를 제공함으로써 API를 더 빠르게 개발 및 생성 할 수 있도록 도움

### DRF with 1:N Relation

- 1:N 관계에서의 모델 data를 직렬화(serialization)하여 JSON으로 변환하는 방법에 대한 학습
- 2개 이상의 1:N 관계를 맺는 모델을 두고 CRUD 로직을 수행 가능하도록 설계
