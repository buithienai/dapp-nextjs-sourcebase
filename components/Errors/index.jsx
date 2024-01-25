import Image from 'next/image';
import styles from './Errors.module.scss';

const ErrorPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className="d-flex flex-column">
				<div className="not-found d-flex justify-content-center align-items-center flex-column">
					<Image
						src="/images/404.png"
						width={706}
						height={254}
						quality={70}
						alt="404"
						className={styles.image}
					/>
					<h1 className={styles.title}>Page not found</h1>
					<p className={styles.text}>
						Sorry, the page you are looking for doesn’s exist or has been removed.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
