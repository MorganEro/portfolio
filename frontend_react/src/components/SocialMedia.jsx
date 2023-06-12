import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div title='Facebook'>
            <FaFacebookF />
        </div>
        <div title='Instagram'>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia