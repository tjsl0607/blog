import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 배포할 도메인으로 바꿔주세요 (RSS, sitemap, OG 태그에 사용돼요)
  site: 'https://yourname.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
