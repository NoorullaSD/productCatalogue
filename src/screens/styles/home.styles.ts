import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.snow
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})