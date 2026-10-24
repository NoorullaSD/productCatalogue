import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const cartItemStyle = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.backgroundColor,
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        elevation: 2,
    },

    productImage: {
        width: 90,
        height: 90,
        borderRadius: 8,
    },

    productInfo: {
        flex: 1,
        marginLeft: 12,
    },

    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.lightDark,
    },

    category: {
        fontSize: 13,
        color: colors.subText,
        marginTop: 4,
    },

    price: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.primary,
        marginTop: 4,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },

    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 6,
        backgroundColor: colors.snow,
        alignItems: 'center',
        justifyContent: 'center',
    },

    quantity: {
        fontSize: 15,
        fontWeight: '600',
        marginHorizontal: 12,
        color: colors.lightDark,
    },

    itemTotal: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.lightDark,
    },
});