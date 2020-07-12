import Link from 'next/link'

export default function Header() {
  return (
    <div className="mt-5 mb-10">
      <Link href="/">
        <a><img src="/assets/logo.png" className="h-24" /></a>
      </Link>
    </div>
    
  )
}
