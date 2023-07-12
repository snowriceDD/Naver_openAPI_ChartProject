- 김윤수

- 빌드 방법
1. TECHLABS_fe_2023 클론

 `git clone https://github.com/snowriceDD/TECHLABS_fe_2023.git`

2. 의존성 설치

`yarn` or `yarn install`

3. 환경 변수 세팅
    1. `client` , `server` 폴더 각각 `.env` 파일 만들기
    2. 아래와 같은 양식으로 환경변수 입력
    
    ```markdown
    VITE_APP_N_CLIENT_ID = 'key~~'
    VITE_APP_N_CLIENT_SECRET = 'key~~'
    VITE_APP_N_URL = 'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age'
    ```
    

4. server 실행

`npx ts-node server.ts`

5. client 실행

`yarn start`
---

- 프로젝트 설명


- CORS 이슈 대응
1. PROXY server를 세팅하여 쇼핑인사이트 API 요청을 우회 처리했습니다.

- 선택 구현 사항
1. Antd를 사용해 Input Form을 구성했습니다.
2. Redux-Persist를 활용하여 웹사이트를 새로고침하더라도, 마지막으로 조회했던 파라미터가 남도록 했습니다.
3. Data Fetch를 Custom Hook으로 변경하여 사용했습니다.