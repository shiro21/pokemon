# 개인 프로젝트 - 포몬 도감

## Intro
- Solo Project
- 프젝트 기간 ( 2023. 12. 12 ~ 2023. 12. 14)

## Tool
- Front-End : React ( JSX )
- 참고 페이지 : https://pokemonkorea.co.kr/pokedex

### 검색조건
* 포켓몬 이름검색( 상단 돋보기 클릭 )
- 조건: 이름, 도감번호, 타입선택
* 조건 약점 ( 검색 클릭 )
- 도감번호, 타입

### View

### 원본과 다른 내용
원본 JSON과 다른 포켓몬 데이터로 만들었기에 상세검색 내용이 다릅니다.



## ----------
Elements
id: 포켓몬 아이디
num: 포켓몬 공식 번호
name: 포켓몬 이름
img: 포켓몬 이미지 URL
type: 포켓몬 타입
height: 포켓몬 키
weight: 포켓몬 몸무게
candy: 진화에 필요한 캔디 겟수
egg: 알을 까기위해 이동해야 하는 킬로미터
multipliers: 진화이후 전투력(CP) 계산에 사용되어짐 (NEW) 아래를 참조
weakness: 현제 포켓몬이 약한 타입 (NEW)
next_evolution: 이전 진화 포켓몬 번호와 이름 (NEW)
prev_evolution: 다음 진화 포켓몬 번호와 이름 (NEW)
Multipliers
공식 EvolvedCP = OriginalCP x multiplier.

multipliers 사용 예시: 전투력이 200인 이상해씨를 진화 시키려고 한다. 이상해풀에 예상 전투력은 365 = 200 x 1.58 CP.

만약에 두개 이상의 multipliers 값이 있다면 포켓몬이 진화했을 때 나올 수 있는 최대 최저 값을 의미한다.

## ----------


### npm
npm install react-router-dom
npm install sass-loader -D
npm install @craco/craco
* package.json -> scripts -> start ~ test 내용 변경 ex:) react-scripts start ==> craco start

npm install --save-dev @babel/plugin-proposal-private-property-in-object
* craco 경고 문제를 해결하기 위한 내용
:: https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert

