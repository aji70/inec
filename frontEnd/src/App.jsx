import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ConnectButton />
      </div>
      
    </>
  )
}

export default App