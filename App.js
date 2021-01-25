import React from 'react';
import {StyleSheet, Image, ActivityIndicator, Text, View} from 'react-native';
import * as Font from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DevicesScreen} from "./Screens/DevicesScreen";
import {ConnectionScreen} from "./Screens/ConnectionScreen";
// import {Inter_400Regular} from "@expo-google-fonts/inter";



const Tab = createBottomTabNavigator();

// let customFonts = {
//     Inter_400Regular
// }

export default class App extends React.Component {
    state = {
        fontsLoaded: false,
    }

    render() {

        if (!this.state.fontsLoaded) {
            return <View><Text>huj</Text></View>
        } else {
            return (
                <NavigationContainer>
                    <Tab.Navigator tabBarOptions={{showIcon: true}}>
                        <Tab.Screen name="Devices" component={DevicesScreen} options={{
                            tabBarIcon: () => {
                                return <Image source={require('./assets/desktop.png')} style={styles.icons}/>;
                            },
                        }}/>
                        <Tab.Screen name="Connection" component={ConnectionScreen} options={{
                            tabBarIcon: () => {
                                return <Image source={require('./assets/radio.png')} style={styles.icons}/>;
                            },
                        }}/>
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }


    }

   async componentDidMount() {
        await this.loadFonts()

    }

    loadFonts = () => {
        Font.loadAsync({
            Potta: require("./assets/fonts/PottaOne-Regular.ttf"),
            Roboto: require("./assets/fonts/Roboto-Bold.ttf")
        }).then(() => {
            this.setState({fontsLoaded: true})
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        width: 32,
        height: 32,
    }
});
