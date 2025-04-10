import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F5F4F2",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#bd9e77",
    },
    input: {
        borderWidth: 1,
        borderColor: "#BFAC99",
        color: "#BFAC99",
        padding: 10,
        marginBottom: 10,
        borderRadius: 24,
        backgroundColor: "#f9f9f9",
    },
    button: {
        backgroundColor: "#BFAC95",
        width: 160,
        padding: 10,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        display: "flex",
        alignItems: "center",
        color: "#F5F4F2",
        fontSize: 16,
    },
    backButton: {
        backgroundColor: "#F5F4F2",
    },
    backButtonText: {
        color: "#BFAC95",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default styles;   
