import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { Link } from "expo-router";

export default function PaginaDeCadastro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se!
            <Image source={require("@/assets/images/xicara.png")} style={{ width: 25, height: 25, marginLeft: 10}} />
            </Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
            <Link href="/home/page" asChild>
            <TouchableOpacity style={styles.button} onPress={() => alert("Cadastro realizado!")}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            </Link>
          <Link href="/" asChild>
          <TouchableOpacity style={[styles.button, styles.backButton]}>
                <Text style={[styles.backButtonText]}>Voltar ao Login!</Text>
            </TouchableOpacity>
            </Link>
        </View>
    );
}