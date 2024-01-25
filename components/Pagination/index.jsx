import clsx from 'clsx';
import _ from 'lodash';
import { Component } from 'react';
import { ReactSVG } from 'react-svg';
import { PAGE_SIZE } from '../../commons/constants';
import styles from './Pagination.module.scss';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageActive: parseInt(this.props.page + 1)
		};
	}
	componentDidUpdate(preProps) {
		if (preProps.page !== this.props.page) {
			this.setState({
				pageActive: parseInt(this.props.page + 1)
			});
		}
	}

	_renderPaging = () => {
		if (this.props.totalPage > (this.props.pageSize ? this.props.pageSize : PAGE_SIZE)) {
			return (
				<div className={clsx(this.props.className, styles.pagination)}>
					<div className="d-flex">
						{this._renderPreviousPaging()}
						<div className={styles.pageWrapper}>{this._renderContentPaging()}</div>
						{this._renderNextPaging()}
					</div>
				</div>
			);
		}

		return null;
	};

	_renderPreviousPaging = () => {
		let pageActive = this.state.pageActive;

		if (pageActive > 1) {
			return (
				<a
					onClick={() => this.onChangePage('Previous')}
					className={clsx(styles.pgnBtn, styles.prev)}>
					<ReactSVG src="/svg/slider-arrow.svg" />
				</a>
			);
		}

		return (
			<a className={clsx(styles.pgnBtn, styles.prev, styles.disabled)}>
				<ReactSVG src="/svg/slider-arrow.svg" />
			</a>
		);
	};

	_renderNextPaging = () => {
		let totalPage = Math.ceil(
			this.props.totalPage / (this.props.pageSize ? this.props.pageSize : PAGE_SIZE)
		);
		let pageActive = this.state.pageActive;

		if (pageActive < totalPage) {
			return (
				<a
					onClick={() => this.onChangePage('Next')}
					className={clsx(styles.pgnBtn, styles.next)}>
					<ReactSVG src="/svg/slider-arrow.svg" />
				</a>
			);
		}

		return (
			<a className={clsx(styles.pgnBtn, styles.next, styles.disabled)}>
				<ReactSVG src="/svg/slider-arrow.svg" />
			</a>
		);
	};

	pagination = (currentPage, nrOfPages) => {
		if (!nrOfPages) {
			nrOfPages = 1;
		}

		var delta = 1,
			range = [],
			rangeWithDots = [],
			l;

		range.push(1);

		if (nrOfPages <= 1) {
			return range;
		}

		for (let i = currentPage - delta; i <= currentPage + delta; i++) {
			if (i < nrOfPages && i > 1) {
				range.push(i);
			}
		}
		range.push(nrOfPages);

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	};

	_renderContentPaging = () => {
		let totalPage = Math.ceil(
			this.props.totalPage / (this.props.pageSize ? this.props.pageSize : PAGE_SIZE)
		);
		let listPageNumber = this.pagination(this.state.pageActive, totalPage);
		let page = this.state.pageActive;

		return listPageNumber.map((pageNumber, index) => {
			if (!_.isNumber(pageNumber)) {
				return (
					<a className={page === pageNumber ? styles.active : ''} key={index}>
						{pageNumber}
					</a>
				);
			}

			if (listPageNumber.length === 1) {
				return (
					<a
						key={index}
						className={page === pageNumber ? styles.active : ''}
						onClick={() => this.onChangePage(pageNumber)}>
						{pageNumber}
					</a>
				);
			}

			return (
				<a
					key={index}
					className={page === pageNumber ? styles.active : ''}
					onClick={() => this.onChangePage(pageNumber)}>
					{pageNumber}
				</a>
			);
		});
	};

	onChangePage = (active) => {
		let totalPage = Math.ceil(
			this.props.totalPage / (this.props.pageSize ? this.props.pageSize : PAGE_SIZE)
		);

		if (active === 'Previous') {
			if (this.state.pageActive > 1) {
				this.setState({
					pageActive: this.state.pageActive - 1
				});

				this.props.handleChangePage(this.state.pageActive - 1);
			}
			return;
		}

		if (active === 'Next') {
			if (this.state.pageActive < totalPage) {
				this.setState({
					pageActive: this.state.pageActive + 1
				});

				this.props.handleChangePage(this.state.pageActive + 1);
			}
			return;
		}

		this.props.handleChangePage(active);

		this.setState({
			pageActive: active
		});

		return;
	};

	render() {
		return this._renderPaging();
	}
}

export default Pagination;
