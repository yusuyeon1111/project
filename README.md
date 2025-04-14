# 신입사원 개발 역량 강화를 위한 자유 프로젝트

## 개발 배경
- 회사 내규 ERP를 사용하고 있으나, 팀원들의 연차나 휴가 소식 중요한 프로젝트 일정등을 사이트에 접속해 조회해야한다는 불만이 존재함.
- 따라서, 회사에 사용하고 있지 않은 키오스크를 활용하여 중요한 소식을 쉽게 확인 가능한 프로그램을 제작하고자 함.

## 시스템 흐름
1. 데이터 수집
Python 기반의 Selenium을 활용하여 사내 ERP에서 연차, 휴가, 프로젝트 일정 등의 데이터를 자동으로 크롤링.

2. 데이터 전달
수집된 데이터를 JSON 형식으로 가공하여 Flask를 통해 API 형태로 제공

3.UI/UX 구현
React를 기반으로, 수집된 정보를 시각적으로 가독성 높게 구성하여 키오스크 화면을 구현

## 화면
- 메인페이지
![image](https://github.com/user-attachments/assets/d277ee4c-08ed-4f08-9beb-49934dd65267)
- 달력
![image](https://github.com/user-attachments/assets/e4ef5179-f832-4628-bdfc-1f48b6ecfb2c)

