import React from 'react'

export default function CurrencyRow( properties) {
    const {
        currencyOptions
    } = properties
  return (
    <div>
        <input type="number" className='input' />
        <select>
            {currencyOptions.map(option => (
            <option key= {option} value={option}>{option}</option>    
            ))}
            
        </select>
    </div>
  )
}
