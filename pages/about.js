import Layout from '../components/layout'
import {
  useTheme,
  Row,
  Col,
  Code,
  Divider,
  Text,
  Spacer,
  Collapse,
} from '@zeit-ui/react'
import data from '../lib/data/about.json'

export default function About() {
  const { palette } = useTheme()

  return (
    <Layout title='About Salvatore Argentieri'>
      <Row gap={2}>
        <Col span={24}>
          <h2>
            About <Code>Salvatore Argentieri</Code>
          </h2>
          <Divider />
        </Col>
      </Row>
      <Row gap={2} className='mobile'>
        <Col span={24}>
          <Text h3 style={{ color: palette.violet }}>
            {data.title}
          </Text>
          <Text>{data.devBody}</Text>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={24}>
          <Text h3 style={{ color: palette.violet }}>
            {data.title2}
          </Text>
          <Text>{data.driveBody}</Text>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={24}>
          <Collapse.Group>
            <Collapse title='Front End Skills'>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>ES6</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Deployment</li>
              </ul>
            </Collapse>
            <Collapse title='Back End SKills'>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Mongo DB</li>
                <li>SQL</li>
                <li>User Authentication</li>
              </ul>
            </Collapse>
            <Collapse title='Professional SKills'>
              <ul>
                <li>Effective Communicator</li>
                <li>Team Player</li>
                <li>Punctual</li>
                <li>Extremely Outgoing</li>
              </ul>
            </Collapse>
          </Collapse.Group>
        </Col>
      </Row>
      <style jsx>{`
        .sections {
          width: 100%;
        }
        @media (max-width: 600px) {
          .mobile {
            flex=direction: column;
          }
          .sections {
            width: 50%;
          }
        }
      `}</style>
    </Layout>
  )
}
