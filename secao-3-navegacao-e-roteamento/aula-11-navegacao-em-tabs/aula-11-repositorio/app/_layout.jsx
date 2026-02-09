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
        <Stack.Screen name="products/index" options={{ headerTitle: "Produtos" }} />
        <Stack.Screen name="products/[id]" options={{ headerTitle: "Detalhes do Produto" }} />
        <Stack.Screen name="+not-found" options={{ headerTitle: "ERRO", headerLeft: () => null }} />
      </Stack>
    </>
  )
}








