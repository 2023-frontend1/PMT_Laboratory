# markdown 랜더링 & react-markdown 실습

<br/>
<br/>

## 내용

- 외부에서 불러온 데이터에 markdown 형식의 데이터가 있다고 가정
- react-markdown 통해서 screen 에 출력

<br/>
<br/>

## 결과

_response_

<img width="684" alt="response" src="https://github.com/2023-frontend1/PMT_Laboratory/assets/50646145/4a7d8ce4-1663-4b1f-880d-b16a963fe027">

_rendered_

<img width="1470" alt="rendered" src="https://github.com/2023-frontend1/PMT_Laboratory/assets/50646145/fd65f900-3dde-4ba3-9ebb-87d90e495040">

<br/>
<br/>

## NOTE

- `remark-gfm` : (자동링크 리터럴, 각주, 취소선, 표, 작업 목록) 등을 지원하는 플러그인
- `rehype-raw` : markdown 내에 포함된 HTML 을 지원하는 플러그인
