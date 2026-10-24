import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const cartStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    listContent: {
        padding: 16,
        paddingBottom: 10,
    },

    summary: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 20,
        backgroundColor: colors.backgroundColor,
        borderTopWidth: 1,
        borderTopColor: colors.snow,

        ...(Platform.OS === 'android'
            ? {
                elevation: 10,
            }
            : {
                shadowColor: colors.lightDark,
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.08,
                shadowRadius: 6,
            }),
    },

    summaryTitle: {
        marginBottom: 12,
        fontSize: 18,
        fontWeight: '700',
        color: colors.lightDark,
    },

    summaryRow: {
        marginBottom: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    summaryLabel: {
        fontSize: 14,
        color: colors.subText,
    },

    summaryValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.subText,
    },

    freeText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.green,
    },

    divider: {
        height: 1,
        marginVertical: 5,
        backgroundColor: colors.snow,
    },

    totalLabel: {
        fontSize: 17,
        fontWeight: '700',
        color: '#111827',
    },

    totalValue: {
        fontSize: 21,
        fontWeight: '800',
        color: colors.primary,
    },

    checkoutButton: {
        height: 52,
        marginTop: 14,
        borderRadius: 14,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: colors.primary,
    },

    /* Empty Cart */

    emptyContainer: {
        flex: 1,
        paddingHorizontal: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },

    emptyIcon: {
        width: 110,
        height: 110,
        borderRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.snow,
    },

    emptyTitle: {
        marginTop: 22,
        fontSize: 24,
        fontWeight: '800',
        color: colors.lightDark,
    },

    emptyDescription: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center',
        color: colors.subText,
    },

    shopButton: {
        height: 50,
        marginTop: 24,
        paddingHorizontal: 24,
        borderRadius: 13,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: colors.primary,
    },

    shopButtonText: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: '700',
        color: colors.snow,
    },
});

