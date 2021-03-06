import Head from 'next/head'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Image Component Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero heading='AYDev Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div >
  )
}
