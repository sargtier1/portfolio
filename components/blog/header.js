import Router from 'next/router'
import { CornerDownLeft } from 'react-feather'
import { Text, Image, Spacer } from '@zeit-ui/react'
import Date from './date'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className='post-header'>
      <Text h2>{title}</Text>
      <Spacer y={2} />
      <div className='subtitle'>
        <Text style={{ margin: 0 }} h3>
          <Date dateString={date} />
        </Text>
        <div className='center back' onClick={() => Router.push('/blog')}>
          <CornerDownLeft size={30} /> <Spacer x={0.5} />
          <Text style={{ margin: 0 }} h4>
            Back
          </Text>
        </div>
      </div>
      <Spacer y={2} />
      <div className='coverImage'>
        <Image className='post-image' height={250} src={coverImage} />
      </div>
      <style jsx>{`
        .back {
          cursor: pointer;
        }
        .subtitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-image {
          height: 450px;
        }
        .post-header {
          width: 60%;
          margin: auto;
        }
        @media (max-width: 840px) {
          .post-image {
            height: 250px;
          }
          .post-header {
            padding: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
