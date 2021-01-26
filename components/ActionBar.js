import React from "react";
import {StyleSheet, Text, View} from "react-native";


export default class ActionBar extends React.Component {

    render() {
        const {font, title, marTop} = this.props
        return (
            <View style={[styles.headerContainer,{marginTop: marTop}]}>
                <Text style={[styles.headerText, {fontSize: font}]}>{title}</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0045c0",
        marginTop:26,
        paddingVertical:6
    },
    headerText: {
        color: '#ebebeb',
        fontFamily: 'Inter'
    },
})