import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "mdxfiles");

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);
  // console.log(allPosts);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    // console.log(data, content);
    return {
      data,
      content,
      slug,
    };
  });
}
