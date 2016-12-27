import React from 'react'

const ModalHeader = ({ children, title }) => {
	return (
		<div className='modal-header'>
			{children}
			<h4 className='modal-title'>{title}</h4>
		</div>
	)
}

export default ModalHeader
