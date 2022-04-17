# 간단한 Unix / Linux 명령어

- cd \<path> : 현재 위치 이동하기
- cd .. : 상위 폴더로 이동
- mkdir \<name> : 폴더 생성하기
- touch \<name> : 파일 생성하기
- rm \<name> : 파일 지우기
- rm -r \<name> : 폴더 지우기  (rm -rf \<name> 은 보호 될수 있는 걸 강력하게 지우기)



윈도우 powershell에서는 touch 지원 안함.

gitbash 사용.

### gitbash

gitbash에서 물결표(~)는 home = user의 home 의미

(즉 홈으로 갈려면 cd ~)

내pc > 로컬디스크C > 사용자 > 내 파일 들어간 곳이 home 임

touch 생성했으면 잘 생성 됐는지 ls 눌러도 보기.

# Visual Studio Code

(원하는 위치에서)우클릭하고 코드로 열기

vsc열었는데 작업할 공간이 어딘지 선택해 주는 거임.

그냥 프로그램 열면 좌측에 파일들 구성 차이를 알 수 있음.

gitbash에서 해당 위치로 이동하고 (cd \<name> , name길면 쓰다가 Tab 눌러 찾아도 좋음.)

code . 하면 VSC 열림.



VSC에서 __터미널__ 열고 powershell말고 +버튼 눌러서 __gitbash__를 열어주기!!
