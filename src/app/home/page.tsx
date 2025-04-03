import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from 'react-native';
import {styles} from "./style"
import { Link } from 'expo-router';

const menuItems = [
    {
        id: "1",
        name: "Expresso",
        description: "Cafe exresso, nota 6 de intensidade.",
        price: 10.90,
        image: require("@/assets/images/cafe.jpg")
    },
    {
        id: "2",
        name: "Chá gelado",
        description: "Chá de frutas vermelhas com leite.",
        price: 25.00,
        image: require("@/assets/images/img2.png")
    },
    {
        id: "3",
        name: "Bombom",
        description: "4 peças de bombom de diversos sabores.",
        price: 50.00,
        image: require("@/assets/images/img3.webp")
    }
];

export default function Index() {
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.headerImage} source={require("@/assets/images/we-coffee-entrada.jpeg")}/>
            <Text style={styles.restaurantName}>MZ Donalds</Text>
            <Text style={styles.subtitle}>O melhor fast food do mundo</Text>
        </View>

        <View style={styles.tabs}>
            {["Combos", "Lanches", "Promoção"].map((item) => (
                <TouchableOpacity>
                    <Text style={styles.tabsName}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>

        <ScrollView style={styles.menuList}>
            {
                menuItems.map((item) => (
                    <Link href={"/produto/page"} asChild>
                  <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                    </View>
                    <Image style={styles.itemImage} source={item.image}/>
                  </TouchableOpacity>  
                  </Link>
                ))
            }
            </ScrollView>
      
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2023 We coffee</Text>
            <Text style={styles.footerText}>Endereço: Rua da liberdade, São Paulo - SP</Text>
            <Text style={styles.footerText}>Telefone: (11) 1234-5678</Text>
        </View>
  </View>
  );
};



