import { Button, Platform, StatusBar, Text, TouchableHighlight, View } from "react-native"
// import { Icon } from "react-native-vector-icons/Ionicons"
import Ionicons from "react-native-vector-icons/Ionicons"

export const platformTopSpacing = Platform.OS === "android" ? StatusBar.currentHeight : 0
export const generateRestaurantElements = (restaurants: Set<string>, removeRestaurant: (a: string) => void) => {

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
                        <Text style={{fontSize: 16, fontWeight: "500", marginLeft: 10}}>
                            {r}
                        </Text>
                    </View>
                    )
            })}
        </View>
    )
}