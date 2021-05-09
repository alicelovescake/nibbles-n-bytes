import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Nav from "../../components/nav";
import Layout from "../../components/layout";
import { getAllContent } from "../../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const heroPost = allPosts[allPosts.length - 1];
  const morePosts = allPosts.slice(0, allPosts.length - 1);
  return (
    <>
      <Layout>
        <Head>
          <title>Alice Zhao</title>
        </Head>
        <Container>
          <Nav />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
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

  return {
    props: { allPosts },
  };
}
