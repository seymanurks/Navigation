import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from "react-native"

function Second({navigation}) {

    const backToFirst = () => {
        navigation.goBack()
    }
    
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello from Second</Text>
        <Button title='Go Back' onPress={backToFirst}/>
        </SafeAreaView>
        )
    }
    export default Second; 
    
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'},
        text: {
            fontSize: 40, 
            fontWeight: 'bold'},
    });