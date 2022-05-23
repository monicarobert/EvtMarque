import { useNavigation } from '@react-navigation/core'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Login } from '../database/Login'

const PageCreeCompte = (props) => {
  const userEmail = props.route.params?.userEmail;

  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState(userEmail === undefined ? '' : userEmail)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const navigation = useNavigation();

  const valideMDP = (mdp) => { return (mdp !== undefined && mdp.length >= 4 && /\d/.test(mdp)); }
  
  const handleCreationCompte = () => {

    if (!valideMDP(password))
      alert('Le mot de passe doit contenir au moins 8 caractères dont un chiffre')
    else if (password !== password2)
      alert('Les deux mots de passe doivent être identiques');
    else {
      const ret = Login.createUser(email, password, { nom, prenom });
      if (ret == 1)
        alert('Données incorrectes');
      else if (ret == 2)
        alert('Utilisateur déjà existant:' + email);
      else
      {
        alert(`Compte ${email} créé`);
        navigation.replace("Principale", email);
      }
    }
  }
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset = {-200}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="Prénom"
          value={prenom}
          onChangeText={text => setPrenom(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Nom"
          value={nom}a
          onChangeText={text => setNom(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Répéter le mot de passe"
          value={password2}
          onChangeText={text => setPassword2(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleCreationCompte}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Créer le compte</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default PageCreeCompte

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})
