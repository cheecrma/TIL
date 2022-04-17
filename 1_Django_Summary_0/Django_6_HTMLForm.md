### HTML Form

- HTML "form" element
  - 웹에서 사용자 정보를 입력하는 여러 방식(text, button, checkbox, file, hidden, image,...)을 제공하고, 사용자로부터 할당된 데이터를 서버로 전송하는 역할을 담당
  - 핵심 속성(attribute)
    - action: 입력 데이터가 전송될 URL 지정
    - method: 입력 데이터 전달 방식 지정
- HTML "input" element
  - 사용자로부터 데이터를 입력 받기 위해 사용
  - type 속성에 따라 동작 방식이 달라짐
  - 핵심 속성(attribute)
    - name
    - 중복 가능, 양식을 제출했을 때 name이라는 이름에 설정된 값을 넘겨서 값을 가져올 수 있음
    - GET 방식에서는 URL에서 `?key=value&key=value`형식으로 데이터를 전달함
- HTML "label" element
  - 사용자 인터페이스 항목에 대한 설명(caption)을 나타냄
  - label을 input 요소와 연결하기
    1. input에 id 속성 부여
    2. label에는 input의 id와 동일한 값의 for 속성이 필요
  - label과 input 요소 연결의 주요 이점
    - 시각적인 기능 뿐만 아니라 화면 리더기에서 label을 읽어 사용자가 입력해야 하는 텍스트가 무엇인지 더 쉽게 이해할 수 있도록 돕는 프로그래밍적 이점도 있음
    - label을 클릭해서 input에 초점(focus)를 맞추거나 활성화(activate) 시킬 수 있음
- HTML "for" attribute
  - for 속성의 값과 일치하는 id를 가진 문서의 첫 번째 요소를 제어
- HTML "id" attribute
  - 전체 문서에서 고유(must be unique)해야 하는 식별자를 정의
  - 사용 목적
    - linking, scripting, styling 시 요소를 식별

----

- HTTP
  - HyperText Transfer Protocol
  - 웹에서 이루어지는 모든 데이터 교환의 기초
  - 주어진 리소스가 수행 할 작업을 나타내는 request methods를 정의
  - HTTP request method 종류
    - GET, POST, PUT, DELETE,...
- HTTP request method - "GET"
  - 서버로부터 정보를 조회하는 데 사용
  - 데이터를 가져올 때만 사용해야 함
  - 데이터를 서버로 전송할 때 body가 아닌 Query String Parameters를 통해 전송
  - 우리는 서버에 요청을 하면 HTML 문서 파일 한 장을 받는데, 이때 사용하는 요청의 방식이 GET
