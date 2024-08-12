import React from 'react'

export const Button = ({text,color,onClick}) => {
  return (
    <button className={`${color} text-white font-bold py-2 px-4 rounded-full`} onClick={onClick}>{text}</button>
  )
}
