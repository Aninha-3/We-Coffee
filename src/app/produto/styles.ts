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
        width: "95%",
        height: "100%",
        backgroundColor: "#e0d3d3",
        borderRadius: 25,
        paddingBottom: 50,
        paddingVertical: 50,
        paddingTop: 20,
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 10
        
    },
    infoContiner: {
       alignItems: "center"
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
        width: "100%",
        height: 50,
        fontSize: 20,
        textAlign: "right",
        marginTop: 20,
        fontWeight: "bold",
        color: "#473b3b",
    },
    descricao: {
        fontSize: 16,
        color: "#705f5f",
        marginTop: 20,
        marginLeft: 20,
    },
    tamanhoCopo: {
        display: "flex",
        fontSize: 16,
        color: "#705f5f",
        fontWeight: "bold",
        width: "100%",
        height: 50,
        padding: 10,
    },
    tamanhoCopos: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        width: "100%",
        height: 40,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: "#e0d3d3",
        borderRadius: 25,
        borderColor: "#473b3b" ,
    }, 
    copoBorder: {
        borderWidth: 1,
        borderColor: "#473b3b",
        backgroundColor: "#e0d3d3",
        borderRadius: 25
    },
    button: {
        backgroundColor: "#92675f",
        width: 160,
        height: 50,
        padding: 20,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        display: "flex",
        alignItems: "center",
        color: "#f1e8e8",
        fontWeight: "bold",
        fontSize: 16,
    }
});

export default styles;