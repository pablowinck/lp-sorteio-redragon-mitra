import React from 'react'

import { BsGithub, BsTwitter, BsTwitch } from 'react-icons/bs'

const SocialMedia: React.FC = () => {
  return (
    <div className="absolute bottom-3 flex gap-4">
      <a href='https://github.com/pablowinck' target={'_blank'}><BsGithub className="text-2xl text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" /></a>
      <a href='https://twitter.com/dev_winter' target={'_blank'}><BsTwitter className="text-2xl text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" /></a>
      <a href='https://www.twitch.tv/devpablowinter' target={'_blank'}><BsTwitch className="text-2xl text-white hover:text-gray-300 transition-all duration-300 cursor-pointer" /></a>
    </div>
  )
}

export default SocialMedia
