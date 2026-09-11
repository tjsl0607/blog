# dev-blog

Astro로 만든 미니멀한 개발 블로그예요. 모든 글은 `src/content/posts`에 마크다운 파일로 저장돼요.

## 시작하기

Node.js 22.12 이상이 필요해요.

```bash
npm install
npm run dev        # http://localhost:4321
```

검색은 빌드할 때 인덱스가 만들어지기 때문에 개발 서버에서는 동작하지 않아요. 확인하려면 아래처럼 실행하세요.

```bash
npm run build
npm run preview
```

## 가장 먼저 바꿀 것

1. `src/config.ts` — 이름, 소개 문구, 이메일, GitHub 주소
2. `astro.config.mjs` — `site`를 실제 도메인으로
3. `src/pages/about.astro` — 소개 페이지 내용
4. `public/favicon.svg` — 파비콘
5. `src/content/posts/` — 예시 글 삭제

## 글 쓰기

`src/content/posts/글-주소.md` 파일을 만들면 `/posts/글-주소/`로 발행돼요.

```md
---
title: 글 제목
description: 검색 결과와 RSS에 보일 한 줄 요약 (선택)
date: 2026-09-11
draft: true   # true면 개발 서버에서만 보이고 배포되지 않아요 (선택)
---

본문은 마크다운으로 작성해요. ## 과 ### 제목은 자동으로 목차에 들어가요.
```

폴더로 정리하고 싶다면 `posts/2026/글-주소.md`처럼 넣어도 되고, 이때 주소는 `/posts/2026/글-주소/`가 돼요.

## 댓글 켜기 (선택)

1. 공개 GitHub 저장소에서 Discussions를 켜고 [giscus 앱](https://github.com/apps/giscus)을 설치해요.
2. [giscus.app](https://giscus.app)에서 저장소를 입력하고 `repoId`, `categoryId`를 복사해요.
3. `src/config.ts`의 `GISCUS`에 값을 채우면 글 하단에 댓글이 나타나요. 다크 모드도 자동으로 따라가요.

## 배포

Vercel, Netlify, Cloudflare Pages 모두 저장소를 연결하기만 하면 Astro를 자동으로 인식해요. 빌드 명령은 `npm run build`, 출력 폴더는 `dist`예요.

## velog 글 옮기기

velog 글은 이미 마크다운이라 본문을 그대로 복사해서 위 frontmatter만 붙이면 돼요. 글이 많다면 GitHub에서 "velog backup"으로 검색하면 전체 글을 마크다운으로 내려받는 오픈소스 스크립트를 찾을 수 있어요. 이미지는 velog 서버 주소를 가리키고 있으니, 나중을 위해 `public/images/`로 내려받아 경로를 바꿔두는 걸 추천해요.

## 구조

```
src/
├─ config.ts              사이트 정보, 댓글 설정
├─ content.config.ts      글 frontmatter 스키마
├─ content/posts/         글 (마크다운)
├─ components/            헤더, 푸터, 목차, 댓글
├─ layouts/Base.astro     공통 레이아웃, 메타 태그, 다크 모드
├─ lib/posts.ts           글 정렬, 날짜 포맷, 읽기 시간
├─ pages/                 목록, 글, 소개, 검색, RSS, 404
└─ styles/global.css      색상 토큰, 타이포그래피, 본문 스타일
```
