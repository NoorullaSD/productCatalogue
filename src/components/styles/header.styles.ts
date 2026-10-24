import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const headerStyle = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
    },

    headerContent: {
        height: 75,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: colors.darkPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    title: {
        color: colors.snow,
        fontSize: 19,
        fontWeight: '700',
    },

    subtitle: {
        color: colors.lightPrimary,
        fontSize: 12,
        marginTop: 0,
    },

    badge: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: colors.green,
        marginRight: 5
    },
    activeContainer: {
        flexDirection: "row",
        alignItems: "center"
    }

});