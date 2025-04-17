import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import {styles}  from "./style";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login
        <Image source={require("@/assets/images/xicara.png")} style={{ width: 25, height: 25, marginLeft: 10}} />
        </Text>
        <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
        <Link href="/home/page" asChild>
        <TouchableOpacity style={styles.button} onPress={() => alert("Login realizado!")}>
            <Text style={styles.buttonText}>Entrar!</Text>
        </TouchableOpacity>
        </Link>
        </View>
    )
}