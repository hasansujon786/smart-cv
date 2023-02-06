import React from 'react'

const InfoRow = ({ left, right, separator = '/', className = 'flex' }) => {
  return (
    <div className={className}>
      {left && <span>{left}</span>}
      {left && right && <span>&nbsp;{separator}&nbsp;</span>}
      {right && <span>{right}</span>}
    </div>
  )
}

export default InfoRow
