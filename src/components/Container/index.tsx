import React from 'react'

const Container: React.FC = ({ children }) => {
  return (
      <div className="bg-zinc-900 h-full flex items-center justify-center">
          {children}
      </div>
  )
}

export default Container
