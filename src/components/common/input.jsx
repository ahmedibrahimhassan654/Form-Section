import React from 'react'

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className='form-group col-6'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type='text'
        className='form-control'
        id={name}
      />
      {error && <div className='alert alert-warning '>{error}</div>}
    </div>
  )
}

export default Input
