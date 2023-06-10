import React from 'react'

const InfoRow = ({ left, right, separator = '/', className = 'flex' }) => {
  return (
    <div className={className}>
      {left && <div>{left}</div>}
      {left && right && <div>&nbsp;{separator}&nbsp;</div>}
      {right && <div>{right}</div>}
    </div>
  )
}

export default InfoRow
