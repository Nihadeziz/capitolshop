import React from 'react'
import  style from './Trending.module.scss'
const Trending = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.text}>
            <h1>Trending This Week</h1>
        </div>
        <div className={style.navbar}>
                <nav>
                    <ul>
                        <li><a href="">Men</a></li>
                        <li><a href="">Women</a></li>
                        <li><a href="">Baby</a></li>
                        <li><a href="">Fashion</a></li>
                    </ul>
                </nav>
        </div>
    </div>
    </>
  )
}

export default Trending