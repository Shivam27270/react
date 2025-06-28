import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('Olive')
  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-col items-center justify-center w-full h-full'>
       
        <div className='fixed bg-white bottom-12 space-x-4 mt-4 rounded-3xl'>
          <button onClick={() => setColor('olive')}className='bg-white text-black px-4 py-2 rounded'>Olive</button>
          <button onClick={() => setColor('SkyBlue')} className='bg-white text-black px-4 py-2 rounded'>SkyBlue</button>
          <button onClick={() => setColor('Tomato')} className='bg-white text-black px-4 py-2 rounded'>Tomato</button>
          <button onClick={() => setColor('green')} className='bg-white text-black px-4 py-2 rounded'>Green</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
