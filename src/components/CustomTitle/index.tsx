// React
import React from 'react'

// CustomTitle
export default function CustomTitle ({
  center,
  alternative,
  number,
  customTitle
}: {
  center: boolean
  alternative: boolean
  number: string
  customTitle: string
}): JSX.Element {
  return (
    <>
      <h2 className={`custom-title ${center ? 'custom-title--center' : ''} ${alternative ? 'custom-title--alternative' : ''}`}>
        <span className="custom-title__number">{number}</span>
        {customTitle}
      </h2>
    </>
  )
}
