import React, { Component } from 'react'
import Backdrop from './Backdrop'

const Modal = ({ children, isOpen, onClickOutside }) => {

	if (!isOpen) return null

	return (
		<div className="modal" style={{display: isOpen ? 'block' : 'none'}}>
			<div className="modal-dialog">
				<div className="modal-content">
					{children}
				</div>
				<Backdrop onClickOutside={onClickOutside} />
			</div>
		</div>
	)
}

export default Modal