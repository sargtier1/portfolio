import Link from 'next/link'
import { Display, Text } from '@zeit-ui/react'
import Date from './date'

const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map(({ title, slug, date, coverImage }, i) => (
          <Link key={i} href='/blog/[slug]' as={`/blog/${slug}`}>
            <a className='cards'>
              <Display
                shadow
                caption={
                  <div className='preview-title'>
                    <Text h3>{title}</Text>
                    <Text p>
                      <Date dateString={date} />
                    </Text>
                  </div>
                }
              >
                <img width={375} height={225} src={coverImage} alt={title} />
              </Display>
            </a>
          </Link>
        ))}
      <style jsx>{`
        .cards {
          width: 500px;
        }
        .preview-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 840px) {
          .cards {
            width: 325px;
          }
          .preview-title {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}

export default PostList
