import React from 'react'

function Title({title1, title2, titleStyles, title1Styles, paraStyles}) {
  return (
    <div className={`${titleStyles} pb-1`}>
        <h2 className={`${title1Styles} h2`}>{title1}
            <span className='text-secondary !font-light'>{title2}</span>
        </h2>
        <p className={`${paraStyles} hidden`}>Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Incidunt, debitis.</p>
    </div>
  )
}

export default Title