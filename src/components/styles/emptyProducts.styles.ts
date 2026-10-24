import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const emptyProductStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 60,
    },

    icon: {
        fontSize: 48,
        marginBottom: 16,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },

    description: {
        fontSize: 14,
        textAlign: 'center',
        color: colors.grey,
    },
})