import { Pressable, Text, View } from "react-native"
import { styles } from "../../styles/styles"
import { router } from "expo-router"

export default function Settings() {
    const goToHome = () => {
        router.navigate("/")
    }
    return (
        <View style={[styles.container, { backgroundColor: "#FAC124FF" }]}>
            <Text>Configurações</Text>
            <Pressable onPress={goToHome}>
                <Text>Voltar para Home</Text>
            </Pressable>
        </View>
    )
}




