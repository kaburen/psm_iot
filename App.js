import React from 'react';
import {StyleSheet, Image, ActivityIndicator} from 'react-native';
import * as Font from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DevicesScreen} from "./screens/DevicesScreen";
import {ConnectionScreen} from "./screens/ConnectionScreen";



const Tab = createBottomTabNavigator();

export default class App extends React.Component {
    state = {
        fontsLoaded: false,
    }

    render() {

        if (!this.state.fontsLoaded) {
            return <ActivityIndicator/>
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
            Inter: require("./assets/fonts/Inter-Regular.ttf")
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
