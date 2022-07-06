import { StyleSheet } from "react-native";
import { platformTopSpacing } from "./utils";

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
        marginTop: platformTopSpacing,
    },
    headerText: {
        textAlign: "center",
        // alignItems: "center",
        // justifyContent: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        padding: 5,
    },
    topView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: platformTopSpacing + 4,
    },
})