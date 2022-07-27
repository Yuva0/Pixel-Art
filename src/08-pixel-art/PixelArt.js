import { createContext, useContext, useState } from 'react'
import React from 'react'

const DrawingContext = createContext({
  color: 'lightGrey',
  setColor: () => {}
});

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  
  const {setColor} = useContext(DrawingContext);
  
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={()=>{setColor(color)}}/>)}
    </div>
  )
}

function Pixel () {

  const { color } = useContext(DrawingContext);
  const [ pixelColor, setPixelColor ] = useState('lightgrey')

  const updateColorHandler = () => {
    setPixelColor(color);
  }

  return <div onClick={updateColorHandler} style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) 
  {
    pixels.push(<Pixel key={i} />)
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {

  const [color,setColor] = useState('lightgrey');

  return (
    <DrawingContext.Provider value={{color, setColor}}>
      <div>
        <ColorPicker />
        <Pixels />
      </div>
    </DrawingContext.Provider>
  )
}
