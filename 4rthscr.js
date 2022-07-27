import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Scrfourth() {

    const [val, setVal] = useState([])


    return (
        <>
            <View style={styles.mainbox}>
                <View style={{borderRadius:100 }}>
                <FontAwesome5 name='snapchat' color={'black'} size={180} />
                </View>
                <View style={{top:150,}} >
                <TouchableOpacity style={{top:20,}}>
                    <View style={styles.btnbox}>
                        <Text style={{ color: "#fff" }}>Login</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    linkbox: {
        padding: 20,
        top:20,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    btnbox: {
        backgroundColor: "#46affa",
        with: 100,
        paddingHorizontal: 130,
        paddingVertical: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 40,
        color: "#46affa",
        fontWeight: "bold",
        textAlign: 'center',
        // fontFamily:'lucida grande, tahoma, verdana, arial, sans-serif',
        marginBottom: 70,

    },
    mainbox: {
        flex: 1,
        backgroundColor:'#f0ec0e',
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,

    },

    bgc: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 10,
        color: "blue",
    },
    inputbox: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        color: "black",
        margin: 12,
        width: 300,
        borderBottomWidth: 3,
        borderBottomColor: "#ebebeb",
        borderRadius: 8,
        padding: 10,
    },
})