import Head from 'next/head'
import SEO from '../lib/data/SEO.json'

export default function Meta() {
  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name='description' content={SEO.description} />
      <meta property='og:type' content={SEO.openGraph.type} />
      <meta name='og:title' property='og:title' content={SEO.openGraph.title} />
      <meta
        name='og:description'
        property='og:description'
        content={SEO.openGraph.description}
      />
      <meta property='og:site_name' content={SEO.openGraph.site_name} />
      <meta property='og:url' content={SEO.openGraph.url} />
      <meta name='twitter:card' content={SEO.twitter.cardType} />
      <meta name='twitter:title' content={SEO.openGraph.title} />
      <meta name='twitter:description' content={SEO.openGraph.description} />
      <meta name='twitter:creator' content={SEO.twitter.handle} />

      <meta property='og:image' content={SEO.openGraph.image} />
      <meta name='twitter:image' content={SEO.openGraph.image} />
    </Head>
  )
}
