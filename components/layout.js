import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
        <style global jsx>{`
          main {
            min-height: 75vh;
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
