import React from "react";
import {View, Text} from "react-native";

export class ConnectionScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'Potta', fontSize:30}}>Connection Screen</Text>
                <Text style={{fontFamily: 'Roboto', fontSize:30}} >Connection Screen</Text>
            </View>
        );
    }
}