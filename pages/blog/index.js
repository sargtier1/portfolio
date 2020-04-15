import Layout from '../../components/layout'
import { Row, Col, Divider } from '@zeit-ui/react'
import PostList from '../../components/blog/postList'
import { getAllPosts } from '../../lib/api'

export default function BlogPage({ allPosts }) {
  return (
    <Layout title='My Blog posts'>
      <Row gap={2}>
        <Col span={24}>
          <h2>My Blog</h2>
          <Divider />
        </Col>
      </Row>
      <Row gap={0}>
        <Col span={24}>
          {allPosts ? (
            <PostList posts={allPosts} />
          ) : (
            <h1>Currently there are no posts to view, check back soon!</h1>
          )}
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage'])

  return {
    props: { allPosts },
  }
}
