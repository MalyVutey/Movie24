import React from 'react'
import Root from "../component/root"
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
const Account = () => {
    return (
    <Root>
     <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
    </Root>
    )
}
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green',
      width: Width,
      height: Height
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });
export default Account