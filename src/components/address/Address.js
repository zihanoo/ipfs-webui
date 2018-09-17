import React from 'react'

const Address = ({ value }) => {
  const parts = value.split('/')
  return (
    <div className='charcoal-muted pb1 monospace'>
      {parts.map((chunk, i) => (
        <span key={i}>
          <span className={i % 2 || i > 4 ? 'force-select' : 'force-select charcoal'}>{chunk}</span>
          {i < parts.length - 1 ? '/' : ''}
        </span>
      ))}
    </div>
  )
}

export default Address
