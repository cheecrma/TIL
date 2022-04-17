### Bootstrap

- CDN : Content Delivery(Distribution) Network

  컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템.

  개별 end-user의 가까운 서버를 통해 빠르게 전달 가능.(지리적 이점) 외부 서버를 활용함으로써 본인 서버의 부하가 적어짐

브라우저 \<html>의 root 글꼴 크기는 16px

- .m-1 = 0.25rem = 4px

- .m-2 = 0.5rem

- .m-3 = 1rem = 16px

- .m-4 = 1.5rem

- .m-5 = 3rem

- .mx-auto : 수평 중앙 정렬

  spacing 종합

  - m : margin
  - p : padding
  - t : top
  - b : bottom
  - s : left
  - e : right
  - x : left, right
  - y : top, bottm
  - 0 : 0 rem
  - 1 : 0.25 rem
  - 2 : 0.5 rem
  - 3 : 1 rem
  - 4 : 1.5 rem
  - 5 : 3 rem

- color

  ```html
  <div class="bg-primary">이건 파랑</div>
  <div class="text-danger">이건 빨간색 글씨</div>
  ```

### Responsive Web Design

- 다양한 화면 크기를 가진 디바이스들이 등장함에 따라 responsive web design 개념이 등장

- 반응형 웹은 별도의 기술 이름이 아닌 웹 디자인에 대한 접근 방식, 반응형 레이아웃 작성에 도움이 되는 사례들의 모음 등을 기술하는데 사용되는 용어

  ex) Media Queries, Flexbox, Bootstrap Grid System, The viewport meta tag

### Grid system (web design)

- 요소들의 디자인과 배치에 도움을 주는 시스템
- 기본 요소
  - Column : 실제 컨텐츠를 포함하는 부분
  - Gutter : 칼럼과 칼럼 사이의 공간 (사이 간격)
  - Container : Column들을 담고 있는 공간

### Bootstrap grid System

- Bootstrap Grid system은 flexbox로 제작됨
- container, rows, column으로 컨텐츠를 배치하고 정렬
- 반드시 기억해야 할 2가지 !
  1. 12개의 column
  2. 6개의 grid breakpoints
