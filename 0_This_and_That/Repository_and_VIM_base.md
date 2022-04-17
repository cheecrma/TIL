# 레포지토리

__저장소__ : 커밋이 저장되는 곳

- git init 하기 전에는 레포지토리가 아니라 그냥 폴더임!



git init 으로 로컬 레포지토리 생성

- 그러면 .git 이라는 폴더가 생성됨. 이건 git이 관리하는 '모든 정보' 



git status 로 현재 레포지토리에 git이 어떤 상태인가를 체크

README.md 는 '내'레포지토리에 대한 설명서 같은 역할을 하는 파일



git add .

- Staging Area 로 올리는 역할.
- Git 에게 추적하는 파일임을 선언.

git commit 을 누르면 Please tell me who you are. 나옴

git config user.email " "

git config user.name " "

(git config 내용과 깃허브 이메일 다르면 잔디가 깔리지 않음.)

여기서 git commit 다시 치면 다른 화면 나옴. 

(이 화면은 VIM 프로그램으로 여기서는 여러줄로 커밋 메세지를 적을 수 있음.)



## VIM

VIM에서 " i "를 누르면 수정 됨.

긴 커밋 메세지는

맨 윗줄은 간단한 정리 타이핑

그리고 밑에 줄은 띄우고

그 다음 밑 부터는 정리 (가시성을 위해..)

여기서 "ESC" 누르면 수정모드 끝남

다음 Shift + ; 누르고 (" : ") wq 누르면 나와짐. w는 변경 내용 저장하고 q는 나간다는 뜻.

(git log 치면 이제 커밋 내용 나옴!)

----



ls 쳐서 README.md 있는지 확인

그다음 vi README.md하면 README.md가 gitbash에서 열림

여기서 vim으로 수정가능!! 마크다운 문법을 사용해야 함!

<그러면 git status 보면 modified 됐으니 다시 staging area 해주고 commit 해준다음 push 하면 됨.>

1. git add . 해주고

2. git commit -m "Update" 해주고

3. git push 해주면 됨.

----

__warning : LF will be replaced by CRLF in ~ 나오는 경우__

- 나오는 이유는 맥 또는 리눅스를 쓰는 개발자와 윈도우 쓰는 개발자가 Git으로 협업할 때 발생함.

- 윈도우에서는 줄 하나가 CR와 LF, 즉 CRLF로 이루어져 있기 때문.

- ` git config --global core.autocrlf true ` 해주면 해결.
