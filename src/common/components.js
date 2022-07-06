import React from "react"
import { Text, TouchableHighlight, View } from "react-native"

export function LargeButton({text, onClick, fontSize = 20, borderRadius = 4, color = "dodgerblue", width = "80%", height = "6%"}) {
    return (
        <TouchableHighlight onPress={onClick}>
            <View style={{
                backgroundColor: color,
                borderRadius: borderRadius,
                minWidth: width,
                minHeight: height,
                justifyContent: "center",
                alignItems: "center"
                }}>
                <Text style={{color: "white", fontSize, fontWeight: "600"}}>{text.toUpperCase()}</Text>
            </View>
        </TouchableHighlight>
    )
}

export function Separator({size = 20}) {
    return (
        <View style={{
            marginVertical: size,
            borderBottomColor: "#737373",
            borderBottomWidth: 1
            }}
        />
    )
}