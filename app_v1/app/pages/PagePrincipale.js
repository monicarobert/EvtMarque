import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PagePrincipale = (props) => {
  const navigation = useNavigation();
  const userEmail = props.route.params.userEmail;

  const handleMesEvts = () => { navigation.navigate("MesEvts", { userEmail }) }

  const handleChercheEvt = () => {
    alert("Recherche événement: à implémenter");
    navigation.navigate("Login");
  }

  const handleCreeEvt = () => {
    alert("Création événement: à implémenter");
    navigation.navigate("Login");
  }

  const handleContactLieux = () => {
    alert("GestionContactLieux: à implémenter");
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text>{userEmail}</Text>
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
