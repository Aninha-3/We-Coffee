import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

export default function ProductScreen() {
  return (
    <ScrollView>
    <View style={styles.produto}>
      <Link href="/home/page" style={{ position: "absolute", top: 50, left: 20 }}>
        <Image source={require("@/assets/images/voltar.png")} style={{ width: 30, height: 30 }} />
      </Link>
      <Image style={styles.imagemProduto} source={require("@/assets/images/img2.png")} />
      <View style={styles.continer}>
        <Text style={styles.titulo}>Chá Gelado de Frutas Vermelhas</Text>
        <Text style={styles.price}>$ 25,00</Text>
        <View style={[styles.tamanhoCopo, { width: '90%' }, styles.infoContiner]}>
          <Text style={styles.tamanhoCopo}>Cup size:</Text>
          <View style={styles.tamanhoCopos}>
            <Text style={[styles.tamanhoCopos, styles.copoBorder]}>Small</Text>
            <Text style={[styles.tamanhoCopos, styles.copoBorder]}>Medium</Text>
            <Text style={[styles.tamanhoCopos, styles.copoBorder]}>Large</Text>
          </View>
          <Text style={styles.descricao}>
            <Text style={{ fontWeight: "bold" }}>Descrição:</Text> <br /> <br />
            A doçura natural das framboesas, morangos e cerejas com um toque sutil de acidez das amoras e mirtilos. Feito com ingredientes selecionados.</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => alert("Adicionado!")}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          
        </View>
      </View>
    </View>
    </ScrollView>
  )
}


