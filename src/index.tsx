import * as React from 'react'
import { createRoot } from 'react-dom/client'
import WinterCanvas from './components/canvas'
import Cards from './components/cards'


export default function App() {

  return (
    <>
    <WinterCanvas />
    <Cards />
    </>
  )
}

createRoot(document.getElementById('threejs-container')).render(<App />)

