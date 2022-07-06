import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { Separator } from "../common/components";
import { commonStyles } from "../common/styles";

const styles = StyleSheet.create({
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

// TODO: Add picking animation "drum roll please..."

interface IPickRestaurantProps {
    visible: boolean;
    setVisible: (a: boolean) => void
}

export default function PickRestaurant({visible, setVisible}: IPickRestaurantProps) {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose = {() => setVisible(false)}
            >
                <View style={commonStyles.topView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>Eat at...</Text>
                        <Separator size={8}/>
                        <Text style={{fontSize: 16}}>CHICK FIL A</Text>
                        <Separator size={8} />
                        <Button title="Close" onPress={() => setVisible(false)}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
