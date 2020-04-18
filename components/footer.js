import { useTheme, Spacer } from '@zeit-ui/react'
import { GitHub, Linkedin, Twitter } from 'react-feather'

export default function Footer() {
  const { palette } = useTheme()
  return (
    <footer>
      <Spacer y={1} />
      <div className='icon-wrapper'>
        <a href='https://github.com/sargtier1' target='_blank'>
          <GitHub size={35} />
        </a>
        <a
          href='https://www.linkedin.com/in/salvatore-argentieri-39a363146/'
          target='_blank'
        >
          <Linkedin size={35} />
        </a>
        <a href='https://twitter.com/Sal_vitro' target='_blank'>
          <Twitter size={35} />
        </a>
      </div>
      <Spacer y={1} />
      <div className='icon-wrapper'>
        <p i style={{ color: palette.purple }}>
          Salvatore Argentieri © {new Date().getFullYear()}
        </p>
      </div>
      <style jsx>{`
        footer {
          border-top 1px solid #eaeaea;
          padding: 1rem;
          justify-content: center;
        }
        .icon-wrapper {
          display: flex;
          justify-content: space-around;
          max-width: 450px;
          margin: auto;
        }
        a {
          color: inherit;
        }
      `}</style>
    </footer>
  )
}
