
import Link from 'next/link'
import Image from 'next/image'
import Head  from "next/head";
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
        <Image
          src="/images/profile.png" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Image
          src="/images/profile.png" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Image
          src="/images/profile.png" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Image
          src="/images/profile.png" // Route of the image file
          height={1000} // Desired size with correct aspect ratio
          width={1000} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}