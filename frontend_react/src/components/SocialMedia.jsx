import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        
        <div title='Github Resume'>
          <a href='https://morganero.github.io/' target="_blank" rel="noreferrer">
            <AiFillGithub /> 

          </a>
        </div>
    </div>
  )
}

export default SocialMedia
