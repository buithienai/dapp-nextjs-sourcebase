import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Maintenance from '@/components/Maintenance';
import Root from '@/components/Root';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import * as appServices from '../../redux/services/appServices';

export default function Layout(props) {
	const [isMaintenance, setIsMaintenance] = useState('-');
	const { isAuth } = props;
	const [isRender, setIsRender] = useState(false);

	useEffect(() => {
		getMaintenanceMode();

		if (isAuth) {
			const accessToken = localStorage.getItem('accessToken');
			if (accessToken === null) {
				Router.push('/');
			} else {
				setIsRender(true);
			}
		} else {
			setIsRender(true);
		}
	}, []);

	const getMaintenanceMode = async () => {
		try {
			let response = await appServices.getMaintenanceMode();

			if (!response.data.success) {
				setIsMaintenance(true);
				return;
			}

			const { data } = response.data.data;

			setIsMaintenance(data.status);
		} catch (error) {
			setIsMaintenance(true);
			console.log(error);
		}
	};

	const renderContent = () => {
		if (isMaintenance === '-') {
			return null;
		}

		if (!isRender) {
			return;
		}

		if (isMaintenance) {
			return <Maintenance />;
		}

		return (
			<div className="container">
				<Header />
				<main>{props.children}</main>
				<Footer />
			</div>
		);
	};

	return <Root>{renderContent()}</Root>;
}
