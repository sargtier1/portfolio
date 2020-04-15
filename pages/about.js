import Layout from '../components/layout'
import { Row, Col, Code, Divider, Text, Spacer } from '@zeit-ui/react'

export default function About() {
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
          <Text h3>Dev Journey</Text>
          <Text>
            I've been exposed to code my entire life. It wasn't until a few
            years ago that I decided to make a make a career for myself as a
            software engineer. In order to learn as much as possibly could, as
            quickly as I could, I enrolled in Southern Methodist University's
            full-stack web development program. Up graduation I worked at
            General Assembly's Software Engineering Immersive as the Associate
            Instructor of the Dallas campus. Currently I am a freelance
            developer serving the DFW metroplex.
          </Text>
        </Col>
      </Row>
      <Spacer y={2} />
      <Row gap={2}>
        <Col span={24}>
          <Text h3>What Drives Me</Text>
          <Text>
            My passion is learning the modern best practices, and frame works. I
            currently utilize the tech suite built by{' '}
            <a href='https://zeit.co/' target='_blank'>
              Zeit
            </a>{' '}
            as it allows me to develop and deploy powerful JAM stack
            applications in a timely manner while leveraging performance, SEO,
            and more.
          </Text>
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
