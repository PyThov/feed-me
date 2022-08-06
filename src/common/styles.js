import { StyleSheet, Platform, StatusBar } from "react-native";

export const PlatformTopSpacing = Platform.OS === "android" ? StatusBar.currentHeight : 0

export const commonStyles = StyleSheet.create({
    basicInput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: PlatformTopSpacing,
    },
    headerText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        padding: 5,
    },
    topView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: PlatformTopSpacing + 4,
    },
})

export const commonColors = {
    main: "dodgerblue",
    red: "#e85458",
}
