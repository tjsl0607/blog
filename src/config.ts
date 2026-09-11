export const SITE = {
  name: 'yourname',
  title: 'yourname.dev',
  description: '웹 성능과 개발자 경험에 관심이 많은 프론트엔드 개발자의 기록',
  intro: {
    heading: '안녕하세요, 프론트엔드 개발자입니다.',
    body: '웹 성능과 개발자 경험에 관심이 많습니다. 배운 것과 삽질한 것들을 기록합니다.',
  },
  author: 'yourname',
  email: 'hello@yourname.dev',
  links: {
    github: 'https://github.com/yourname',
  },
  // 한국어 기준 분당 읽는 글자 수 (공백 제외)
  charsPerMinute: 500,
};

// Giscus 댓글 설정 — https://giscus.app 에서 값을 발급받아 채우면 댓글이 켜져요.
// repo가 비어 있으면 댓글 영역은 렌더링되지 않아요.
export const GISCUS = {
  repo: '',        // 예: 'yourname/blog-comments'
  repoId: '',
  category: 'Comments',
  categoryId: '',
};
