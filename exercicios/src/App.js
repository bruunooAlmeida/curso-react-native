import React from 'react'
import { View , StyleSheet } from 'react-native'

/*import { Comp1 , Comp2 }  from './components/Multi'
import Primeiro from "./components/Primeiro";
*/
import Aleatorio from './components/Aleatorio'
import AleatorioProfessor from './components/AleatorioProfessor'
import MinMax  from "./components/MinMax";
export default () => (
    <View style={style.App}>
        {/* <MinMax min ={3} max={20}/> */}
        <Aleatorio />
        <AleatorioProfessor min={1} max={60} />
        {/*<Comp1 />
        <Comp2 /> 
        <Primeiro />       
        */}
    </View>
) 

const style = StyleSheet.create({
    App:{
        /*backgroundColor: '#A00', */
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20
    }
})