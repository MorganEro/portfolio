import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        
        <div title='Github Resume'>
          <a href='https://morganero.github.io/' target="_blank" rel="noreferrer">
            <AiFillGithub /> 
          </a>
        </div>
        <div title='LinkedIn'>
          <a href='https://www.linkedin.com/in/morgan-ero/' target="_blank" rel="noreferrer">
            <AiFillLinkedin /> 
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
