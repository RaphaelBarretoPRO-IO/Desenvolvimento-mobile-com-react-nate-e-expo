import { Text, View } from "react-native"
import { styles } from "../../styles/styles"
import { Link } from "expo-router"

export default function Products() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDCB" }]}>
      <Text>Products</Text>
      <Link href="/components/product-detail"> Ver Detalhes do Produto ➡️</Link>
    </View>
  )
}


