import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const getContentDirectory = (type) => join(process.cwd(), `data/${type}`);

export function getSlugs(dir) {
  return fs.readdirSync(dir);
}

export function getContentBySlug(type, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(getContentDirectory(type), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllContent(type, fields = []) {
  const slugs = getSlugs(getContentDirectory(type));
  const content = slugs
    .map((slug) => getContentBySlug(type, slug, fields))
    // sort posts by date in descending order
    .sort((content1, content2) => (content1.date > content2.date ? "-1" : "1"));
  return content;
}
