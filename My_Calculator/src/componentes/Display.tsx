import React from 'react'
import './Display.css'

// Definir las props que recibe el Display
interface DisplayProps {
  expression: string
  result: string
}

const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div className="display">
      <div className="expression">{expression || '0'}</div>
      <div className="result">{result}</div>
    </div>
  )
}

export default Display