import React from 'react'

const AnimatedBg = () => {
  return (
    <div className='fixed inset-0 overflow-hidden z-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-r from-neo-primary to-neo-accent opacity-20 blur-3xl animated-blob'></div>
        <div className='absolute top-1/3 right-1/4 w-70 h-70 md:w-90 md:h-90 rounded-full bg-linear-to-r from-neo-secondary to-neo-accent opacity-15 blur-3xl animate-blob animation-delay-2000'></div>
        
    </div>
  )
}

export default AnimatedBg