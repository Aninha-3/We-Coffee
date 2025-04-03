// Rota da nossa navegação

import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack screenOptions={{
            headerShown: false
        }}/>
    )
}