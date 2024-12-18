import React from 'react'
import style from './SectionTwo.module.scss'
const SectionTwo = () => {
  return (
    <>
    <div className={style.container}>
            <div className={`${style.card} ${style.men}`}>
                    <p>Men's Fashion</p>
            </div>
            <div className={`${style.card} ${style.women}`}>
                    <p>Women's Fashion</p>
            </div>
            <div className={`${style.card} ${style.baby}`}>
                    <p>Baby Fashion</p>
            </div>
    </div>
    </>
  )
}

export default SectionTwo