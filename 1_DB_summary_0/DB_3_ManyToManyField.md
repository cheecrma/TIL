### ManyToManyField

- 다대다 (M:N, many-to-many) 관계 설정 시 사용하는 모델 필드
- 하나의 필수 위치인자(M:N 관계로 설정할 모델 클래스)가 필요
- 모델 필드의 RelatedManager를 사용하여 관련 개체를 추가, 제거 또는 만들 수 있음
  - add(), remove(), ...

### ManyToManyField's Arguments

1. related_name
   - target model(관계 필드를 가지지 않은 모델)이 source model(관계 필드를 가진 모델)을 참조할 때(역참조 시)사용할 manager의 이름을 설정
   - ForeignKey의 related_name과 동일
2. through
   - 중개 테이블을 직접 작성하는 경우, through 옵션을 사용하여 중개 테이블을 나타내는 Django 모델을 지정할 수 있음
   - 일반적으로 중개 테이블에 추가 데이터를 사용하는 다대다 관계와 연결하려는 경우에 주로 사용됨
3. symmetrical
   - ManyToManyField가 동일한 모델(on self)을 가리키는 정의에서만 사용
   - symmetrical = True(기본값)일 경우 Django는 person_set 매니저를 추가하지 않음
   - source 모델의 인스턴스가 target 모델의 인스턴스를 참조하면, target 모델 인스턴스도 source 모델 인스턴스를 자동으로 참조하도록 함
     - 즉, 내가 당신의 친구라면 당신도 내 친구가 되는 것
     - 대칭을 원하지 않는 경우 False로 설정
     - Follow 기능 구현에서 다시 확인할 것
