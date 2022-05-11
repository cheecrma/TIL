const member = {
  name: 'cheecrma',
  age: '24',
  sId: 201612383,
}

const member2 = {
  name: 'henry',
  age: '25',
  sId: 200012383,
}

function Member(name, age, sId){
  this.name = name
  this.age = age
  this.sId = sId
}

// 생성자 함수는 함수의 이름을 반드시 대문자로 시작해야함
// 생성자 함수를 사용할 때는 앞에 new 라는 키워드를 사용함