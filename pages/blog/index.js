import Layout from '../../components/layout'
import { Row, Col } from '@zeit-ui/react'
import PostList from '../../components/blog/postList'
import { getAllPosts } from '../../lib/api'

export default function BlogPage({ allPosts }) {
  return (
    <Layout title='My Blog posts'>
      <Row gap={0}>
        <Col span={24}>
          <PostList posts={allPosts} />
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