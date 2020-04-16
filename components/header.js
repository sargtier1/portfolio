import Router from 'next/router'
import Link from 'next/link'
import { Text, ButtonDropdown, Spacer } from '@zeit-ui/react'
import { Box } from 'react-feather'
import ToggleTheme from './toggleTheme'

export default function Header() {
  return (
    <header>
      <div className='section-wrapper'>
        <div className='center'>
          <Link href='/'>
            <a>
              <Box size={45} />
            </a>
          </Link>
        </div>
        <div className='center'>
          <ButtonDropdown>
            <ButtonDropdown.Item main>Menu</ButtonDropdown.Item>

            <ButtonDropdown.Item
              onClick={() => {
                Router.push('/about')
              }}
            >
              About
            </ButtonDropdown.Item>

            <ButtonDropdown.Item
              onClick={() => {
                Router.push('/projects')
              }}
            >
              Projects
            </ButtonDropdown.Item>

            <ButtonDropdown.Item
              onClick={() => {
                Router.push('/blog')
              }}
            >
              Blog
            </ButtonDropdown.Item>

            <ButtonDropdown.Item
              onClick={() => {
                Router.push('/contact')
              }}
            >
              Contact
            </ButtonDropdown.Item>
            <ButtonDropdown.Item>
              <ToggleTheme />
            </ButtonDropdown.Item>
          </ButtonDropdown>
        </div>
      </div>
      <div className='section-wrapper nav-content'></div>
      <style jsx>{`
        .section-wrapper {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        .nav-content {
          width: 100%;
          height: 100%;
        }
        header {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </header>
  )
}
