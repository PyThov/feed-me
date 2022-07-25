import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button, Modal, Platform, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import { commonColors } from "./styles"

const styles = StyleSheet.create({
    areYouSureModal: {
        backgroundColor: commonColors.red,
        justifyContent: "space-between",
        alignSelf: "center",
        borderRadius: 4,
        marginTop: "50%",
    },
    boldLightText: {
        color: "#eee",
        fontSize: 16,
        fontWeight: "600",
        padding: 20,
        textAlign: "center"
    }
})

export const PlatformTopSpacing = Platform.OS === "android" ? StatusBar.currentHeight : 0

export const AreYouSureModal = ({visible, setVisible, func}: {
    visible: boolean,
    setVisible: (a: boolean) => void,
    func: () => void
    }) => {
    return (
        <View>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {setVisible(false)}}
                transparent={true}
            >
                <View style={styles.areYouSureModal}>
                    <Text style={styles.boldLightText}>Are you sure?</Text>
                    <Button
                        color="darkred"
                        title="Yes"
                        onPress={() => {
                        func()
                        setVisible(false)
                        }} 
                    />
                </View>
            </Modal>
        </View>
    )
}

export const GenerateRestaurantElements = (restaurants: Set<string>, removeRestaurant: (a: string) => void) => {

    if (restaurants.size == 0) {
        return <Text>No restuarants found</Text>
    }

    return (
        <View>
            {Array.from(restaurants).map((r, i) => {
                return (
                    <View key={`restaurant-${i}-${r}`} style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        margin: 4,
                    }}>
                        <TouchableHighlight style={{alignContent: "center", justifyContent: "center"}}>
                            <Ionicons 
                                name="remove-outline"
                                size={20}
                                color="black"
                                onPress={() => removeRestaurant(r)}
                            />
                        </TouchableHighlight>
                        <Text style={{fontSize: 16, marginLeft: 10}}>
                            {r}
                        </Text>
                    </View>
                    )
            })}
        </View>
    )
}

export const GetRandomRestaurant = (restaurants: Set<string>) => {
    if (restaurants.size == 0){
        return "Add one or more restaurants by tapping\n'Edit Restaurants'"
    }
    const restArray = Array.from(restaurants)
    const index = Math.floor(Math.random() * restArray.length)
    return restArray[index]
}

export const AsyncStoreRestaurants = async (restaurants: Set<string>) => {
    const stringedRests = JSON.stringify(Array.from(restaurants));
    try {
        await AsyncStorage.setItem("@feedme-restaurants", stringedRests)
        console.log("Successfully saved restaurants")
    } catch {
        console.error("Could not save restaurants")
    }
}

export const AsyncGetRestaurants = async () => {
    try {
        return await AsyncStorage.getItem("@feedme-restaurants").then(
            (result) => {
                if (result != null) {
                    return new Set<string>(JSON.parse(result))
                }
        })
    } catch {
        console.error("Could not retrieve restaurants")
    }
}
