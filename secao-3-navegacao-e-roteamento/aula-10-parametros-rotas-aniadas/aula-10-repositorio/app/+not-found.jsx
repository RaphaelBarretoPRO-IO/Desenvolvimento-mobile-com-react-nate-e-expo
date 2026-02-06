import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { styles } from "../styles/styles"

export default function NotFound() {
    const goToHome = () => {
        router.replace("/")
    }
    return (
        <View style={[styles.container, { backgroundColor: "#F7D9C4" }]}>
            <Text>Essa página não existe</Text>
            <Pressable onPress={goToHome}>
                <Text> Ir para Home ➡️</Text>
            </Pressable>
        </View>
    )
}