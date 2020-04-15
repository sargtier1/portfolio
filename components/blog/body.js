import { Text } from '@zeit-ui/react'

export default function PostBody({ content }) {
  return (
    <div className='post-body'>
      <div
        // className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style jsx>{`
        .post-body {
          width: 60%;
          margin: auto;
        }
        @media (max-width: 840px) {
          .post-body {
            width: 100%;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
