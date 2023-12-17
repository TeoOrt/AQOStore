import { posts } from "./data";
export function load() {
  Promise.all([testing_ts()]);

  // console.log("loading...");
  return {
    posts: posts.map((post) => ({
      content: post.content,
      slug: post.slug,
    })),
  };
}

const testing_ts = async () => {
  try {
    const res = await fetch("http://localhost:8000/posts");
    const unwrap = await res.json();
    console.log(unwrap);
    // posts.push(unwrap);
  } catch (e) {
    console.log(e);
  }
};

export const prerender = true;
export const ssr = true;
// export const csr = false;
