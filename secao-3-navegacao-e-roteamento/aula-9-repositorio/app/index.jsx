import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Home</Text>
      <Link href="/components/user"> Ir para Usuários </Link>
      <Link href="/components/products"> Ir para Produtos </Link>
    </View>
  )
}









