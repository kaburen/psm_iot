import React from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

class MyModal extends React.Component {
    render() {
        return <Modal transparent={true}
                      visible={false}> //TODO
            <View style={styles.modalView}>
                <View><Text style={{fontSize: 24}}>Rules:</Text>

                </View>
                <TouchableOpacity style={styles.openButton}
                                  onPress={()=>console.log("click")}>
                    <Text style={{color: '#ffffff', fontFamily: 'Inter'}}>I Agree</Text>
                </TouchableOpacity>
            </View>
        </Modal>;
    }
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#EBEBEB",
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    openButton: {
        backgroundColor: "#1061d4",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        justifyContent: "center",
    },
})
export default MyModal