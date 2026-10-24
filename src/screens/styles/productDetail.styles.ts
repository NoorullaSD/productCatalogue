import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
export const productDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    scrollContent: {
        paddingBottom: 110,
    },

    imageContainer: {
        margin: 16,
        height: 330,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: colors.backgroundColor,

        ...(Platform.OS === 'android'
            ? {
                elevation: 3,
            }
            : {
                shadowColor: colors.shadowColor,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 6,
            }),
    },

    image: {
        width: '100%',
        height: '100%',
    },

    content: {
        paddingHorizontal: 20,
    },

    categoryBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: colors.lightPrimary,
        marginBottom: 10,
    },

    categoryText: {
        color: colors.primary,
        fontSize: 13,
        fontWeight: '600',
    },

    productName: {
        fontSize: 28,
        lineHeight: 34,
        fontWeight: '800',
        color: colors.lightDark,
    },

    priceRow: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    price: {
        fontSize: 25,
        fontWeight: '800',
        color: colors.primary,
    },

    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: colors.secondary,
    },

    ratingText: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '700',
        color: colors.lightDark,
    },

    divider: {
        height: 1,
        backgroundColor: colors.snow,
        marginVertical: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.lightDark,
        marginBottom: 8,
    },

    description: {
        fontSize: 15,
        lineHeight: 24,
        color: colors.subText,
    },

    bottomContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,

        paddingHorizontal: 20,
        paddingVertical: 14,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: colors.backgroundColor,
        borderTopWidth: 1,
        borderTopColor: colors.snow,

        ...(Platform.OS === 'android'
            ? {
                elevation: 10,
            }
            : {
                shadowColor: colors.shadowColor,
                shadowOffset: {
                    width: 0,
                    height: -2,
                },
                shadowOpacity: 0.08,
                shadowRadius: 5,
            }),
    },

    bottomLabel: {
        fontSize: 12,
        color: colors.subText,
    },

    bottomPrice: {
        marginTop: 2,
        fontSize: 20,
        fontWeight: '800',
        color: colors.lightDark,
    },

    addButton: {
        minWidth: 155,
        height: 52,
        paddingHorizontal: 18,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,

        ...(Platform.OS === 'android'
            ? {
                elevation: 4,
            }
            : {
                shadowColor: colors.primary,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
            }),
    },

    buttonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },

    addButtonText: {
        marginLeft: 8,
        color: colors.backgroundColor,
        fontSize: 16,
        fontWeight: '700',
    },

    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.snow,
    },

    notFoundText: {
        marginTop: 12,
        fontSize: 17,
        color: colors.grey,
    },

    quantityContainer: {
        minWidth: 155,
        height: 52,
        paddingHorizontal: 6,
        borderRadius: 14,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: colors.snow,
        borderWidth: 1,
        borderColor: colors.lightPrimary,
    },

    quantityButton: {
        width: 40,
        height: 40,
        borderRadius: 11,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: colors.primary,
    },

    quantityText: {
        minWidth: 40,
        textAlign: 'center',

        fontSize: 18,
        fontWeight: '800',
        color: colors.lightDark,
    },

    badge: {
        position: 'absolute',
        top: -2,
        right: -2,
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: colors.error,
        justifyContent: 'center',
        alignItems: 'center',
    },

    badgeText: {
        color: colors.snow,
        fontSize: 10,
        fontWeight: '700',
    },
});