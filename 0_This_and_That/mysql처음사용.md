우선 mysql을 설치해줬음.

설정들 다 해주고 path 연결 통해 콘솔창에 바로 mysql 확인 가능하도록 설정 해줬음.

mysql -u root -p 입력을 하면 비번 입력하라고함.

그리고 mysql 켜짐

`CREEATE DATABASE study_db default CHARACTER SET UTF8;` 명령어로 DB 만들어 줬음.

`SHOW DATABASES;` 하면 DB확인 가능

`CREATE TABLE study_db.user( ... );` 이렇게 테이블 생성했음.

테이블 생성하는 부분에서 계속 study_db를 빼고 작성해서 ERROR : Nodatabase selected가 떴음.

이후 `desc study_db.user;`를 통해 생성된 걸 확인할 수 있었음.