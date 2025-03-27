import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    header:{
    padding: 16
    },
    headerImage:{
        width: "100%",
        height: 240,
        borderRadius: 24
    },
   coffeeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16
    },

    subtitle: {
    color: "#666",
    marginTop: 4
    },

    produtos: {
        padding: 16,
        backgroundColor: "#F2F2F2",
        flexDirection: "row"
    },

    produtoImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginRight: 16
    },

    produtoName: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
     
    },

    ingredientes: {
        fontSize: 14,
        color: "#666",
        marginTop: 4
    },
})