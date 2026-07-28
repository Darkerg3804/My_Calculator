import React from 'react'
import './Display.css'

const Display: React.FC = () => {
  return (
    <div className="display">
      <div className="expression">0</div>
      <div className="result"></div>
    </div>
  )
}

export default Display