import { Image, StyleSheet, Text, View } from "react-native";
import {styles} from "./style"
export default function index(){
    return(
        <View style ={styles.container}>
            <View style= {styles.header}>
            <Image style={styles.headerImage} source={require("@/assets/images/chamadefogo.jpg")}/>
            <Text style={styles.restauranteName}>Chama de Fogo</Text>
            <Text style={styles.subtitle}> A melhor churrascaria do brasil </Text>
            </View>
              
        </View>
      
    )
}

