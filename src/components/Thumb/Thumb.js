import React from 'react'
import './Thumb.scss'
import img from './thumb.svg'

const Thumb = () => {
    return (
        <img src={img} className='thumb rounded-circle' alt='user'/>
    )
}

export default Thumb