import React from 'react'
import classNames from 'classnames'

const Button = ({ children, onClick, primary }) => {
  return (
    <button onClick={onClick} className={classNames('btn', `btn-${primary ? 'primary' : 'default' }`)}>
      {children}
    </button>
  )
}

export default Button