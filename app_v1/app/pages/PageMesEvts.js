import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Evt } from '../components/Evt'
import { Evenement } from '../database/Evenements'

const PageMesEvts = (props) => {

  const mesEvts = Evenement.getUserEvtInfo(props.route.params.userEmail);
  const [evtArray, setEvtArray] = useState(mesEvts);
  const navigation = useNavigation();
  
  const handleEvtsPasses = () => { navigation.replace("Login") }

  const handleEvtsAVenir = () => { navigation.replace("Login") }

  return (

    <View style={styles.container}>

      <ScrollView>
        { evtArray.map((item, index) => <Evt data={item} index={index} key={item.evt.id}/>) }
      </ScrollView>

      <View>
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
