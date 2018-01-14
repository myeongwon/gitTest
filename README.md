### git test

1. github Repositories 생성.
2. 작업 폴더로 경로 이동 후  git init
3. remote 설정.
git remote add origin (remote 주소)
https://github.com/aaa~/aaa~.git
** 3번은 이 단계에서 안해도 됨.
add 하고 commit 하고  그 다음 단계에서 해도됨.
4. 업로드 할 파일 add
5. commit, commit message 남기기
6. push (작업소에 파일 업로드하기)


#### 2. 브랜치 생성.
1. git branck [브랜치이름]   : 브랜치 생성
2. git checkout [브랜치이름] : 해당 브랜치로 이동.
1+2. git checkout -b [브랜치이름] : 브랜치 생성하고 이동.


#### 3. commit  취소.
1. git reset HEAD~1
HEAD는 현재 브랜치를 가리키는 포인터
단순하게 생각하면 HEAD는 마지막 커밋의 스냅샷이다


[https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Reset-%EB%AA%85%ED%99%95%ED%9E%88-%EC%95%8C%EA%B3%A0-%EA%B0%80%EA%B8%B0]


#### 4. merge
git merge [브랜치이름]


#### 5. fork  & PullRequest




#### 6. git config
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --local user.name "이름"
git config --local user.email "이메일"

git config user.name  : 현재 등록된 user 보여줌.
[git 최초설정](https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)

#### vim끄기 :q
