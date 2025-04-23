import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'

function Profile() {
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.dashedCircle}>
        <View style={styles.profileCircle}>
          <Text style={styles.text}>Add</Text>
          <Text style={styles.text}>Photo</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  dashedCircle: {
    width: 110,
    height: 110,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ababab',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#cdcdcd",
    backgroundColor: "#cdcdcd",
    justifyContent: 'center',
    alignItems: 'center',
  },
  text : {
    color: '#ababab',
  }
});