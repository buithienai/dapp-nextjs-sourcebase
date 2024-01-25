import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import configs from '../../configs';
import * as appActions from '../../redux/actions/appActions';
import styles from './Detect.module.scss';

const Detect = () => {
	const { isPopupDetect } = useSelector((state) => state.modalReducer);
	const dispatch = useDispatch();

	const handleCloseDetect = () => dispatch(appActions.updateDataModal({ isPopupDetect: false }));

	return (
		<Modal
			centered
			show={isPopupDetect}
			onHide={handleCloseDetect}
			contentClassName="detect-modal">
			<Modal.Header closeButton>
				<Modal.Title>Notice</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Modal.Body>
					<div className={styles.text}>Please connect {configs.nameChain}!</div>
				</Modal.Body>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={handleCloseDetect}>Close</button>
			</Modal.Footer>
		</Modal>
	);
};

export default Detect;
