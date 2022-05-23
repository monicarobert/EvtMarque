import { StyleSheet, Text, Pressable } from 'react-native'

export function Evt(props) {

    return (
     <Pressable style={styles.view} key={props.data.evtId}>
       <Text>{props.data.evt.date} : {props.data.evt.nom} ({props.data.evt.lieu})</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 19,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#E9E9E9",
        marginBottom: 15
    },
    text: {
        color: "#003131"
    },
})
