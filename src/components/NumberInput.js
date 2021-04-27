import React from 'react'

function NumberInput({ type, min, max, defaultValue}) {
    return (
        <div>
            <label htmlFor={type}>{type}</label>
            <input
                type="number"
                name={type}
                id={type}
                min={min}
                max={max}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default NumberInput
