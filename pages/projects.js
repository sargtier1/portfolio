import Layout from '../components/layout'
import { Row, Col } from '@zeit-ui/react'

export default function Contact() {
  return (
    <Layout title="What I've worked on">
      <Row gap={2}>
        <Col span={24}>
          <h1>Hello There</h1>
        </Col>
      </Row>
    </Layout>
  )
}
