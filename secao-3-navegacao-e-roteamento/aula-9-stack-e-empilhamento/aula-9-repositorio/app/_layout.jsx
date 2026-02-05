import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#E94560" />
      <Stack screenOptions={{ headerStyle: { backgroundColor: "#E94560" }, headerTintColor: "#FFFFFF" }}>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="components/settings" options={{ headerTitle: "Configurações" }}/>
        <Stack.Screen name="components/user" options={{ headerTitle: "Usuário" }}/>
        <Stack.Screen name="components/products" options={{ headerTitle: "Produtos" }} />
        <Stack.Screen name="components/product-detail" options={{ headerTitle: "Detalhes do Produto" }} />
      </Stack>
    </>
  )
}






