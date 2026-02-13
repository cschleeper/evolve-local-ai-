import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { slugify } from "@/lib/utils";

const blogDir = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  tags: string[];
  image: string;
};

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

async function readMdxFiles() {
  const files = await fs.readdir(blogDir);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getAllPosts() {
  const files = await readMdxFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDir, file);
      const source = await fs.readFile(fullPath, "utf8");
      const { data, content } = matter(source);
      const time = readingTime(content).text;
      return {
        slug,
        readingTime: time,
        ...(data as BlogFrontmatter),
      } satisfies BlogPostSummary;
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.mdx`);
  const source = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(source);

  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      return { text, id: slugify(text) };
    });

  const compiled = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content: compiled.content,
    headings,
    readingTime: readingTime(content).text,
  };
}
