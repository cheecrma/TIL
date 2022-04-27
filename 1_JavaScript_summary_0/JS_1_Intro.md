### 브라우저 (browser)

- URL로 웹(WWW)을 탐색하며 서버와 통신하고, HTML 문서나 파일을 출력하는 GUI  기반의 소프트웨어

- 인터넷의 컨텐츠를 검색 및 열람하도록 함

- 주요 브라우저

  - Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Safari

- 브라우저에서 할 수 있는 일

  - DOM(Document Object Model) 조작
    - 문서(HTML) 조작
  - BOM(Browser Object Model) 조작
    - navigator, screen, location, frames, history, XHR
  - JavaScript Core (ECMAScript)
    - Data Structure(Object, Array), Conditional Expression, Iteration

  ----

  ### DOM 이란?

  - HTML, XML과 같은 문서를 다루기 위한 프로그래밍 인터페이스
  - 문서를 구조화하고, 구조화된 구성 요소를 하나의 객체로 취급하여 다루는 논리적 트리 모델
  - 문서가 객체(object)로 구조화되어 있으며 key로 접근 가능
  - 단순한 속성 접근, 메서드 활용뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작 가능
  - 주요 객체
    - window: DOM을 표현하는 창(브라우저 탭). 최상위 객체(작성 시 생략 가능)
    - document: 페이지 컨텐츠의 Entry Point 역할을 하며, `<head>, <body>`등과 같은 수많은 다른 요소들을 포함
    - navigator, location, history, screen

  ### BOM 이란?

  - 자바스크립트가 브라우저와 소통하기 위한 모델
  - 브라우저의 창이나 프레임을 추상화해서 프로그래밍적으로 제어할 수 있도록 제공하는 수단
    - 버튼, URL 입력창, 타이틀 바 등 브라우저 윈도우 및 웹 페이지 일부분을 제어 가능
  - Window 객체는 모든 브라우저로부터 지원받으며 브라우저의 창(window)를 지칭

  ### JavaScript Core

  - 브라우저(BOM & DOM)을 조작하기 위한 명령어 약속(언어)

  > 브라우저(BOM)과 그 내부의 문서(DOM)를 조작하기 위해 ECMAScript(JS)를 학습

