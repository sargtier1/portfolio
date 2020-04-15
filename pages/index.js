import Layout from '../components/layout'
import { Row, Col, Code, Spacer, Divider } from '@zeit-ui/react'

const Home = () => (
  <Layout title='Welcome to my site'>
    <Spacer y={2} />
    <Row justify='center' align='middle' style={{ height: '35vh' }} gap={2}>
      <div className='wrapper'>
        <Col span={24}>
          <h2>My name is</h2>
          <h1>
            <Code>Salvatore Argentieri</Code>
          </h1>
          <Spacer y={2} />
          <h2>
            I'm a full-stack engineer living in <a>Dallas Texas</a>
          </h2>
        </Col>
      </div>
    </Row>
    <Spacer y={2} />

    <Spacer y={2} />
    <Row>
      <Col span='24'></Col>
    </Row>
    <style jsx>
      {`
        a {
          cursor: text;
        }
        @media (max-width: 840px) {
          .wrapper {
            display: flex;
            flex-direction: column;
          }
        }
      `}
    </style>
  </Layout>
)

export default Home
