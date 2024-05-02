import React from 'react'
import '../css/car.css'
const Car = () => {
  return (
    <div className='car-container'>
        <div className='car'> 
          <p>소나타</p>
          <p>160하 5698</p>
          <p>사용중</p>
        </div>
        <div className='car'> 
          <p>니로</p>
          <p>178허 3292</p>
          <p>사용중</p>
        </div>
        <div className='car'> 
          <p>캐스퍼</p>
          <p>201호 4961</p>
          <p>사용중</p>
        </div>
        <div className='car'> 
          <p>코나</p>
          <p>230루 5048</p>
          <p>사용중</p>
        </div>
    </div>
  )
}

export default Car