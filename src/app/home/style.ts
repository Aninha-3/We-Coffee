import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        padding: 16
    },
    headerImage: {
        width: "100%",
        height: 240,
        borderRadius: 24
    },

    restaurantName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        color: "#A69076",
        textAlign: "center",
    },

    subtitle: {
        fontSize: 20,
        color: "#A69076",
        marginTop: 6,
       
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
        shadowColor: "#c5a28b",
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
        color: "#705f5f",
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

    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName: {
        color: "#666"
    },
    subtitle: {
        display: "flex",
        justifyContent: "center",
        color: "#666",
        fontSize: 20,
        marginTop: 6
    },
    menuList: {
        padding: 16,
        flex: 1
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#705f5f",
        marginTop: 6
    },
    itemDescription: {
        color: "#666",
        marginTop: 4
    },
    itemPrice: {
        fontSize: 16,
        color: "#443c3c",
        fontWeight: "bold",
        marginTop: 8
    },
    itemImage: {
        width: 100,
        height: 110,
        borderRadius: 8
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
    },
})