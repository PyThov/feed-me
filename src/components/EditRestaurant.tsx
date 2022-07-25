import React, { useState } from "react";
import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { commonColors, commonStyles } from "../common/styles";
import { AreYouSureModal, AsyncStoreRestaurants, GenerateRestaurantElements } from "../common/utils";

interface IEditRestaurantProps {
    visible: boolean;
    setVisible: (a: boolean) => void;
    restaurants: Set<string>;
    setRestaurants: (a: Set<string>) => void;
}

export default function EditRestaurant({visible, setVisible, restaurants, setRestaurants}: IEditRestaurantProps) {
    const [input, setInput] = useState("");
    const [removeAllCheckVisible, setRemoveAllCheckVisible] = useState(false);

    const closeModal = () => {
        console.log(restaurants)
        AsyncStoreRestaurants(restaurants)
        setVisible(false)
    }

    const addRestaurant = (restaurant: string) => {
        if (restaurant == "") {
            return
        }

        if (!restaurants.has(restaurant)) {
            let temp = new Set<string>([...restaurants])
            temp.add(restaurant.toUpperCase())
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

    const removeAllRestaurants = () => {
        setRestaurants(new Set<string>())
    }

    // TODO
    // const importRestaurants = () => {
    //     console.log("TODO: Implement importing of restaurants from notepad/clipboard")
    // }

    return (
        <View>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose = {() => setVisible(false)}
            >
                {/* Header with close button and title */}
                <View>
                    <Button title="Close" onPress={() => closeModal()}/>
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
            
                {/* List of restuarants; each with a '-' button to remove*/}
                <ScrollView style={{flex: 1, margin: 20}}>
                    {GenerateRestaurantElements(restaurants, removeRestaurant)}
                </ScrollView>
            
            {/*Remove all and import from notepad option */}
                <View style={{flex: 0, marginBottom: 10}}>
                    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <View style={{width: "45%"}}>
                            <Button title="Remove All" color={commonColors.red} disabled={restaurants.size === 0} onPress={() => setRemoveAllCheckVisible(true)} />
                            <View style={{right: 0}}>
                                <AreYouSureModal
                                    visible={removeAllCheckVisible}
                                    setVisible={setRemoveAllCheckVisible}
                                    func={removeAllRestaurants}
                                />
                            </View>
                        </View>
                        {/* <View style={{width: "45%"}}>
                            TODO
                            <Button title="Import" color="#9b4dd6" onPress={() => importRestaurants()}/>
                        </View> */}
                    </View>
                </View>
            </Modal>
        </View>
    )
}
