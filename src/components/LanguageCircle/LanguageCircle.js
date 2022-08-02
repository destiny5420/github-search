import React, { useEffect, useState, memo, useMemo } from 'react'
import PropTypes from 'prop-types'

const LanguageCircle = (props) => {
  const { type } = props

  const color = useMemo(() => getColor(type), [type])

  function getColor(type) {
    console.log(`getColor function`)
    switch (type) {
      case 'HTML':
        return '#E34C25'
      case 'Vue':
        return '#3FB883'
      case 'JavaScript':
        return '#F1E05A'
      case 'CSS':
        return '#563D7C'
      case 'C#':
        return '#178601'
      case 'SCSS':
        return '#C6538C'
      default:
        return 'transparent'
    }
  }

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

export default memo(LanguageCircle)
