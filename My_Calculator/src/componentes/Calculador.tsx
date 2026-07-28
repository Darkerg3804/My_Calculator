import React from 'react'
import Display from './Display'
import ButtonPad from './ButtonPad'
import './Calculator.css'

const Calculator: React.FC = () => {
  return (
    <div className="calculator">
      <Display />
      <ButtonPad />
    </div>
  )
}

export default Calculator