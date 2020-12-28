import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Alice Zhao</title>
        </Head>
        <Container>
          <Intro />
          <div className="hero-image h-80 rounded-lg w-full md:w-1/2 lg:w-1/3 bg-cover bg-no-repeat bg-center absolute top-60 right-0 md:mr-20 mt-0"></div>
          <div className="relative z-10 text-3xl mx-20">
            I am a learner who codes. A writer who reads. A thinker who listens.
            An explorer who never stops wandering.
          </div>

          <div>
            <p className="text-3xl mx-32 my-6 mt-24">
              {" "}
              I've eaten <span className="custom-underline">
                rotten shark
              </span>{" "}
              in Iceland. I've floated in the{" "}
              <span className="custom-underline">Dead Sea</span> at the lowest
              elevation on Earth. I've trekked to the top of{" "}
              <span className="custom-underline">Everest</span> at the highest
              elevation. And I've travelled alone in places as far-flung as{" "}
              <span className="custom-underline">South Africa.</span>
            </p>
            <p className="text-3xl mx-32 my-6 mt-24">
              In July 2020, I quit my professional sales career to become a
              student of code. This website serves as a place for me to reflect,
              grow, and share{" "}
              <span className="custom-underline">nibbles n' bytes </span>of my
              journey.
            </p>
            <p className="text-3xl mx-32 my-6 mt-24">
              Check out my projects 👇
            </p>
            <a
              href="https://chrome.google.com/webstore/detail/life-calendar-chrome-exte/ncnnilckkcbigajknhohhodjdebannnf?hl=en&authuser=0"
              target="_blank"
            >
              <img
                src="assets/project-life-calendar.png"
                alt="life calendar"
                className="mx-auto mt-24 w-1/2"
              />
            </a>
            <p className="relative z-10 text-3xl mx-32 my-6 mt-24">
              When I'm not coding, I'm writing. Writing fills my cup. It keeps
              me grounded and grateful. Check out{" "}
              <Link href="/posts">
                <a className="custom-underline font-extrabold">
                  my latest posts
                </a>
              </Link>
            </p>{" "}
            */
            <img
              src="assets/kid.jpg"
              alt="me as a 5 year old"
              className="mx-auto -mt-10"
            />
            {/* <p className="text-xl font-bold mx-32 my-6"><Link href="/posts"><a>My Life Journey to Now</a></Link></p> 
           <p className="text-base mx-32 my-6">July 12, 2020</p> */}
          </div>
        </Container>
      </Layout>
      <style jsx>{`
        header {
        }
        .hero-image {
          background-image: url("/assets/Everest.jpg");
        }
      `}</style>
    </>
  );
}
