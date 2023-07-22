/* eslint-disable jsx-a11y/no-static-element-interactions,no-return-assign */
import React, {Component} from 'react';
import {guid} from './guid';

class SimpleModal extends Component {
	uniqueID = guid();

	constructor(props) {
		super(props);

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}

	// Add listeners immediately after the component is mounted.
	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp, false);
		document.addEventListener('click', this.handleOutsideClick, false);
	}

	// Remove listeners immediately before a component is unmounted and destroyed.
	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyUp, false);
		document.removeEventListener('click', this.handleOutsideClick, false);
	}

	// Handle the key press event.
	handleKeyUp(e) {
		const {handleClose} = this.props;
		const keys = {
			27: () => {
				e.preventDefault();
				handleClose();
			}
		};

		if (keys[e.keyCode]) {
			keys[e.keyCode]();
		}
	}

	// Handle the mouse click on browser window.
	handleOutsideClick(e) {
		const {handleClose} = this.props;

		const mmModal = document.getElementById(this.uniqueID);
		if (e.target === mmModal) {
			handleClose();
		}
	}

	render() {
		const {handleClose, children, show, width, noPadding} = this.props;

		const showHideClassNames = show
			? 'g3-modal-wrapper g3-show-modal'
			: 'g3-modal-wrapper';

		const noInternalPadding = noPadding ? '0 !important' : '';

		return (
			<div>
				<div
					className={showHideClassNames}
					id={this.uniqueID}
					ref={node => (this.modal = node)}
				>
					<div className='g3-modal-content-wrapper'>
						<span
							className='pickACloseButton'
							onClick={handleClose}
						>
							<i className='fa fa-times-circle fa-2x'/>
						</span>
						<div
							className='g3-modal-content make-sweet-a-modal'
							style={{
								minWidth: width,
								padding: noInternalPadding
							}}
						>
							{children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SimpleModal;
