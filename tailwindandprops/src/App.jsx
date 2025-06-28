import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-white p-4 rounded-xl'>tailwind test</h1>
     < Card />
      < Card price='$22.00' ss27='HElllo There!' />
         
    </>
  )
}

export default App
