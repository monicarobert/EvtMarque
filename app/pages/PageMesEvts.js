import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PageMesEvts = () => {
  const navigation = useNavigation()

  const handleEvtsPasses = () => {
    navigation.replace("Login")
  }

  const handleEvtsAVenir = () => {
    navigation.replace("MesEvts")
  }

  return (
    <View style={styles.container}>

      <Text>Mes événements</Text>

      <TouchableOpacity
        onPress={handleEvtsPasses}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Evénements passés</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleEvtsAVenir}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Evénements à venir</Text>
      </TouchableOpacity>

    </View>
  )
}

export default PageMesEvts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
