import React from 'react'

const SimpleList = ({ items, col = 'grid-cols-2' }) => {
  return (
    <div className={['grid gap-1', col].join(' ')}>
      {items.map((item, i) => (
        <p key={i} className='text-xs flex-1' style={{ color: 'var(--list-text-c, var(--gray-600))' }}>
          {item.name}
        </p>
      ))}
    </div>
  )
}

export default SimpleList

export const FlexList = ({ items, classNames = '' }) => {
  return (
    <div className={['mt-1 flex flex-wrap gap-y-1 gap-x-3 ', classNames].join(' ')}>
      {items.map((item, i) => (
        <p key={i} className='text-xs' style={{ color: 'var(--list-text-c, var(--gray-600))' }}>
          {item.name}
        </p>
      ))}
    </div>
  )
}
