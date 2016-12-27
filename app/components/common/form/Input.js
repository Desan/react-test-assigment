import React from 'react'
import classNames from 'classnames'

const Input = ({id, value = '', label, type = 'text', placeholder, onChange, onBlur, isValid, ...props}) => {
  return (
    <div className={classNames('form-group', {'has-error': !isValid})}>
      <label className='control-label' htmlFor={id}>{label}</label>
      <input
        className='form-control'
        type={type}
        id={id}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => {onChange && onChange(e.target.value)}}
        onBlur={() => {onBlur && onBlur()}}
        {...props}
      />
    </div>
  )
}

export default Input