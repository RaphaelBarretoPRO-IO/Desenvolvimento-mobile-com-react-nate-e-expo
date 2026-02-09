import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function User() {
  return (
    <View style={[styles.container, { backgroundColor: "#F6B400FF" }]}>
      <Text>Usuário</Text>
      <Link href="/tabs/settings"> Ir para Configurações ➡️</Link>
    </View>
  )
}



