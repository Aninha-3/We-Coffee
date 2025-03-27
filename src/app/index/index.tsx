import { Image, Text, View } from "react-native";
import {styles} from "./style"
export default function index(){
    return(
        <View style ={styles.container}>
            <View style= {styles.header}>
            <Image style={styles.headerImage} source={require("@/assets/images/img2.png")}/>
            <Text style={styles.coffeeName}>We coffe</Text>
            <Text style={styles.subtitle}> A melhor cafeteria do Mundo! </Text>
            </View>

            
            <View style={styles.produtos}>
              <Image style={styles.produtoImage} source={require("@/assets/images/img3.webp")}/>
              <Text style={styles.produtoName}>Bombom</Text>
              <Text style={styles.ingredientes}>Chocolate, amendoim, folhas de ouro</Text>
            </View>
              
        </View>
      
    )
}

