import Layout from '../components/layout'
import { Row, Col, Code } from '@zeit-ui/react'

const Home = () => (
  <Layout title='Welcome to my site'>
    <Row style={{ height: '45vh' }} gap={2}>
      <Col span={22}>
        <h2>My name is</h2>
        <h1>
          <Code>Salvatore Argentieri</Code>
        </h1>
      </Col>
    </Row>
  </Layout>
)

export default Home
