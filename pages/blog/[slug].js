import { useRouter } from 'next/router'
import Head from 'next/head'
import { Spinner, Row, Col, Spacer } from '@zeit-ui/react'
import PostHeader from '../../components/blog/header'
import PostBody from '../../components/blog/body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/html'
import Layout from '../../components/layout'

export default function Post({ post, width }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <Row style={{ padding: '10px 0', width: '50px' }}>
          <Spinner size='large' />
        </Row>
      ) : (
        <Layout title={post.title}>
          <Head>
            <meta property='og:image' content={post.coverImage} />
          </Head>
          <Row justify='center'>
            <Col>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                width={width}
              />
            </Col>
          </Row>
          <Spacer y={2} />
          <Row justify='center'>
            <Col>
              <PostBody content={post.content} width={width} />
            </Col>
          </Row>
        </Layout>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
