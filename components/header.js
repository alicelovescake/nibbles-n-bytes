import Link from "next/link";

export default function Header() {
  return (
    <div className="mt-5 mb-10">
      <h4 className="text-center md:text-left text-3xl mt-5 md:pl-8 font-bold font-serif">
        <Link href="/">
          <a>Alice Zhao</a>
        </Link>
      </h4>
    </div>
  );
}
