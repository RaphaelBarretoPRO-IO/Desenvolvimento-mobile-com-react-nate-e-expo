import { Pressable, Text, View } from "react-native"
import { styles } from "../../styles/styles"
import { router } from "expo-router"

export default function ProductDetail() {
    const goToHome = () => {
        router.navigate("/")
    }
        return (
            <View style={[styles.container, { backgroundColor: "#FACE55FF" }]}>
                <Text>Detalhes do Produto</Text>
                <Pressable onPress={goToHome}>
                    <Text> Ir para Home</Text>
                </Pressable>
            </View>
        )
    }
