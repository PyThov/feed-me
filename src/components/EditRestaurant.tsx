import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { commonStyles } from "../common/styles";
import { IRestaurant } from "../common/types";
import { generateRestaurantElements } from "../common/utils";

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

interface IEditRestaurantProps {
    visible: boolean;
    setVisible: (a: boolean) => void;
    restaurants: Set<string>;
    setRestaurants: (a: Set<string>) => void;
}

export default function EditRestaurant({visible, setVisible, restaurants, setRestaurants}: IEditRestaurantProps) {
    const [input, setInput] = useState("");
    const [tempRestaurants, setTempRestaurants] = useState(restaurants);

    const addRestaurant = (restaurant: string) => {
        if (restaurant == "") {
            return
        }

        if (!restaurants.has(restaurant)) {
            let temp = new Set<string>([...restaurants])
            temp.add(restaurant)
            setRestaurants(temp)
        }
    }

    const removeRestaurant = (restaurant: string) => {
        if (restaurant == "") {
            return
        }

        if(restaurants.has(restaurant)){
            let temp = new Set<string>([...restaurants])
            temp.delete(restaurant)
            setRestaurants(temp)
        }
    }

    return (
        <View>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose = {() => setVisible(false)}
            >
                {/* Header with close button and title */}
                <View>
                    <Button title="Close" onPress={() => setVisible(false)}/>
                    <Text style={commonStyles.headerText}>Edit Restaurants</Text>
                    <View style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 4,
                            marginHorizontal: 20,
                        }}
                    />
                        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                            <TextInput
                                blurOnSubmit={false}
                                style={[commonStyles.basicInput, {width: "70%"}]}
                                onChangeText={setInput}
                                onSubmitEditing={() => {
                                    addRestaurant(input)
                                    setInput("")
                                }}
                                value={input}
                                placeholder="yum..."
                            />
                            <View style={{justifyContent: "center"}}>
                                <Button title="Add" onPress={() => {
                                    addRestaurant(input)
                                    setInput("")
                                }}/>
                            </View>
                        </View>
                </View>
            
                {/* List of restuarants; Each should have a '+', '-', and 'edit' button; can weight options?*/}
                <View style={{flex: 1, margin: 20}}>
                    {generateRestaurantElements(restaurants, removeRestaurant)}
                </View>
            
            {/*Submit, Remove all, and import from notepad option */}
                <View style={{flex: 0}}>
                    <Text>Submit, remove all, import...</Text>
                </View>
            </Modal>
        </View>
    )
}
