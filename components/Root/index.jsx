import { Montserrat, Nunito_Sans } from '@next/font/google';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Detect from '../Detect';
import Loading from '../Loading';

const nunito_sans = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	display: 'swap',
	weight: ['400', '600', '700']
});

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap'
});

const Root = (props) => {
	const { isLoading } = useSelector((state) => state.orderReducer);

	return (
		<>
			<style jsx global>{`
				html {
					font-family: var(--primary-font);
				}
				:root {
					--primary-font: ${nunito_sans.style.fontFamily}, Segoe UI, Roboto, Oxygen,
						Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
					--secondary-font: ${montserrat.style.fontFamily}, Segoe UI, Roboto, Oxygen,
						Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
				}
			`}</style>
			{props.children}
			<ToastContainer
				position="bottom-right"
				pauseOnFocusLoss={false}
				hideProgressBar={true}
				autoClose={5000}
			/>
			<Detect />
			<Loading isLoading={isLoading} />
		</>
	);
};

export default Root;
