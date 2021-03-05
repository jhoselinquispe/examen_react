import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import VectorIcons from 'react-native-vector-icons/antDesign';
import Color from '/..layout/colors.js';
class TodoButtom extends React.Component {
    constructor(prop){
        super(prop);
        
    }
    render(){
        const {title}=this.props;
        var icon =iconname;
        if (icon == null)
        {
            icon='check';
        }
        return(
        <TouchableOpacity style={}>
            <VectorIcons name={iconname} size={24} color={Color[Color.key].fourthcolor}/>
       
            <Text>FORMULARIO PARA LA CREACION DE TAREAS</Text>
           <Text style={StyleSheet.txt}></Text>
        </TouchableOpacity>
        );
    }
    const styles =StyleSheet.create({
        btnstyles: {
            backgroundColor:Color[Color.key].thirthcolor,
            flexDirection: 'row',
            padding: 10;
            width: '50%',
            alignItems: 'cneter',
            justify
        },
        txt: {
            Color[Color.key].thirthcolor,
        },
    });


export default TodoButtom;