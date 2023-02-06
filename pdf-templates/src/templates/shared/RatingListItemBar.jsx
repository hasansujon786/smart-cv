import React from 'react'

const RatingListItemBar = ({ title, level }) => {
  return (
    <div className='flex items-center mt-0_half'>
      <p className='text-xs flex-1' style={{ color: 'var(--list-text-c, var(--gray-700))' }}>
        {title}
      </p>
      <div className='rounded-lg h-1_half flex-1' style={{ backgroundColor: 'var(--bar-b, var(--gray-500))' }}>
        <div
          className='rounded-lg h-1_half'
          style={{ backgroundColor: 'var(--bar-t, var(--gray-200))', width: `calc(${level} * 20%)` }}
        />
      </div>
    </div>
  )
}

export default RatingListItemBar
