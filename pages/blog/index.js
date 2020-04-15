import Layout from '../../components/layout'
import { Row, Col } from '@zeit-ui/react'

export default function BlogPage() {
  return (
    <Layout title="My Blog posts">
      <Row gap={2}>
        <Col span={22}>
          <h1>Hello There</h1>
        </Col>
      </Row>
    </Layout>
  )
}
