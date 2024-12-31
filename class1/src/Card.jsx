import React from 'react'
import profile from './images/noor.jpeg'

export const Card = () => {
  return (
    <div className='card'>
        <img className='card-image' src={profile} alt='profile picture'></img>
        <h2 className='card-title'>Saabir Siraaj</h2>
        <p className='card-text'>Student at SLIIT and I play games</p>
    </div>
  )
}
