import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const searchStyle = StyleSheet.create({
    container: {
        margin: 16,
    },

    input: {
        borderWidth: 1,
        borderColor: colors.backgroundColor,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: colors.backgroundColor,
    },
});