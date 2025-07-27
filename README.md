# 신입사원 개발 역량 강화를 위한 자유 프로젝트
## 사용언어
<img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" /> <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" /> <img src="https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white" />
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />

# 🛠️ 내부 정보 접근성 개선 키오스크 시스템

## 개발 배경
기존 사내에서는 ERP 시스템(eCount)을 통해 연차, 휴가, 프로젝트 일정 등 주요 정보를 관리하고 있었으나,
정작 팀원들이 해당 정보를 확인하기 위해 매번 웹사이트에 접속해야 하는 번거로움이 있었습니다.
이에 따라, 사내에서 활용되지 않고 있던 키오스크 장비를 재활용하여,
주요 정보를 직관적으로 확인할 수 있는 전용 정보 제공 시스템을 개발하였습니다.

## 시스템 구조 및 주요 기능
1. 데이터 수집
- Selenium 기반 크롤러를 통해 ERP 시스템 내 연차, 휴가, 프로젝트 일정 등의 데이터를 자동 수집

- 주기적인 스케줄링으로 실시간에 가까운 데이터 동기화를 유지

2. 데이터 처리 및 API 제공 (Flask)
- 수집한 데이터를 **가공 및 구조화(JSON 포맷)**하여 효율적인 전달 구조 설계

- Flask 기반 RESTful API로 프론트엔드와 데이터 연동

3. 키오스크 UI/UX 구현 (Frontend - React)
- React를 기반으로, 키오스크 환경에 최적화된 인터페이스 설계

- 수집된 데이터를 시각화하여, 누구나 쉽게 이해할 수 있도록 정보 구성

- 연차 캘린더, 휴가 현황, 프로젝트 마감 일정 등을 한눈에 확인 가능한 대시보드 형태로 표현

## 개발 의의 및 효과
- 사내 유휴 장비(키오스크)를 재활용하여 비용 없이 정보 접근성 향상

- 팀원 간 커뮤니케이션 효율 증대 (특히 프로젝트 일정 공유 측면)

- ERP 시스템의 실시간 보조 뷰어 역할을 수행하여 업무 효율 증대

## 화면
- 메인페이지
![image](https://github.com/user-attachments/assets/d277ee4c-08ed-4f08-9beb-49934dd65267)
- 달력
![image](https://github.com/user-attachments/assets/e4ef5179-f832-4628-bdfc-1f48b6ecfb2c)

