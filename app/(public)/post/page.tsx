import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
    cache: "default",
  });

  const posts: Post[] = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Lista de Posts
      </h1>

      <ul className="space-y-4">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <Link href={`/post/${post.id}`}>
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer font-medium text-lg">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}