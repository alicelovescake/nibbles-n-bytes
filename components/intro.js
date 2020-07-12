import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 mt-8 md:mb-12">
      <img src="assets/logo.png" alt="Nibbles N Bytes logo" className="h-32 md:h-40 " />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-bold">
        A journey from sales to code.
      </h4>
    </section>
  )
}
