import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const productCardStyle = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginBottom: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.snow,
        borderRadius: 12,
        backgroundColor: colors.backgroundColor,

        elevation: 2,
        shadowColor: colors.lightDark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 3,
    },

    pressed: {
        opacity: 0.8,
    },

    image: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        backgroundColor: colors.snow,
    },

    content: {
        paddingTop: 10,
    },

    name: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.lightDark,
    },

    category: {
        marginTop: 4,
        fontSize: 14,
        color: colors.subText,
    },

    price: {
        marginTop: 6,
        fontSize: 17,
        fontWeight: '700',
        color: colors.primary,
    },
});