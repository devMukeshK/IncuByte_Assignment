import React from 'react'
import { Vibration, View, Text, StyleSheet } from 'react-native'
const App=()=>{
  return(
    <View style={styles.container}>
      <Text>Hello Dev</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{justifyContent:'center', alignItems:'center', flex:1}
})

export default App