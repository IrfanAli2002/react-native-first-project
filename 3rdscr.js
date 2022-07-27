import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Scrthird() {

    const [val, setVal] = useState([])


    return (
        <>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                <View style={styles.mainbox}>

                    <View >
                        <Text style={{ color: "#fff", left: 12, }}>E-MAIL ADDRESS</Text>
                        <View style={styles.maindiv}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => setVal(e)}
                            />
                            <View style={styles.first}>
                                <FontAwesome5 name='envelope' color={'#1568ed'} size={20} />
                            </View>
                        </View>
                        <Text style={{ color: "#fff", left: 12, }}>PASSWORD</Text>
                        <View style={styles.maindiv}>

                            <TextInput
                                style={styles.input}
                                onChangeText={(e) => setVal(e)}
                            />
                            <View style={styles.first}>
                                <FontAwesome5 name='lock' color={'#1568ed'} size={20} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.btnbox}>
                        <TouchableOpacity style={{ top: 20 }}>
                            <View style={{ backgroundColor: '#f20f80', padding: 15, paddingHorizontal: 50, alignItems: 'center', borderRadius: 20, }}>
                                <Text style={{ color: "#fff" }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity><Text style={{ color: "#fff", padding: 25, paddingStart: 35, top: 10, }}>Forgotten Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ color: "#fff", top: 100, }}>CREATE NEW ACCOUNT</Text>
                </View>
            </ImageBackground>

        </>
    )
}
const image = { uri: "https://w0.peakpx.com/wallpaper/482/194/HD-wallpaper-simple-background-purple-pink.jpg" };

const styles = StyleSheet.create({
    maindiv: {
        position: "relative"
    },

    linkbox: {
        padding: 20,
        top: 20,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    btnbox: {
        flexDirection: 'row',
        text: {
        },
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
        height: 55,
        color: "black",
        margin: 12,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 10,

    },
    first: {
        position: 'absolute',
        left: 25,
        top: 28,
    },
})