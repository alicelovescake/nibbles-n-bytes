import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Nibbles n' Bytes</title>
        </Head>
        <Container>
          <Intro />
          <div className=" text-center ">
            <p className="relative z-10 text-7xl mx-20">I <span className="font-extrabold text-persian-green">build</span> technology to <span className="font-extrabold text-persian-green">change</span> the lives of people; not just people like me, but <span className="font-extrabold text-persian-green">every human being</span>.</p>
            <img src="assets/Everest.jpg" alt="picture facing Everest" className="mx-auto -mt-10" />
            <p className="text-3xl mx-32 my-6 mt-24"> I've eaten <span className="custom-underline">rotten shark</span> in Iceland. I've floated in the <span className="custom-underline">Dead Sea</span> at the lowest elevation on Earth. I've trekked to the top of <span className="custom-underline">Everest</span> at the highest elevation. And I've travelled alone in places as far-flung as <span className="custom-underline">South Africa.</span></p>
            <p className="text-3xl mx-32 my-6 mt-24">In July 2020, I quit my professional sales career to become a student of code. This website serves as a place for me to reflect, grow, and share <span className="custom-underline">nibbles n' bytes </span>of my journey. Check out my projects 👇</p> 
            <a href="https://chrome.google.com/webstore/detail/life-calendar-chrome-exte/ncnnilckkcbigajknhohhodjdebannnf?hl=en&authuser=0" target="_blank"><img src="assets/project-life-calendar.png" alt="life calendar" className="mx-auto mt-24 w-1/2" /></a>
            <p className="relative z-10 text-3xl mx-32 my-6 mt-24">When I'm not coding, I'm writing. Writing fills my cup. It keeps me grounded and grateful. </p>
            {/* Check out <Link href="/posts"><a className="custom-underline font-extrabold">my latest posts</a></Link></p>  */}
            <img src="assets/kid.jpg" alt="me as a 5 year old" className="mx-auto -mt-10" />
            {/* <p className="text-xl font-bold mx-32 my-6"><Link href="/posts"><a>My Life Journey to Now</a></Link></p> 
           <p className="text-base mx-32 my-6">July 12, 2020</p> */}
          </div>
        </Container>
      </Layout>
    </>
  )
}
