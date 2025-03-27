import React from 'react';
import { Image, Text, View } from "react-native";
import { FlatList } from 'react-native';
import {styles} from "./style"

const menuItems = [
    {
        id: "1",
        name: "Expresso",
        description: "Cafe exresso, nota 6 de intensidade.",
        price: "R$ 10,90",
        image: require("@/assets/images/cafe.jpg")
    },
    {
        id: "2",
        name: "Chá gelado",
        description: "Chá de frutas vermelhas com leite.",
        price: "R$ 25,00",
        image: require("@/assets/images/img2.png")
    },
    {
        id: "3",
        name: "Bombom",
        description: "4 peças de bombom de diversos sabores.",
        price: "R$ 50,00",
        image: require("@/assets/images/img3.webp")
    }
];

export default function Index() {
    return(
        <View style={styles.container}>
        <FlatList
            data={menuItems}
            keyExtractor={item => item.id}
            ListHeaderComponent={(
                <View style={styles.header}>
                    <Image source={require("@/assets/images/we-coffee-entrada.jpeg")} style={styles.headerImage} />
                    <Text style={styles.restaurantName}>We coffee</Text>
                    <Text style={styles.restaurantDescri}>A melhor cafeteria do Brasil!</Text>
                    <Text style={styles.restaurantOpcao}>Lanches Bebidas  Promoção</Text>
                </View>
            )}
            renderItem={({ item }) => (
                <View style={styles.menuItem}>
                    <Image source={item.image} style={styles.menuImage} />
                    <View style={styles.menuText}>
                        <Text style={styles.menuTitle}>{item.name}</Text>
                        <Text style={styles.menuDescription}>{item.description}</Text>
                        <Text style={styles.menuPrice}>{item.price}</Text>
                    </View>
                </View>
            )}
        />
        
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2023 We coffee</Text>
            <Text style={styles.footerText}>Endereço: Rua da liberdade, São Paulo - SP</Text>
            <Text style={styles.footerText}>Telefone: (11) 1234-5678</Text>
        </View>
    </View>
  );
};

export default Index;


