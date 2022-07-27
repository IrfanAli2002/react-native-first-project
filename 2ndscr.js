import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Scrsecond() {

    const [val, setVal] = useState([])


    return (
        <>
            <View style={styles.mainbox}>
                <View>

                    <Text style={styles.text}>Facebook</Text>
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => setVal(e)}
                        placeholder="Phone number or Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => setVal(e)}
                        placeholder="Password"
                    />
                </View>
                <TouchableOpacity style={{top:20}}>
                    <View style={styles.btnbox}>
                        <Text style={{ color: "#fff" }}>Login</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.linkbox}>
                    <TouchableOpacity><Text style={{ color: "#46affa" }}>Forgotten Password?</Text></TouchableOpacity>
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