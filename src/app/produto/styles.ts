import { Text } from "react-native";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    produto: {
        flex: 1,
       alignItems: "center",
    },
    imagemProduto: {
        marginTop: 10,
        marginLeft: 30,
        width: 500,
        height: 500,
        borderRadius: 25,
    },
    continer: {
        position: "absolute",
        top: 500,
        width: "90%",
        height: "50%",
        backgroundColor: "#d1b6b6",
        borderRadius: 25,
        padding: 20,
        alignItems: "center",
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#552828",
        marginTop: 16,
        marginLeft: 20,
        textShadowColor: "#b9acac",
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    price: {
        display: "flex",
      
        fontWeight: "bold",
        color: "#473b3b",
        marginTop: 20
    },
    pirceButton: {
        backgroundColor: "#b0a3a3",
        width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    descricao: {
        fontSize: 16,
        color: "#705f5f",
        marginTop: 30,
        marginLeft: 20,
    },
    });

export default styles;