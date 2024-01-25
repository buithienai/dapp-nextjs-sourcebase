import React from 'react';

const Loading = (props) => {
	return <>{props.isLoading && <div className="hub-loading" />}</>;
};

export default Loading;
