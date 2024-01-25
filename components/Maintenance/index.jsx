import Image from 'next/image';
import styles from './Maintenance.module.scss';

const Maintenance = () => {
	return (
		<div className={styles.wrapper}>
			<div className="d-flex flex-column">
				<div className="not-found d-flex justify-content-center align-items-center flex-column">
					<h1 className={styles.title}>We’ll be back soon.</h1>
					<p className={styles.text}>
						Sorry for the inconvenience but we’re performing some maintenance at the
						moment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Maintenance;
