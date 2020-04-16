import Layout from '../components/layout'
import { Row, Col, Card, Spacer, Divider, Text, Code } from '@zeit-ui/react'
import { GitBranch, GitHub, GitMerge, GitPullRequest } from 'react-feather'
import axios from 'axios'

export default function Projects({ data }) {
  return (
    <Layout title="What I've worked on">
      <Row gap={2}>
        <Col span={24}>
          <h2>Projects</h2>
          <Divider />
        </Col>
      </Row>
      <Row gap={0.5}>
        <Col span={24}>
          <div className='cards-wrapper'>
            {data &&
              data.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .cards-wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}</style>
    </Layout>
  )
}

function ProjectCard({ project }) {
  const { name, html_url, description } = project
  return (
    <>
      <div className='card-wrapper'>
        <Card hoverable style={{ width: '325px' }}>
          <div className='card-header'>
            <GitBranch size={35} />
            <Spacer x={0.5} />
            <a href={`${html_url}`} target='_blank'>
              <h4 style={{ textTransform: 'capitalize' }}>
                <Code>{name}</Code>
              </h4>
            </a>
          </div>
          <div className='card-body'>
            <Spacer x={2} />
            {description ? (
              <Text p>{description}</Text>
            ) : (
              <Text type='secondary' p i>
                No Description Available
              </Text>
            )}
          </div>
        </Card>
      </div>
      <style jsx>{`
        a {
          color: inherit;
        }
        .card-wrapper {
          margin: 1rem;
          flex: 0 1 calc(25% - 1em);
        }
        .card-header {
          display: flex;
        }
      `}</style>
    </>
  )
}

Projects.getInitialProps = async () => {
  const res = await axios.get(
    `https://api.github.com/users/sargtier1/repos?sort=created`
  )

  return {
    data: res.data,
  }
}
