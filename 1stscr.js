import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Scr() {

    const [val, setVal] = useState([])


    return (
        <>
            <View style={styles.mainbox}>
                <View>

                    <Text style={styles.text}>Instagram</Text>
                </View>
                <View>

                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => setVal(e)}
                        placeholder="Phone number,UserName or Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => setVal(e)}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.linkbox}>
                    <TouchableOpacity><Text style={{ color: "#46affa", textDecorationLine: "underline" }}>Forgot Password</Text></TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <View style={styles.btnbox}>
                        <Text style={{ color: "#fff" }}>Login</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    linkbox: {
        marginLeft: 180,
        padding: 20,
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
        fontSize: 30,
        textAlign: 'center',
        // fontFamily:'lucida grande, tahoma, verdana, arial, sans-serif',
        marginBottom: 80,

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