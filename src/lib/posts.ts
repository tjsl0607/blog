import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../config';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function groupByYear(posts: Post[]) {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year)!.push(post);
  }
  return [...groups.entries()];
}

export function readingMinutes(body = ''): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\[\]()!-]/g, '')
    .replace(/\s+/g, '');
  return Math.max(1, Math.round(text.length / SITE.charsPerMinute));
}

const pad = (n: number) => String(n).padStart(2, '0');

export const formatShort = (d: Date) => `${pad(d.getMonth() + 1)}.${pad(d.getDate())}`;

export const formatLong = (d: Date) =>
  `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
