import { Stack } from "expo-router"

export default function ProductsLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#E94560"
                },
                headerTintColor: "#FFFFFF",
                headerLeft: () => (<DrawerToggleButton tintColor="#FFFFFF" />)
            }}
        >
            <Stack.Screen name="index" options={{ headerTitle: "Lista de Produtos", headerShown: false }} />
            <Stack.Screen name="[id]" options={{ headerTitle: "Detalhes do Produto", headerShown: false }} />
        </Stack>
        
    )
}
