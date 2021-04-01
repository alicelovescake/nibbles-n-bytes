import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, src, slug }) {
  const image = (
    <div
      style={{
        backgroundImage: `url(${src})`,
        height: "48rem",
      }}
      className="w-full bg-cover bg-no-repeat bg-center"
    ></div>
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
