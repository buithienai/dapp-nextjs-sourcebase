import 'bootstrap/dist/css/bootstrap.min.css';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '../components/styles/globals.scss';
import '../components/styles/custom.scss';
import initStore from '../redux/store/store';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store } = this.props;

		return (
			<Provider store={store}>
				<Head>
					<title>Hello</title>
					<meta name="description" content="Game" />
					<meta name="author" content="Spa" />
					<meta
						name="keywords"
						content="blockchain consultant, polygon, matic, staking"
					/>
					<meta
						property="og:title"
						content="The Leading Platform for Building the Web3 Affiliate Community"
					/>
					<meta property="og:url" content="" />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="" />
					<meta property="og:site-name" content="" />
					<meta property="og:description" content="" />
					<meta property="og:image:alt" content="" />
					<meta charSet="utf-8" />
					<meta
						httpEquiv="Content-Security-Policy"
						content="default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: 'unsafe-inline'; connect-src * 'unsafe-inline'; frame-src *;"
					/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initStore, { debug: false })(MyApp);
