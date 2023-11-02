import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractReads } from 'wagmi'
import myAbi from '../utils.js/abi.json'
import { useState } from 'react'

function App() {
  const { data: readData, isError, isLoading } = useContractReads ({
    contracts: [
      {
        address: '0xE54822E46784D9908a239c7F861ccE75584C01b8',
        abi: myAbi,
        functionName: "Bola_Tinubu_APC",
      },
      {
        address: '0xE54822E46784D9908a239c7F861ccE75584C01b8',
        abi: myAbi,
        functionName: "Atiku_Abubakar_PDP",
      },
      {
        address: '0xE54822E46784D9908a239c7F861ccE75584C01b8',
        abi: myAbi,
        functionName: "_Peter_Obi",
      },
    ],
  });
  
  console.log(readData);

  return (
    <>
      <div>
      <ConnectButton />
      </div>
        <p>The total vote of Peter Obi is {String(readData?.[2].result)} </p>
      <p>The total vote of Atiku Abubakar is {String(readData?.[1].result)} </p>
      <p>The total vote of Ahmed Tunubu is {String(readData?.[0].result)} </p>
    </>
  )
}

export default App
