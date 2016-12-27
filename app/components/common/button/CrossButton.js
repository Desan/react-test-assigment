import React from 'react'

const CrossButton = ({onClick}) => {
	return (
		<button
			type='button'
			className='close'
			onClick={onClick}
		>
			&times;
		</button>
	)
}

export default CrossButton