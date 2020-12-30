import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className=" grid grid-cols-2 gap-4 py-28 items-center">
          <p className="mr-auto text-3xl font-bold tracking-tighter leading-relaxed text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            Building an inclusive world with code.
          </p>
          <p className="ml-auto text-3xl font-bold">Let's be friends?</p>
          <p className="ml-auto col-start-2 text-2xl">
            Connect with me on
            <Link href="https://www.linkedin.com/in/alicezhao1991/">
              <a target="_blank" className="hover:text-brand-yellow">
                {" "}
                LinkedIn{" "}
              </a>
            </Link>
            or fork me on
            <Link href="https://github.com/alicelovescake">
              <a target="_blank" className="hover:text-brand-yellow">
                {" "}
                GitHub.
              </a>
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
