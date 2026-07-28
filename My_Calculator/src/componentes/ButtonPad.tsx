import React from 'react'
import Button from './Button'
import './ButtonPad.css'

interface ButtonPadProps {
  onButtonClick: (label: string) => void
}

const ButtonPad: React.FC<ButtonPadProps> = ({ onButtonClick }) => {
  const buttons = [
    ['(', ')', 'C', '⌫'],
    ['√', '^', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]

  return (
    <div className="button-pad">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((label) => (
            <Button
              key={label}
              label={label}
              onClick={() => onButtonClick(label)} // ← Aquí pasamos la función
              className={
                label === '=' ? 'equals' :
                label === '÷' || label === '×' || label === '-' || label === '+' ? 'operator' :
                label === 'C' ? 'clear' :
                label === '⌫' ? 'delete' :
                label === '√' || label === '^' ? 'function' :
                label === '(' || label === ')' ? 'parenthesis' :
                ''
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ButtonPad