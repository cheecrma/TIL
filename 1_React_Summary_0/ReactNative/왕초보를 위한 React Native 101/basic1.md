앱을 만드는데 필요한 모든 소프트웨어를 다운로드 받아야 함.

Java와 안드로이드 SDK(Software Development Kit)가 있어야 함.

시뮬레이터도 다운 받아야 하며 안드로이드 스튜디오를 설정해야 함.

node.js 설치, npm 설치

---

![](C:\Users\cheecrma\AppData\Roaming\marktext\images\2022-09-13-22-22-42-image.png)

expo를 이용해 React Native 안에 있는 JS와 Style 부분 코드 작성으로 다른 설치 없이 바로 모바일로 테스트해볼 수 있도록 해줌.

`npm install --global expo-cli`로 설치해주고 폰에 앱 설치 하면 됨.

---

react native에는 브라우저가 없음 bridge로 ios, Android로 가는 거

---

react native는 웹사이트가 아니므로 div를 사용하는 것이 아닌 view를 사용하고 view가 컨테이너 임.

또한 span, p, h1, h2 등 없고 Text를 사용함

`const styles = {}`로 스타일을 넣어도 되지만 `const styles = StyleSheet.create({})`를 이용하는 이유는 object로 자동 완성 기능을 제공해주기 때문.

---

StatusBar는 상단의 시간 와이파이 배터리 부분을 말함.

---

모든 view는 flex container로 사이즈는 flex 비율로 조정할 수 있음.

flex말고 %로 지정할 수도 있음. 대신 둘다 부모의 크기에 영향을 받음.
