import Container from "../components/container";
import Nav from "../components/nav";
import Layout from "../components/layout";
import Polaroid from "../components/polaroid";
import { getAllContent } from "../lib/api";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Index({ latestPost }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Alice Zhao</title>
          <meta property="og:image" content="/OG/cover.jpg" />
        </Head>
        <Container>
          <div className="relative h-screen">
            <Nav />

            <div className="lg:pt-36 lg:mx-32 lg:grid lg:grid-cols-3">
              <div className="text-4xl flex flex-col justify-between h-full col-span-2">
                <div className="space-y-5">
                  <p>Hi! I'm Alice. 👋 </p>
                  <p>I'm a learner who codes.</p>
                  <p>A reader who writes.</p>
                  <p>An explorer who never stops wandering.</p>
                </div>
                <IoIosArrowRoundDown className="text-6xl text-brand-yellow animate-bounce mt-10 mb-32" />
              </div>

              <Polaroid
                image="/assets/index/Everest2.jpg"
                rotate="rotate-6"
                scale="scale-125"
              />
            </div>
          </div>

          <section className="lg:mx-32 lg:my-52 space-y-10 mt-80 bg-white p-10 blurb">
            <p className="text-3xl leading-loose text-black">
              I've eaten{" "}
              <span className="custom-underline text-black">rotten shark</span>{" "}
              in Iceland, floated in the{" "}
              <span className="custom-underline text-black">Dead Sea</span>, and
              trekked to the top of{" "}
              <Link href="/posts/ain't-no-mountain-high-enough">
                <a className="custom-underline text-black">Everest</a>
              </Link>{" "}
              at the highest elevation on Earth (and almost passed out).
            </p>
            <p className="text-3xl leading-loose text-black">
              In July 2020, I traded in my sales hat to dive into the world of
              binary, a territory I've never chartered before. This website
              serves as a place for me to reflect, grow, and share
              <br />
              <span className="custom-underline text-black">
                nibbles n' bytes
              </span>{" "}
              of my journey.
            </p>
          </section>

          <section className="lg:mx-32 lg:my-52 lg:space-y-24 mt-36">
            <p className="text-center lg:text-left text-3xl mb-10">
              Check out my projects 👇
            </p>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Polaroid
                image="assets/projects/sheet-menu/cover.png"
                route="/projects/sheet-menu"
                rotate="hover:rotate-3"
              >
                <p className="font-bold">SheetMenu</p>
                <p className="text-xs">
                Helping restaurants deploy professional websites in under fifteen minutes
                </p>
              </Polaroid>

              <Polaroid
                image="assets/projects/behind-the-stand/podcaster-cover.png"
                route="/projects/behind-the-stand"
                rotate="hover:-rotate-3"
              >
                <p className="font-bold">Behind the Stand Podcast</p>
                <p className="text-xs">
                  Stories of grit & resilience from the humans behind great
                  ventures.
                </p>
              </Polaroid>
            </div>
            <p className="text-center lg:text-right text-3xl mt-10">
              <Link href="/projects">
                <a className="custom-underline font-extrabold">
                  Show me more...
                </a>
              </Link>
            </p>
          </section>

          <section className="lg:mx-32 lg:my-52 lg:space-y-24 my-36">
            <p className="relative z-10 text-3xl leading-loose mb-10">
              When I'm not coding, I'm writing. Writing fills my cup. It keeps
              me grounded and grateful. Check out my{" "}
              <Link href="/posts">
                <a className="custom-underline font-extrabold">latest posts</a>
              </Link>
            </p>

            <Polaroid
              image={latestPost.coverImage}
              rotate="hover:rotate-3"
              route={`/posts/${latestPost.slug}`}
            >
              <p className="font-bold">{latestPost.title}</p>
              <p className="text-xs">{latestPost.excerpt}</p>
            </Polaroid>
          </section>
        </Container>
      </Layout>
      <style jsx>{`
        header {
        }
        .hero-image {
          background-image: url("/assets/index/Everest.jpg");
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllContent("posts", [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  const latestPost = allPosts[0];

  return {
    props: { latestPost },
  };
}
