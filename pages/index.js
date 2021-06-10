import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Full Stack Engineer working in AiFi Technologies.</p>
        <p>
          Let's build something.
        </p>
      </section>
    </Layout>
  )
}