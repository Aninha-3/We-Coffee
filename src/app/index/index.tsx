import { Image, StyleSheet, Text, View } from "react-native";
import {styles} from "./style"
export default function index(){
    return(
        <View style ={styles.container}>
            <View style= {styles.header}>
            <Image style={styles.headerImage} source={require("@/assets/images/chamadefogo.jpg")}/>
            <Text style={styles.restauranteName}>We coffe</Text>
            <Text style={styles.subtitle}> A melhor cafeteria do Mundo! </Text>
            </View>
              
        </View>
      
    )
}

