import React from "react";
import {StyleSheet, View, Text} from "react-native";
import ActionBar from "../components/ActionBar";

export class DevicesScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ActionBar font={32} title={'Devices'}/>

                <Text >Home!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})