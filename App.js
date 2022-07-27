

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Scr from './1stscr';
import Scrsecond from './2ndscr';
import Scrthird from './3rdscr';
import Scrfourth from './4rthscr';


export default function App() {
  const [val, setVal] = useState([])
  const [render, setRenderdata] = useState([])
  const add = () => {
    if (!val) {
      alert('Fill Data')
    }
    else {
      setRenderdata([...render, val])
      setVal("")

    }
    

  }
  const del = () => {
    setRenderdata([])
  }
  const delone = (id) => {
    const Delete = render.filter((element, index) => {
      return index !== id
    })
    setRenderdata(Delete)

  }
  return (
    <>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

          <View style={styles.mainbox}>

            <Text style={styles.heading}>TODO APP</Text>
            <View style={styles.inputbox}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setVal(e)}
              />
              <TouchableOpacity><Text onPress={add} style={styles.bgc}>Add</Text></TouchableOpacity>
              <TouchableOpacity><Text onPress={del} style={styles.bgc}>Delete</Text></TouchableOpacity>
            </View>
            <ScrollView>
              <View>
                {render.map((value, key) => {
                  return <>
                    <View style={styles.mainbox2}>
                      <Text style={styles.text} key={key}>{value}</Text>
                      <TouchableOpacity><Text onPress={() => delone(key)} style={styles.bgc}>Del</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                })}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
        <View style={{flex:1}}>
          <Scr />
        </View>
        <View style={{flex:1}}>
          <Scrsecond />
        </View>
        <View style={{flex:1}}>
          <Scrthird />
        </View>
        <View style={{flex:1}}>
          <Scrfourth />
        </View>
      </ScrollView>
    </>
  )
}
const image = { uri: "https://media.istockphoto.com/illustrations/minimal-geometric-blue-light-background-abstract-design-illustration-id1193878242?k=20&m=1193878242&s=612x612&w=0&h=ThcVvL--w394lYgqraiFPwL_5PZ8b1Q63RJPPSiPsCM=" };
const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 20,
    padding: 50,

  },
  text: {
    color: "white",
    textAlign: 'center',
    paddingHorizontal: 10,


  },
  mainbox: {
    flex: 1,
    height:600,
    alignItems: 'center',
    justifyContent: 'center',

  },
  mainbox2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

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
    color: "white",
    margin: 12,
    width: 200,
    borderBottomWidth: 3,
    borderBottomColor: "#ebebeb",
    borderRadius: 8,
    padding: 10,
  },
  image: {
    justifyContent: "center"
  },
})