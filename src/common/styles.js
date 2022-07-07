import { StyleSheet } from "react-native";
import { PlatformTopSpacing } from "./utils";

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