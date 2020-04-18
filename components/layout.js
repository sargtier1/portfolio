import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Meta from './meta'

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <>
        <Meta title={title} />
        <Header />
        <main>{children}</main>
        <Footer />
        <style global jsx>{`
          main {
            min-height: 60vh;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </>
    )
  }
}
