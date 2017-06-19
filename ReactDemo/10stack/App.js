import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ImagePicker} from 'expo';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title ="Take Picture" onPress={this._pickImage} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  _pickImage() {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
