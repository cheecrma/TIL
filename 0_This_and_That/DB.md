## 데이터베이스(DB)

- 체계화된 데이터

- 몇 개의 자료 파일을 조직적으로 통합하여 자료항목의 중복을 없애고 

  자료를 구조화하여 기억시켜 놓은 자료의 집합체

### 데이터 베이스 장점:

- 데이터 중복 최소화
- 데이터 무결성
- 데이터 독립성
- 데이터 표준화
- 데이터 보안 유지

## 관계형 데이터베이스 (RDB)

키(key)와 값(value)들의 간단한 관계(relation)를 표(table) 형태로 정리한 데이터베이스

### 용어 정리:

스키마(schema) : 데이터베이스에서 자료의 구조, 표현방법, 관계등 전반적인 명세를 기술한 것.

테이블(table) : 열(컬럼/필드)과 행(레코드/값)의 모델을 사용해 조직된 데이터 요소들의 집합



## 관계형 데이터베이스 관리 시스템 (RDBMS)

- Relational Database Management System
- MySQL, SQLite, ORACLE

## SQLite

- 서버 형태가 아닌 파일 형식으로 응용 프로그램에 넣어서 사용하는 비교적 가벼운 데이터베이스

### Sqlite Data Type

- NULL
- INTEGER
  - 크기에 따라 0,1,2,3,4,6 또는 8바이트에 저장된 부호 있는 정수
- REAL
  - 8바이트 부동 소수점 숫자로 저장된 부동 소수점 값
- TEXT
- BLOB
  - 입력된 그대로 정확히 지정된 데이터 (별다른 타입 없이 그대로 저장)

### Sqlite Type Affinity

1. INTEGER
2. TEXT
3. BLOB
4. REAL
5. NUMERIC

----

SQL(Structured Query Language)

- 관계형 데이터베이스 관리시스템의 데이터 관리를 위해 설계된 특수 목적으로 프로그래밍 언어

분류:

- DDL(Data Definition Language) - 데이터 정의 언어
- DML(Data Manipulation Language) - 데이터 조작 언어
- DCL(Data Control Language) - 데이터 제어 언어

----













