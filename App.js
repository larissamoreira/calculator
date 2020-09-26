import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'


function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  addDigit = (n) => {
    console.log(`n: ${n}`)

    const clear = displayValue === '0' || clearDisplay

    if (n === '.' && !clearDisplay && displayValue.includes('.')) {
      return
    }

    const currentValue = clear ? '' : displayValue

    console.log(`current value: ${currentValue}`)
    console.log(`current value + n: ${currentValue + n}`)

    const newLocal = currentValue + n;
    setDisplayValue(newLocal)

    console.log(`displayValue: ${displayValue}`)

    setClearDisplay(false)

    if (n !== '.') {
      const newValue = parseFloat(newLocal)
      const v = [...values]
      v[current] = newValue
      setValues(v)
      console.log(`values: ${values}`)
    }
  }

  clearMemory = () => {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  setOp = op => {
    if (current == 0) {
      setOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = op === '='
      const v = [...values]
      try {
        v[0] = eval(`${v[0]} ${operation} ${v[1]}`)
      } catch (e) {
        v[0] = values[0]
      }
      v[1] = 0
      setDisplayValue(`${v[0]}`)
      setOperation(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(true)
      setValues(v)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={() => setOp('/')} />
        <Button label="7" onClick={() => addDigit('7')} />
        <Button label="8" onClick={() => addDigit('8')} />
        <Button label="9" onClick={() => addDigit('9')} />
        <Button label="*" operation onClick={() => setOp('*')} />
        <Button label="4" onClick={() => addDigit('4')} />
        <Button label="5" onClick={() => addDigit('5')} />
        <Button label="6" onClick={() => addDigit('6')} />
        <Button label="-" operation onClick={() => setOp('-')} />
        <Button label="1" onClick={() => addDigit('1')} />
        <Button label="2" onClick={() => addDigit('2')} />
        <Button label="3" onClick={() => addDigit('3')} />
        <Button label="+" operation onClick={() => setOp('+')} />
        <Button label="0" double onClick={() => addDigit('0')} />
        <Button label="." onClick={() => addDigit('.')} />
        <Button label="=" operation onClick={() => setOp('=')} />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default App;