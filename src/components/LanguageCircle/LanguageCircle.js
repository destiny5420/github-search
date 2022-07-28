import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageCircle = (props) => {
  const { type } = props
  const [color, setColor] = useState('#fff')

  useEffect(() => {
    switch (type) {
      case 'HTML':
        setColor('#E34C25')
        return
      case 'Vue':
        setColor('#3FB883')
        return
      case 'JavaScript':
        setColor('#F1E05A')
        return
      default:
        return
    }
  }, [type])

  console.log(`[LANGUAGE CIRCLE] re-render`)
  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        margin: '0 0.25rem',
        borderRadius: '50%',
        backgroundColor: `${color}`
      }}></div>
  )
}

LanguageCircle.propTypes = {
  type: PropTypes.string
}

export default LanguageCircle