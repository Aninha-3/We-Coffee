import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    header:{
    backgroundColor: "#F2F2F2",
    padding: 16
    },
    headerImage:{
        width: "100%",
        height: 240,
        borderRadius: 24
    },

    restaurantName: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        color: "#A69076",
        textAlign: "center",
    },

    restaurantOpcao: {
        fontSize: 20,
        marginTop: 10,
        color: "#A69076",
    },

    restaurantDescri: {
        fontSize: 15,
        marginTop: 10,
        color: "#333",
    },

    menuItem: {
        flexDirection: "row",
        backgroundColor: "#f8f8f8",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    menuImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    menuText: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
    },
    menuDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 4,
    },
    menuPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#BFA58E",
    },

    footer: {
        backgroundColor: "#D9CEC1",
        padding: 10,
        marginTop: 20,
        alignItems: "center",
    },
    footerText: {
        color: "#A69076",
        fontSize: 14,
        marginVertical: 2,
    }

})