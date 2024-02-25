import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from "react-native"

function First(props) {
    console.log(props)
    const navigateToPage = () => props.navigation.navigate("SecondScreen", {username: "Şeyma"})

    return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Hello from First </Text>
    <Button 
    title =  "Go to second" 
    onPress = {navigateToPage}
    />
    </SafeAreaView>
    )
}
export default First; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'},
    text: {
        fontSize: 40, 
        fontWeight: 'bold'},
});