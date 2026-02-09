import { Pressable, Text, View } from "react-native"
import { styles } from "../../../styles/styles"
import { useLocalSearchParams, router } from "expo-router"

export default function ProductDetail() {
    const goToHome = () => {
        router.navigate("/")
    }
    const { id } = useLocalSearchParams()
        return (
            <View style={[styles.container, { backgroundColor: "#FACE55FF" }]}>
                <Text>Produto ID: {id}</Text>
                <Pressable onPress={goToHome}>
                    <Text> Ir para Home ➡️</Text>
                </Pressable>
            </View>
        )
    }



