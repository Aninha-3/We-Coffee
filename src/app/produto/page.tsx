import { Text, View, StyleSheet, Image } from "react-native";
import styles from "./styles";

export default function ProductScreen(){
    return(
      <View style={styles.produto}>
        <Image style={styles.imagemProduto} source={require("@/assets/images/img2.png")}/>
        <View style={styles.continer}>
        <Text style={styles.titulo}>Chá Gelado de Frutas Vermelhas</Text>
        <Text style={styles.descricao}>  
          <Text style={{ fontWeight: "bold" }}>Descrição:</Text> <br/> <br/>
          Nosso chá gelado de frutas vermelhas combina a doçura natural das framboesas, morangos e cerejas com um toque sutil de acidez das amoras e mirtilos. Feito com ingredientes selecionados.</Text>
        <Text style={styles.price, styles.pirceButton}>R$ 25,00</Text>
        </View>
      </View>

    )
}


