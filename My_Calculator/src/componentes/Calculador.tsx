import React, { useState } from 'react'
import Display from './Display'
import ButtonPad from './ButtonPad'
import { evaluar } from '../utils/evaluador'
import './Calculator.css'

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleButtonClick = (label: string) => {
    if (label === 'C') {
      setExpression('')
      setResult('')
      return
    }
    
    if (label === '⌫') {
      setExpression(prev => prev.slice(0, -1))
      return
    }
    
    if (label === '=') {
      try {
        const resultado = evaluar(expression)  // ← Usa tu función
        setResult(resultado.toString())
      } catch (error) {
        setResult('Error')
      }
      return
    }
    
    setExpression(prev => prev + label)
  }

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <ButtonPad onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator