import React from 'react'
import { componentWillAppendToBody } from 'react-append-to-body'

const styles = {
	position: 'fixed',
	zIndex: 100,
	top: 0, left: 0, right: 0, bottom: 0,
	backgroundColor: 'rgba(0,0,0,0.4)',
}

const Backdrop = () => {
	return (
		<div style={styles} />
	)
}

export default componentWillAppendToBody(Backdrop)