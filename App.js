import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setoutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button onPress= { () => setoutputText('Text Changed')} title="Change Text"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
