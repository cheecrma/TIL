### Expo 공식문서 빌드하는 방법

[Building Standalone Apps - Expo Documentation](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/)

---



1. app.json 을 작성함.
   
   - "package": "com.yourcompany.yourappname" 부분을 작성해준다. (안하고 2번을 시작하니 2번에서 package name을 물어보고 그 때 작성하면 app.json 추가해준다. )

2. 커멘드 창에 `expo build:android` 를 작성한다.
   
   - expo 로그인을 하라는 문구가 나온다.

3. expo가 업데이트 안되어 있다면 설치하라고 나온다.
   
   - package.json과 yarn.lock이 바뀌었으므로 다시 `yarn install` 혹은 `npm install`을 진행해준다.

4. 마켓에 업데이트 할 건지 apk로 만들건지 고르라고 한다. (apk 선택)

5. Keystore를 expo에서 관리하게 할지 사용자가 직접 관리할지 묻는다.
   
   - 1번 선택 expo에서 관리

6. 기다리면 됨. (22년9월25일 오후 10시 기준 _ 빌드되는데 30분 정도 소요됨.)

---

### Build 소요시간 확인 방법

[Service Status — Standalone Builds — Expo](https://expo.dev/turtle-status)
