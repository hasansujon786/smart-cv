import React from 'react'
import RatingListItemBar from './RatingListItemBar'

const RatingList = ({ items, className = 'mt-2' }) => {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <RatingListItemBar title={item.name} level={item.level} key={i} />
      ))}
    </div>
  )
}

export default RatingList
