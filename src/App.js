import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { SliderPicker } from 'react-color';

const mixColors = (color1 = '#ffffff', color2 = '#000000') => {

  const rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  const _colorString1 = color1.replace('#', '')
  const _colorString2 = color2.replace('#', '')
  const _color1 = [_colorString1.slice(0, 2), _colorString1.slice(2,4), _colorString1.slice(4,6)]
  const _color2 = [_colorString2.slice(0, 2), _colorString2.slice(2,4), _colorString2.slice(4,6)]

  const newColor = _color1.map(
      (channel, index)=> {
        return Math.min(255,
            Math.max(0,
                Math.round((parseInt(channel, 16) + parseInt(_color2[index], 16)) / 2)))
      })

  return ('#'+newColor.map(channel => rgbToHex(channel)).join(''))
}


function App() {

  const [inputColors, setInputColors] = useState(['#ff0033', '#0000ff'])
  const [steps, setSteps] = useState(5)

  const [gradient, setGradient] = useState(inputColors)

  const insert = (array, index, value) => {
    return [...array.slice(0, index), value, ...array.slice(index)]
  }

  const getColorChangeHandler = (color) => (c) => {
    setInputColors(prev=>{
      const copy = [...prev]
      copy[color] = c.hex
      return copy
    })
  }

  const generate = () => {
    let step = 0
    let colorsArray = [...inputColors]
    let newColors = []
    let insertions = {}
    while (step < steps) {
      insertions = colorsArray.reduce((obj, current, index, {length})=>{
        if (index === length - 1) return obj
        return {
          ...obj,
          [index+1+Object.keys(obj).length]: mixColors(current, colorsArray[index+1])
        }
      }, {})

      newColors = [...colorsArray]

      for (let index in insertions) {
        if (index)
        newColors = insert(newColors, +index, insertions[index])
      }
      colorsArray = [...newColors]
      step++
    }
    setGradient(colorsArray)
  }

  useEffect(()=>{generate()}, [])

  return <div className={styles.screen}>
    <div className={styles.controls}>
      <div className={styles.slider}><SliderPicker color={inputColors[0]}
                       onChangeComplete={getColorChangeHandler(0)}
      /></div>
      <div className={styles.slider}><SliderPicker color={inputColors[1]}
                       onChangeComplete={getColorChangeHandler(1)}
      /></div>
      <span>Steps</span>
      <input max={'10'} value={`${steps}`} onChange={(e)=>setSteps(parseInt(e.target.value))} type={'number'}/>
      <button onClick={generate}>Generate</button>
    </div>
    <div className={styles.gradient}>
      {gradient.map((color, index)=><div className={styles.color} key={color+index} style={{backgroundColor: color}}/>)}
    </div>
  </div>
}

export default App;
