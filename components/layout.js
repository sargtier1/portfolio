import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default class Layout extends React.Component {
  state = {
    isSmall: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isSmall: window.innerWidth <= 840 });
  }

  render() {
    const { children, title } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Header isSmall={this.state.isSmall} />
        <main>{children}</main>
        <Footer />
        <style jsx>{`
          main {
            min-height: 85vh;
          }
        `}</style>
      </>
    );
  }
}
