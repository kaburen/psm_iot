import React from "react";
import {StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, AsyncStorage} from "react-native";
import ActionBar from "../components/ActionBar";
import MyModal from "../components/MyModal";
import {getData, storeData} from "../utils/Storage";


export class DevicesScreen extends React.Component {

    state = {
        devices: [],
        modalVisible: false,
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ActionBar font={36} title={'Devices'} marTop={24}/>
                <ScrollView>
                    <View style={styles.scrollCont}>
                        {this.state.devices.map((device, key) => {
                            return (
                                <TouchableOpacity style={styles.device} key={key}
                                                  onPress={() => console.log(device.command)}>
                                    <Text style={{fontSize: 26, paddingBottom: 4}}> {device.name} </Text>
                                    <Text style={{fontSize: 16}}> {device.place} </Text>
                                </TouchableOpacity>)
                        })}
                        <TouchableOpacity style={styles.device}
                                          onPress={() => this.setState({modalVisible: true})}>
                            <Text style={{fontSize: 56}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <MyModal visible={this.state.modalVisible}
                         fnCancel={this.cancelDevice}
                         fnSave={this.saveDevice}/>
            </SafeAreaView>
        );

    }

    componentDidMount = () => {
        // AsyncStorage.removeItem('devices')
        getData('devices')
            .then(data => {
                if (data !== undefined) {
                    this.loadDevices()
                } else {
                    console.log("no data")
                }

            })
    }

    loadDevices = () => {
        getData('devices')
            .then(data => JSON.parse(data))
            .then(data => {
                this.setState({devices: data})
            })
    }

    saveDevice = (device) => {
        console.log(device)
        if (this.state.devices !== null) {
            storeData('devices', JSON.stringify([...this.state.devices, device]))
                .then(() => {
                    this.setState({
                        devices: [...this.state.devices, device],
                        modalVisible: false,
                    })
                })
        } else {
            storeData('devices', JSON.stringify([device]))
                .then(() => {
                    this.setState({
                            devices: [device],
                            modalVisible: false
                        }
                    )
                })
        }
    }

    cancelDevice = () => {
        this.setState({modalVisible: false})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollCont: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 24
    },
    device: {
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginTop: 24,
        backgroundColor: '#C0D1FF',
    }
})