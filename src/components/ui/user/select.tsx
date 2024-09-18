import React from 'react'

const Select = ({ label, children }: {
  label: string,
  children: React.ReactNode
}) => {
  return (
    <div className="form-group mb--40">
      <label>{ label }</label>
      <select className="select2">
        { children }
      </select>
    </div>
  )
}

export default Select
