import Layout from '../components/layout'
import { Row, Col } from '@zeit-ui/react'

export default function About() {
  return (
    <Layout title='About Salvatore Argentieri'>
      <Row gap={2}>
        <Col span={22}>
          <h1>Hello There</h1>
        </Col>
      </Row>
    </Layout>
  )
}
