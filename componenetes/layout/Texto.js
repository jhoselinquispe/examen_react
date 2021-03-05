import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Color from '../layout/colors.js';
import VectorIcons from "react-antive-vector-icons/AntDesing";
class Texto extends React.Component {
    constructor(prop){
        super(prop);
        
    }
    render(){
        var{placeholder} = this.props;
        const {iconname}=this.props;
        return(
        <View styles ={styles.container}>
            <View style={styles.inputtext}>
            <VectorIcons name="arrow-with-circle-right" size ={24}color ={Color[Color.key].thirthcolor}></VectorIcons>
            <TextInput styles={styles.textinputcolor}
            placeholder={placeholder}
            />
        </View>
        </View>
        );
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
                alignItems: 'center',
                textAlign:'center',
                marginBottom: 10,
            },
            textinputcolor:{
                color: Color[Color.key].thirthcolor,
            },
    
        
});

export default Texto;