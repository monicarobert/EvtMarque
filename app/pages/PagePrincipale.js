import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PagePrincipale = () => {
  const navigation = useNavigation()

  const handleMesEvts = () => { navigation.replace("MesEvts") }

  const handleChercheEvt = () => { navigation.replace("Login") }

  const handleCreeEvt = () => { navigation.replace("Login") }

  const handleContactLieux = () => { navigation.replace("Login") }

  return (
    <View style={styles.container}>
      <Text>Email: 'LE MAIL'</Text>
      <TouchableOpacity
        onPress={handleMesEvts}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Mes événements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleChercheEvt}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Chercher un événement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleCreeEvt}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Créer un événement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleContactLieux}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Contact des lieux</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PagePrincipale

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
