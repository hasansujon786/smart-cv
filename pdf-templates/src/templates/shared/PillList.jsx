import React from 'react'

const PillList = ({ items }) => {
  return (
    <div className='space-y-2'>
      {items.map((item, i) => (
        <div
          className='rounded mr-2 inline-block flex-1 px-2 py-1'
          key={i}
          style={{ backgroundColor: 'var(--bg-pill)' }}
        >
          <p className='text-xs text-white'>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default PillList
