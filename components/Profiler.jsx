import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Profiler = ({ name = "", gender = "", phone = "", email = "", imgPerson = "" }) => {
    return (
        <View style={styles.Container}>
            <Image source={{ uri: imgPerson }} style={styles.Image} />


            <View style={styles.ContainerLabel}>
                <Text style={[styles.Text, styles.TextLabel]}>Nome:</Text>
                <Text style={styles.Text}>{name}</Text>
            </View>


            <View style={styles.ContainerLabel}>
                <Text style={[styles.Text, styles.TextLabel]}>Telefone:</Text>
                <Text style={styles.Text}>{phone}</Text>
            </View>

            <View style={styles.ContainerLabel}>
                <Text style={[styles.Text, styles.TextLabel]}>Email:</Text>
                <Text style={styles.Text}>{email}</Text>
            </View>
        </View>
    )
}

export default Profiler


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }, Image: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 500,
        padding: 20
    },
    ContainerLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },
    Text: {
        fontSize: 20,
        color: "white"
    },
    TextLabel: {
        color: 'gray',
        fontWeight: 'bold'
    }
})