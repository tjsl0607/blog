export const SITE = {
  name: "YeSeon Mun",
  title: "Yeseon.dev",
  description: "본질을 묻고 구조를 설계해가는 기록",
  intro: {
    heading: "숙명여대 25학번 소프트웨어학부 문예선",
    body: "운동, 연구, 코딩, 토플. 배운 것과 삽질한 것들을 기록합니다.",
  },
  author: "YeSeon Mun",
  email: "munyeseon@sookmyung.ac.kr",
  links: {
    github: "https://github.com/tjsl0607",
  },
  // 한국어 기준 분당 읽는 글자 수 (공백 제외)
  charsPerMinute: 500,
};

// Giscus 댓글 설정 — https://giscus.app 에서 값을 발급받아 채우면 댓글이 켜져요.
// repo가 비어 있으면 댓글 영역은 렌더링되지 않아요.
export const GISCUS = {
  repo: "", // 예: 'yourname/blog-comments'
  repoId: "",
  category: "Comments",
  categoryId: "",
};
