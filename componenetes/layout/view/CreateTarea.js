import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import VectorIcons from "react-antive-vector-icons/AntDesing";
import Texto from '../components/Texto.js';
class CreateTarea extends React.Component {
    constructor(prop){
        super(prop);
        
    }
    render(){
        return(
        <View styles ={styles.container}>
            <View style={styles.inputtext}>
            <VectorIcons name="arrow-with-circle-right" size ={24}color ={Color[Color.key].thirthcolor}></VectorIcons>
            <Texto iconname="rightcieocl"
            placeholder="Nombre de usuario"/>
            <Texto iconname="rightcicleo"
            placeholder="description"/>
            <Texto iconname="date"
            placeholder="hour"/>
        </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: [Color.key].maincolor,
        alingItems: 'center'
    },
    inputtext: {
        flexDirection: "row",
        padding: 5,
        backgroundColor: Color[Color.key].secondcolor,
        width: "80",
        bordeRadius:10,
        elevation: 4,
    },
    textinputcolor:{
        color: Color[Color.key].thirthcolor,
    }
});
export default CreateTarea