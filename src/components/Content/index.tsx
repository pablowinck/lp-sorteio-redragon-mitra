import React from 'react'

const Content: React.FC = ({children}) => {
  return (
      <div className="relative z-10 text-white max-w-2xl w-full m-8 flex flex-col gap-4">
          {children}
      </div>
  )
}

export default Content
