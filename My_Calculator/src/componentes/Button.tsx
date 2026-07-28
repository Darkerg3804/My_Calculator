import React from 'react'
import './Button.css'

interface ButtonProps {
  label: string
  onClick?: () => void  // ← Debe tener esto
  className?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button