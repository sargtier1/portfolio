import Link from 'next/link'
import { Display, Text, Spacer } from '@zeit-ui/react'
import Date from './date'

const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map(({ title, slug, date, coverImage }, i) => (
          <Link key={i} href='/blog/[slug]' as={`/blog/${slug}`}>
            <a className='cards'>
              <Display
                style={{ maxWidth: '650px' }}
                shadow
                caption={
                  <div className='preview-title'>
                    <Text h3>{title}</Text>
                    <Text h5 type='secondary'>
                      <Date dateString={date} />
                    </Text>
                  </div>
                }
              >
                <img width='100%' height='auto' src={coverImage} alt={title} />
              </Display>
            </a>
          </Link>
        ))}
      <Spacer y={0.5} />
      <style jsx>{`
        .cards {
          max-width: 500px;
        }
        .preview-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 840px) {
         
          .preview-title {
            flex-direction: column;
          }
        }
        @
      `}</style>
    </>
  )
}

export default PostList
