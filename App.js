import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddCart from './components/AddCart';
import OnlineShopping from './components/OnlineShopping';
import PaymentSuccessful from './components/PaymentSuccessful';

class App extends Component {
  render() {
    return (
    <View style={styles.container}>

         <AddCart /> 
        {/* <OnlineShopping /> */}
        {/*<PaymentSuccessful /> */}

        <StatusBar style="auto" />
      </View>
    );
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


export default App; 