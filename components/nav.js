import Link from "next/link";
import Head from "next/head";

function Nav() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="flex-col md:flex-row flex items-center md:justify-between mb-32 mt-8">
        <h4 className="text-center md:text-left text-3xl mt-5 md:pl-8 text-white font-serif">
          <Link href="/">
            <a>Alice Zhao</a>
          </Link>
        </h4>
        <div className="space-x-12 text-xl">
          <Link href="/projects">
            <a>Projects</a>
          </Link>

          <Link href="/posts">
            <a>Blog</a>
          </Link>
        </div>
      </section>
      <style jsx>{`
        h4 {
          font-family: "Homemade Apple", cursive;
        }
      `}</style>
    </>
  );
}

export default Nav;
