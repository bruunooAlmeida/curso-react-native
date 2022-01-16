import React from 'react'
import { View , StyleSheet } from 'react-native'

import { Comp1 , Comp2 }  from './components/Multi'
import Primeiro from "./components/Primeiro";

export default () => (
    <View style={style.App}>
        <Comp1 />
        <Comp2 /> 
        <Primeiro />       
    </View>
) 

const style = StyleSheet.create({
    App:{
        /*backgroundColor: '#A00', */
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})