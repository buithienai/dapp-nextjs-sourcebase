import React from 'react';
import Errors from '../components/Errors';
import Layout from 'Layout';
import Root from '../components/Root';

function Error() {
	return (
		<Root>
			<Layout fullscreen>
				<Errors />
			</Layout>
		</Root>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
