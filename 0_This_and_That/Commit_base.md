# VSC

__Repository__ : 특정 디렉토리를 버전 관리하는 저장소

__git init__ 명령어로 로컬 저장소를 생성해요!

.git 은 디렉토리에 버전 관리에 필요한 모든 것이 들어있어요!

- .git은 숨겨져 있음. 해당 위치의 파일에서 보기 누르고 숨긴항목 체크해야 나옴.
- 함부로 건드리면 안됨! 평소 숨긴항목 체크지워서 없앤상태 유지!(.git은 git이 관리 해줌)



# 커밋(Commit)

__특정버전__으로 남긴다 = __"커밋(Commit)"__한다.

커밋은 3가지 영역을 바탕으로 동작!

- Working Directory
- Staging Area
- Repository

이렇게 3가지

- Working Directory : 내가 작업하고 있는 실제 디렉토리

- Staging Area : 커밋으로 남기고 싶은, 특정 버전으로 관리하고 싶은 파일이 있는 곳

- Repository : 커밋들이 저장되는 곳



__git status__ 하면 Working Directory 로 찾질 못함.

__git add .__ 를 해주며 혹은 git add \<name> 를 해주며

변경사항이 있는 걸 알려줌.

git status 하면 변경사항 있다고 뜸. 커밋 되는 상태라 뜸.

여기서 __git commit -m "\<name>"__ 하면 버전이 남게 됨.

여기서 -m은 메세지 부분.



__git log__ 치면 커밋이 갖고있는 정보. (노란색 부분 고유번호임 엄청긴 거 앞 4개정도 치고 Tab해서 이용!)

__git commit -m "commit_message"__ 커밋 메세지는 __구체적으로!!__

ex) 로그인 작업을 했음 등..



__git config user.name "cheecrma"__

__git config user.email "cheecrma@gmail.com"__



__repo 안에 repo 하지마셈!! (git init 에서 또 git init 하지마셈!!)__



git diff 는 비교 위해 앞에 커밋을 기준으로 뒤에 커밋을 비교해줌.

----

### clone, push, pull

clone은 최초에 한번만 가져올 때 씀

다음은 push, pull 만 반복.



local에서 remote로 보내는 걸 push

remote에서 local로 보내는 걸 pull



__GitHub에서 수정 거의 안함.__



git remote add origin {remote_repo}

git push -u origin master



git clone{remote_repo}

git push origin master

----

# TIL

Today I Learned

꾸준히 마크다운으로 정리해서 문서화 하기!
