import Layout from '../components/layout'
import ContactForm from '../components/contactForm.js'
import { Row, Col, Divider } from '@zeit-ui/react'

export default function Contact() {
  return (
    <Layout title='Contact Me'>
      <Row gap={2}>
        <Col span={24}>
          <h2>Contact Me</h2>
          <Divider />
        </Col>
      </Row>
      <Row justify='center' gap={2}>
        <Col span={24}>
          <ContactForm />
        </Col>
      </Row>
      <style jsx>{``}</style>
    </Layout>
  )
}
