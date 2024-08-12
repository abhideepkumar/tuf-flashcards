import React from 'react'

export const LinkButton = ({text,color,link,onClick}) => {
  return (
    <button className={`${color} text-white font-bold py-2 px-4 rounded-full`} ><a href={`/${link}`} onClick={onClick}>{text}</a></button>
  )
}
