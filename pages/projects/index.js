import Container from "../../components/container";
import Nav from "../../components/nav";
import Polaroid from "../../components/polaroid";
import Layout from "../../components/layout";
import { getAllContent } from "../../lib/api";
import Head from "next/head";

export default function Index({ allProjects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Alice Zhao</title>
        </Head>
        <Container>
          <Nav />

          <div className="grid grid-cols-3">
            {allProjects.map((project) => (
              <Polaroid
                key={project.slug}
                image={project.coverImage}
                route={`/projects/${project.slug}`}
              >
                <p className="font-bold">{project.title}</p>
                <p className="text-xs">{project.excerpt}</p>
              </Polaroid>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllContent("projects", [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
}
