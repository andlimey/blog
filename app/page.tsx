import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tighter">
        My Personal Blog
      </h1>
      <div>
        <p>
          I graduated from NUS with a Bachelor's degree in computer science. I'm
          currently working as a software engineer in Ascenda Loyalty.
        </p>
        <br />
        <p>
          I started his blog as a way to journal down my thoughts, and also to
          write about personal finance.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <BlogPosts />
      </div>
    </section>
  );
}
