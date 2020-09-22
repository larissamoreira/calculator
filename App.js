import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native';

import Button from './src/components/Button'

onClick = () => {
  return (
    console.warn('sadjaskd')
  )
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button label="AC" onClick={onClick} />
        <Button label="/" onClick={onClick} />
        <Button label="7" onClick={onClick} />
        <Button label="8" onClick={onClick} />
        <Button label="9" onClick={onClick} />
        <Button label="*" onClick={onClick} />
        <Button label="4" onClick={onClick} />
        <Button label="5" onClick={onClick} />
        <Button label="6" onClick={onClick} />
        <Button label="-" onClick={onClick} />
        <Button label="1" onClick={onClick} />
        <Button label="2" onClick={onClick} />
        <Button label="3" onClick={onClick} />
        <Button label="+" onClick={onClick} />
        <Button label="0" onClick={onClick} />
        <Button label="." onClick={onClick} />
        <Button label="=" onClick={onClick} />
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