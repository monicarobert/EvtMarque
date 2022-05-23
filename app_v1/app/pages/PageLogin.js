import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Login } from '../database/Login'

const PageLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

//  useEffect(() => {
 //    alert("UseEffect");
//      const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         navigation.replace("Principale")
//       }
//     })
//     return unsubscribe;
//   }, [])

  const handleLogin = () => {
    let ret = Login.login(email, password);
    if (ret == 0)
      navigation.navigate("Principale", { userEmail: email });
    else
      alert("Données de connection incorrectes");
  }
    
  const handleSignUp = () => {
      navigation.navigate("CreeCompte", { userEmail: email });
  }
  
  const handleRecoverPassword = () => {
      navigation.navigate("MesEvts", { userEmail: 'hip' }) // pour tester: simule login hip
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset = {-100}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Créer un compte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleRecoverPassword}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Mot de passe oublié</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default PageLogin

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
