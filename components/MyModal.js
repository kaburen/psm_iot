import React from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid} from "react-native";
import ActionBar from "./ActionBar";

class MyModal extends React.Component {
    state = {
        name: '',
        place: '',
        command: '',

    }

    render() {
        const {visible, fnCancel} = this.props
        return (
            <Modal transparent={true} visible={visible}>

                <ActionBar font={36} title={"New device"} marTop={0}/>
                <View style={styles.modalView}>
                    <View>
                        <TextInput style={styles.inputField}
                                   placeholder={"Name"}
                                   onChangeText={(value) => this.setState({name: value})}/>
                        <TextInput style={styles.inputField}
                                   placeholder={"Place"}
                                   onChangeText={(value) => this.setState({place: value})}/>
                        <TextInput style={styles.inputField}
                                   placeholder={"Command"}
                                   onChangeText={(value) => this.setState({command: value})}/>

                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.openButton}
                                          onPress={() => fnCancel()}>
                            <Text style={{color: '#ffffff', fontFamily: 'Inter'}}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.openButton}
                                          onPress={() => this.checkFields()}>
                            <Text style={{color: '#ffffff', fontFamily: 'Inter'}}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
        )
    }

    checkFields = () => {
        const {name, place, command} = this.state
        let device = {
            name: name,
            place: place,
            command: command
        }
        if (name === '' || place === '' || command === '') {
            ToastAndroid.showWithGravityAndOffset(
                "All fields are required!",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                0,
                180
            );
        } else {
            this.props.fnSave(device)
        }
    }

}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#EBEBEB",
        paddingHorizontal: 28,
        paddingTop: 24,
        width: "100%",
        height: "100%",
    },
    openButton: {
        backgroundColor: "#1061d4",
        width: 120,
        paddingVertical: 12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: "center",
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        marginTop: 16,
        padding: 8,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default MyModal